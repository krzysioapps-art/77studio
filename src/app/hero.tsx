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

        const update = () => {
            frame = 0;

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

            /*
             * MOBILE
             *
             * Na mobile Hero nie zmniejsza się
             * podczas scrollowania.
             *
             * Zajmuje cały viewport.
             */

            if (viewportWidth <= 700) {
                hero.style.setProperty(
                    "--hero-width",
                    "100vw",
                );

                hero.style.setProperty(
                    "--hero-height",
                    "100svh",
                );

                hero.style.setProperty(
                    "--hero-left",
                    "0px",
                );

                return;
            }

            /*
             * DESKTOP
             *
             * Hero zaczyna jako pełny viewport,
             * a podczas scrollowania zmniejsza się
             * do szerokości contentu.
             */

            const contentWidth =
                Math.min(
                    viewportWidth -
                        page * 2,
                    contentMax,
                );

            const imageRatio =
                16 / 9;

            const finalHeight =
                contentWidth /
                imageRatio;

            const shrinkDistance =
                viewportHeight * 0.5;

            const progress =
                Math.min(
                    Math.max(
                        window.scrollY /
                            shrinkDistance,
                        0,
                    ),
                    1,
                );

            const width =
                viewportWidth -
                (
                    viewportWidth -
                    contentWidth
                ) *
                    progress;

            const height =
                viewportHeight -
                (
                    viewportHeight -
                    finalHeight
                ) *
                    progress;

            const left =
                (
                    viewportWidth -
                    width
                ) / 2;

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

        const requestUpdate = () => {
            if (frame) {
                return;
            }

            frame =
                window.requestAnimationFrame(
                    update,
                );
        };

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