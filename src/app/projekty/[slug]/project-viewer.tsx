"use client";

import {
    useCallback,
    useEffect,
    useState,
} from "react";

import {
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";

import styles from "./project-viewer.module.css";

type ProjectViewerProps = {
    images: string[];
    title: string;
};

export function ProjectViewer({
    images,
    title,
}: ProjectViewerProps) {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);

    const close = useCallback(() => {
        setOpen(false);
    }, []);

    const previous = useCallback(() => {
        setCurrent((index) =>
            index === 0
                ? images.length - 1
                : index - 1,
        );
    }, [images.length]);

    const next = useCallback(() => {
        setCurrent((index) =>
            index === images.length - 1
                ? 0
                : index + 1,
        );
    }, [images.length]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const handleKeyDown = (
            event: KeyboardEvent,
        ) => {
            if (event.key === "Escape") {
                close();
            }

            if (event.key === "ArrowLeft") {
                previous();
            }

            if (event.key === "ArrowRight") {
                next();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown,
        );

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown,
            );

            document.body.style.overflow = "";
        };
    }, [
        open,
        close,
        previous,
        next,
    ]);

    if (!images.length) {
        return null;
    }

    return (
        <>
            <div className={styles.grid}>
                {images.map((image, index) => (
                    <button
                        key={image}
                        type="button"
                        className={`${styles.item} ${
                            styles[
                                `item${index % 6}`
                            ]
                        }`}
                        onClick={() => {
                            setCurrent(index);
                            setOpen(true);
                        }}
                        aria-label={`Otwórz zdjęcie ${index + 1}`}
                    >
                        <img
                            src={image}
                            alt={`${title} — zdjęcie`}
                            loading={
                                index < 3
                                    ? "eager"
                                    : "lazy"
                            }
                        />
                    </button>
                ))}
            </div>

            {open && (
                <div
                    className={styles.viewer}
                    role="dialog"
                    aria-modal="true"
                    aria-label={`Galeria: ${title}`}
                    onMouseDown={(event) => {
                        if (
                            event.target ===
                            event.currentTarget
                        ) {
                            close();
                        }
                    }}
                >
                    {/* ================================
                        VIEWER — GÓRA
                    ================================= */}

                    <div
                        className={
                            styles.viewerTop
                        }
                    >
                        <span>
                            {title}
                        </span>

                        <span>
                            {current + 1} /{" "}
                            {images.length}
                        </span>

                        <button
                            type="button"
                            className={
                                styles.close
                            }
                            onClick={close}
                            aria-label="Zamknij galerię"
                        >
                            <X
                                size={18}
                                strokeWidth={1.5}
                                aria-hidden="true"
                            />
                        </button>
                    </div>


                    {/* ================================
                        POPRZEDNIE
                    ================================= */}

                    <button
                        type="button"
                        className={`${styles.viewerArrow} ${styles.viewerPrevious}`}
                        onClick={previous}
                        aria-label="Poprzednie zdjęcie"
                    >
                        <ChevronLeft
                            size={24}
                            strokeWidth={1.4}
                            aria-hidden="true"
                        />
                    </button>


                    {/* ================================
                        ZDJĘCIE
                    ================================= */}

                    <div
                        className={
                            styles.viewerImage
                        }
                    >
                        <img
                            src={images[current]}
                            alt={`${title} — zdjęcie ${
                                current + 1
                            }`}
                        />
                    </div>


                    {/* ================================
                        NASTĘPNE
                    ================================= */}

                    <button
                        type="button"
                        className={`${styles.viewerArrow} ${styles.viewerNext}`}
                        onClick={next}
                        aria-label="Następne zdjęcie"
                    >
                        <ChevronRight
                            size={24}
                            strokeWidth={1.4}
                            aria-hidden="true"
                        />
                    </button>
                </div>
            )}
        </>
    );
}