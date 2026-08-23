"use client";

import { useEffect, useRef } from "react";

import styles from "./hero.module.css";

export function Hero() {
    const heroRef =
        useRef<HTMLElement | null>(null);

    useEffect(() => {
        const hero = heroRef.current;

        if (!hero) {
            return;
        }

        let frame = 0;
        let animationFrame = 0;
        let isCompact = false;

        const applyDimensions = (
            width: number,
            height: number,
            left: number,
        ) => {
            hero.style.setProperty(
                "--hero-width",
                `${width}px`,
            );

            hero.style.setProperty(
                "--hero-height",
                `${height}px`,
            );

            hero.style.setProperty(
                "--hero-left",
                `${left}px`,
            );
        };

        const getDimensions = () => {
            const viewportWidth =
                window.innerWidth;

            const viewportHeight =
                window.innerHeight;

            const root =
                getComputedStyle(
                    document.documentElement,
                );

            const page =
                parseFloat(
                    root.getPropertyValue(
                        "--page",
                    ),
                ) || 20;

            const contentMax =
                parseFloat(
                    root.getPropertyValue(
                        "--content-max",
                    ),
                ) || 1280;

            const contentWidth =
                Math.min(
                    viewportWidth -
                        page * 2,
                    contentMax,
                );

            const imageRatio = 16 / 9;

            const finalHeight =
                contentWidth /
                imageRatio;

            const finalLeft =
                (
                    viewportWidth -
                    contentWidth
                ) / 2;

            return {
                viewportWidth,
                viewportHeight,
                contentWidth,
                finalHeight,
                finalLeft,
            };
        };

        /*
         * Delikatny easing bez mocnego
         * overshootu.
         *
         * Końcówka jest lekko miękka,
         * ale zdjęcie nie "odbija".
         */
        const easeOutSoft = (
            progress: number,
        ) => {
            const c1 = 1.25;
            const c3 = c1 + 1;

            return (
                1 +
                c3 *
                    Math.pow(
                        progress - 1,
                        3,
                    ) +
                c1 *
                    Math.pow(
                        progress - 1,
                        2,
                    )
            );
        };

        const animateTo = (
            targetCompact: boolean,
        ) => {
            if (animationFrame) {
                window.cancelAnimationFrame(
                    animationFrame,
                );

                animationFrame = 0;
            }

            const {
                viewportWidth,
                viewportHeight,
                contentWidth,
                finalHeight,
                finalLeft,
            } = getDimensions();

            /*
             * Stan początkowy jest jawny.
             *
             * Dzięki temu pierwsza animacja
             * zawsze startuje z prawidłowego
             * centrum viewportu.
             */
            const from = targetCompact
                ? {
                      width:
                          viewportWidth,
                      height:
                          viewportHeight,
                      left: 0,
                  }
                : {
                      width:
                          contentWidth,
                      height:
                          finalHeight,
                      left:
                          finalLeft,
                  };

            const to = targetCompact
                ? {
                      width:
                          contentWidth,
                      height:
                          finalHeight,
                      left:
                          finalLeft,
                  }
                : {
                      width:
                          viewportWidth,
                      height:
                          viewportHeight,
                      left: 0,
                  };

            /*
             * Jeżeli odwracamy animację
             * w jej trakcie, chcemy wystartować
             * z aktualnej pozycji.
             */
            const computed =
                getComputedStyle(hero);

            const currentWidth =
                parseFloat(
                    computed.getPropertyValue(
                        "--hero-width",
                    ),
                );

            const currentHeight =
                parseFloat(
                    computed.getPropertyValue(
                        "--hero-height",
                    ),
                );

            const currentLeft =
                parseFloat(
                    computed.getPropertyValue(
                        "--hero-left",
                    ),
                );

            const hasCurrentPosition =
                Number.isFinite(
                    currentWidth,
                ) &&
                Number.isFinite(
                    currentHeight,
                ) &&
                Number.isFinite(
                    currentLeft,
                );

            const actualFrom =
                hasCurrentPosition
                    ? {
                          width:
                              currentWidth,
                          height:
                              currentHeight,
                          left:
                              currentLeft,
                      }
                    : from;

            /*
             * Przy pierwszym przejściu
             * wymuszamy pełny stan.
             *
             * To eliminuje problem startu
             * animacji od lewej strony.
             */
            if (
                targetCompact &&
                !isCompact
            ) {
                applyDimensions(
                    viewportWidth,
                    viewportHeight,
                    0,
                );
            }

            const start =
                targetCompact &&
                !isCompact
                    ? {
                          width:
                              viewportWidth,
                          height:
                              viewportHeight,
                          left: 0,
                      }
                    : actualFrom;

            const duration = 560;

            const animationStart =
                performance.now();

            const tick = (
                now: number,
            ) => {
                const elapsed =
                    now -
                    animationStart;

                const linearProgress =
                    Math.min(
                        elapsed /
                            duration,
                        1,
                    );

                const progress =
                    easeOutSoft(
                        linearProgress,
                    );

                const width =
                    start.width +
                    (
                        to.width -
                        start.width
                    ) *
                        progress;

                const height =
                    start.height +
                    (
                        to.height -
                        start.height
                    ) *
                        progress;

                const left =
                    start.left +
                    (
                        to.left -
                        start.left
                    ) *
                        progress;

                applyDimensions(
                    width,
                    height,
                    left,
                );

                if (
                    linearProgress <
                    1
                ) {
                    animationFrame =
                        window.requestAnimationFrame(
                            tick,
                        );
                } else {
                    animationFrame = 0;

                    applyDimensions(
                        to.width,
                        to.height,
                        to.left,
                    );
                }
            };

            animationFrame =
                window.requestAnimationFrame(
                    tick,
                );
        };

        const update = () => {
            frame = 0;

            const viewportWidth =
                window.innerWidth;

            const viewportHeight =
                window.innerHeight;

            /*
             * MOBILE
             */

            if (viewportWidth <= 700) {
                if (animationFrame) {
                    window.cancelAnimationFrame(
                        animationFrame,
                    );

                    animationFrame = 0;
                }

                isCompact = false;

                applyDimensions(
                    viewportWidth,
                    viewportHeight,
                    0,
                );

                return;
            }

            /*
             * Scroll jest wyłącznie
             * przełącznikiem między dwoma
             * stanami Hero.
             */

            const scrollY =
                window.scrollY;

            const triggerDistance = 24;

            /*
             * ZMNIEJSZENIE
             */

            if (
                scrollY >
                    triggerDistance &&
                !isCompact
            ) {
                isCompact = true;

                animateTo(true);

                return;
            }

            /*
             * POWRÓT DO PEŁNEGO HERO
             */

            if (
                scrollY <= 0 &&
                isCompact
            ) {
                isCompact = false;

                animateTo(false);
            }
        };

        const requestUpdate = () => {
            if (frame) {
                return;
            }

            frame =
                window.requestAnimationFrame(
                    update,
                );
        };

        /*
         * Stan początkowy.
         */

        const {
            viewportWidth,
            viewportHeight,
        } = getDimensions();

        applyDimensions(
            viewportWidth,
            viewportHeight,
            0,
        );

        update();

        window.addEventListener(
            "scroll",
            requestUpdate,
            {
                passive: true,
            },
        );

        window.addEventListener(
            "resize",
            requestUpdate,
        );

        return () => {
            window.removeEventListener(
                "scroll",
                requestUpdate,
            );

            window.removeEventListener(
                "resize",
                requestUpdate,
            );

            if (frame) {
                window.cancelAnimationFrame(
                    frame,
                );
            }

            if (animationFrame) {
                window.cancelAnimationFrame(
                    animationFrame,
                );
            }
        };
    }, []);

    return (
        <section
            ref={heroRef}
            className={styles.hero}
        >
            <div
                className={styles.heroImage}
            >
                <img
                    src="https://77studio.pl/wp-content/uploads/2025/04/Plock_03.jpg"
                    alt="77STUDIO architektury"
                />

                <div
                    className={
                        styles.heroMeta
                    }
                >
                    <span>
                        77STUDIO architektury
                    </span>

                    <span>
                        Warszawa
                    </span>
                </div>
            </div>
        </section>
    );
}