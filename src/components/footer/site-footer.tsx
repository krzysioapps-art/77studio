"use client";

import { useDemoModal } from "@/components/demo-modal/demo-modal-context";

import styles from "./site-footer.module.css";

export function SiteFooter() {
    const { openDemoModal } =
        useDemoModal();

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>

                <div className={styles.brand}>
                    <span>
                        77STUDIO
                    </span>

                    <span>
                        architektury
                    </span>
                </div>

                <div className={styles.company}>
                    <p>
                        77STUDIO architektury sp. z o.o.
                        <br />
                        ul. Kapitulna 2/6
                        <br />
                        00-252 Warszawa
                    </p>

                    <p>
                        biuro@77studio.pl
                        <br />
                        +48 22 643 42 45
                    </p>
                </div>

                <div className={styles.details}>
                    <p>
                        NIP 525 289 20 93
                        <br />
                        REGON 521 010 156
                        <br />
                        KRS 0000946405
                    </p>

                    <p>
                        kapitał zakładowy 10 000 zł
                        <br />
                        w całości wpłacony
                    </p>
                </div>

                <nav className={styles.legal}>
                    <button
                        type="button"
                        onClick={openDemoModal}
                    >
                        Polityka prywatności
                    </button>

                    <button
                        type="button"
                        onClick={openDemoModal}
                    >
                        Regulamin
                    </button>
                </nav>

            </div>

            <div className={styles.bottom}>
                <span>
                    © {new Date().getFullYear()} 77STUDIO architektury
                </span>

                <span>
                    Warszawa
                </span>
            </div>
        </footer>
    );
}