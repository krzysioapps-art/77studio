"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

import styles from "./demo-modal.module.css";

type DemoModalProps = {
    open: boolean;
    onClose: () => void;
};

export function DemoModal({
    open,
    onClose,
}: DemoModalProps) {
    useEffect(() => {
        if (!open) {
            return;
        }

        const handleKeyDown = (
            event: KeyboardEvent,
        ) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleKeyDown,
        );

        const previousOverflow =
            document.body.style.overflow;

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown,
            );

            document.body.style.overflow =
                previousOverflow;
        };
    }, [open, onClose]);

    if (!open) {
        return null;
    }

    return (
        <div
            className={styles.overlay}
            role="presentation"
            onMouseDown={(event) => {
                if (
                    event.target ===
                    event.currentTarget
                ) {
                    onClose();
                }
            }}
        >
            <div
                className={styles.modal}
                role="dialog"
                aria-modal="true"
                aria-labelledby="demo-modal-title"
            >
                <div className={styles.header}>
                    <span>
                        77STUDIO
                    </span>

                    <button
                        type="button"
                        className={styles.close}
                        onClick={onClose}
                        aria-label="Zamknij"
                    >
                        <X
                            size={18}
                            strokeWidth={1.5}
                            aria-hidden="true"
                        />
                    </button>
                </div>

                <div className={styles.content}>
                    <p className={styles.label}>
                        Wersja demonstracyjna
                    </p>

                    <h2 id="demo-modal-title">
                        Ta strona jest
                        <br />
                        wersją demo.
                    </h2>

                    <p className={styles.text}>
                        Niektóre elementy strony,
                        w tym dokumenty prawne oraz
                        zmiana języka, są obecnie
                        niedostępne.
                    </p>
                </div>
            </div>
        </div>
    );
}