"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { useDemoModal } from "@/components/demo-modal/demo-modal-context";

import styles from "./site-header.module.css";

const links = [
    {
        href: "/projekty",
        label: "PROJEKTY",
    },
    {
        href: "/studio",
        label: "STUDIO",
    },
    {
        href: "/kontakt",
        label: "KONTAKT",
    },
];

export function SiteHeader() {
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] =
        useState(false);

    const { openDemoModal } =
        useDemoModal();

    return (
        <header
            className={`${styles.header} ${menuOpen
                    ? styles.menuOpen
                    : ""
                }`}
        >
            <Link
                href="/"
                className={styles.brand}
                aria-label="77STUDIO architektury"
                onClick={() =>
                    setMenuOpen(false)
                }
            >
                <span
                    className={styles.logoMark}
                    aria-hidden="true"
                >
                    <span
                        className={styles.seven}
                    />

                    <span
                        className={styles.seven}
                    />
                </span>

                <span
                    className={styles.logoType}
                    aria-hidden="true"
                >
                    <svg width="470" height="99" viewBox="0 0 470 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26 26.9C26 30.1 25 32.7 22.5 34.6C19.6493 36.6259 16.1907 37.6141 12.7 37.4C8.80001 37.4 5.39999 36.6 2.39999 35.2V28C4.89999 29.1 7.00001 30 8.70001 30.4C10.4 30.8 11.9 31 13.3 31C15 31 16.3 30.7 17.2 30C18.1 29.4 18.5 28.4 18.5 27.2C18.5 26.5 18.3 25.8 18 25.2C17.6 24.7 17 24.2 16.2 23.7C14.6818 22.7785 13.1126 21.9439 11.5 21.2C9.3 20.2 7.6 19.2 6.5 18.2C5.4 17.2 4.49999 16.2 3.89999 14.9C3.19999 13.6 2.89999 12.1 2.89999 10.4C2.89999 7.2 3.90001 4.7 6.10001 2.8C8.30001 1 11.3 0.1 15.1 0.1C17.1 0.1 18.8 0.3 20.6 0.8C22.3 1.2 24 1.8 25.9 2.7L23.4 8.7C21.5 7.8 19.9 7.3 18.6 7C17.4 6.7 16.1 6.5 14.9 6.5C13.4 6.5 12.3 6.8 11.6 7.5C10.8 8.2 10.4 9.1 10.4 10.2C10.4 10.9 10.5 11.5 10.9 12C11.2 12.5 11.7 13 12.4 13.4C13 13.9 14.7 14.7 17.2 16C20.6 17.6 22.9 19.2 24.2 20.8C25.504 22.5223 26.1749 24.6411 26.1 26.8L26 26.9ZM54.7 36.9H47V6.9H37V0.6H64.4V7H54.6V36.9H54.7ZM107.7 0.6V24.1C107.7 26.8 107.1 29.1 105.9 31.1C104.7 33.1 102.9 34.7 100.7 35.8C98.4 36.8 95.7 37.4 92.7 37.4C88 37.4 84.3 36.2 81.7 33.8C80.4038 32.5324 79.394 31.0019 78.7386 29.3116C78.0831 27.6212 77.7972 25.8101 77.9 24V0.6H85.6V22.9C85.6 25.7 86.1 27.8 87.2 29.1C88.4 30.4 90.2 31.1 92.8 31.1C95.3 31.1 97.2 30.4 98.3 29.1C99.4 27.8 100 25.7 100 22.9V0.6H107.7ZM154.7 18.4C154.7 24.4 153 28.9 149.6 32.1C146.2 35.3 141.3 36.9 134.9 36.9H124.6V0.6H136C142 0.6 146.5 2.2 149.8 5.3C153.1 8.4 154.7 12.8 154.7 18.4ZM146.7 18.6C146.7 10.8 143.3 6.9 136.4 6.9H132.3V30.5H135.6C143 30.5 146.6 26.5 146.6 18.6H146.7ZM170.2 36.9V0.6H177.9V36.9H170.2ZM228 18.7C228 24.7 226.5 29.3 223.5 32.5C220.5 35.8 216.3 37.4 210.7 37.4C205.2 37.4 200.9 35.8 197.9 32.5C194.9 29.3 193.5 24.7 193.5 18.6C193.5 12.6 195 8 197.9 4.8C200.9 1.6 205.2 0 210.8 0C216.4 0 220.6 1.6 223.6 4.9C226.6 8.1 228 12.7 228 18.7ZM201.5 18.7C201.5 22.7 202.3 25.8 203.9 27.9C205.4 29.9 207.7 30.9 210.8 30.9C216.8 30.9 220 26.9 220 18.7C220 10.5 217 6.4 210.8 6.4C207.8 6.4 205.4 7.4 203.8 9.5C202.3 11.5 201.5 14.6 201.5 18.7ZM26.9 97.9L24.3 89.2H11L8.39999 97.9H0L12.8 61.4H22.2L35.2 97.9H26.9ZM22.4 82.8C20.7896 77.5699 19.1896 72.3365 17.6 67.1C17.1 69.2 15.6 74.4 12.9 82.8H22.4ZM55.4 83.9V97.9H47.8V61.6H58.3C63.3 61.6 66.9 62.5 69.3 64.3C71.6 66.1 72.8 68.8 72.8 72.4C72.8 74.6 72.2 76.4 71.1 78.1C69.9 79.8 68.2 81.1 66.1 82.1L76.7 97.9H68.2L59.5 83.9H55.5H55.4ZM55.4 77.7H57.9C60.4 77.7 62.2 77.3 63.3 76.5C64.5 75.7 65 74.4 65 72.7C65 70.9 64.5 69.7 63.3 69C62.1 68.3 60.3 67.9 57.8 67.9H55.5V77.7H55.4ZM104.8 67.5C101.8 67.5 99.6 68.5 98 70.7C96.2574 73.4031 95.4172 76.5892 95.6 79.8C95.6 87.9 98.6 92 104.8 92C107.3 92 110.4 91.3 114 90V96.5C111 97.7 107.7 98.4 104 98.4C98.7 98.4 94.7 96.8 92 93.6C89.1 90.4 87.7 85.8 87.7 79.8C87.7 76 88.4 72.7 89.7 69.8C91.2 67 93.1 64.8 95.7 63.3C98.3 61.8 101.3 61.1 104.7 61.1C108.3 61.1 111.8 61.9 115.4 63.6L112.9 69.9C111.564 69.2631 110.195 68.6957 108.8 68.2C107.4 67.7 106.1 67.5 104.8 67.5ZM159.5 97.9H151.8V82.2H137.4V97.9H129.7V61.6H137.4V75.8H151.8V61.6H159.5V97.9ZM176.7 97.9V61.6H184.4V97.9H176.7ZM215.5 97.9H207.8V67.9H198V61.6H225.3V67.9H215.5V97.9ZM259.9 97.9H238.9V61.6H259.9V67.9H246.7V75.9H258.9V82.2H246.7V91.5H259.9V97.9ZM304.6 97.9H296L286.5 82.6L283.3 84.9V97.9H275.6V61.6H283.3V78.2L286.3 73.9L296.1 61.6H304.6L292 77.6L304.6 97.9ZM331.2 97.9H323.5V67.9H313.7V61.6H341V67.9H331.1V97.9H331.2ZM384.2 61.6V85.1C384.2 87.7 383.6 90.1 382.4 92.1C381.2 94.1 379.4 95.7 377.2 96.7C374.9 97.8 372.2 98.4 369.2 98.4C364.5 98.4 360.9 97.2 358.3 94.8C356.986 93.5413 355.957 92.0148 355.285 90.324C354.612 88.6332 354.31 86.8176 354.4 85V61.6H362.1V83.8C362.1 86.6 362.7 88.6 363.8 90C364.9 91.3 366.8 92 369.4 92C371.9 92 373.7 91.3 374.9 90C375.9 88.6 376.6 86.6 376.6 83.8V61.6H384.2ZM408.8 83.9V97.9H401.1V61.6H411.7C416.7 61.6 420.3 62.5 422.7 64.3C425 66.1 426.2 68.8 426.2 72.4C426.2 74.6 425.6 76.4 424.4 78.1C423.3 79.8 421.6 81.1 419.4 82.1L430.1 97.9H421.6L412.9 83.9H408.9H408.8ZM408.8 77.7H411.3C413.7 77.7 415.5 77.3 416.7 76.5C417.8 75.7 418.4 74.4 418.4 72.7C418.4 70.9 417.8 69.7 416.6 69C415.5 68.3 413.6 67.9 411.1 67.9H408.8V77.7ZM454 76.5L461.6 61.5H469.9L457.9 83.7V97.9H450.2V83.9L438.2 61.5H446.5L454 76.5Z" fill="currentColor" />
                    </svg>
                </span>
            </Link>

            <nav className={styles.nav}>
                {links.map((link) => {
                    const active =
                        pathname ===
                        link.href ||
                        pathname.startsWith(
                            `${link.href}/`,
                        );

                    const animate =
                        pathname ===
                        link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={[
                                styles.link,
                                active
                                    ? styles.active
                                    : "",
                                animate
                                    ? styles.animate
                                    : "",
                            ]
                                .filter(Boolean)
                                .join(" ")}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>

            <div className={styles.language}>
                <button
                    type="button"
                    className={styles.active}
                >
                    PL
                </button>

                <span>/</span>

                <button
                    type="button"
                    onClick={openDemoModal}
                >
                    EN
                </button>
            </div>

            <button
                type="button"
                className={styles.menuButton}
                onClick={() =>
                    setMenuOpen(
                        (open) => !open,
                    )
                }
                aria-expanded={menuOpen}
                aria-label={
                    menuOpen
                        ? "Zamknij menu"
                        : "Otwórz menu"
                }
            >
                <span
                    className={styles.menuIcon}
                    aria-hidden="true"
                >
                    <i />
                    <i />
                </span>
            </button>

            <div
                className={`${styles.mobileMenu} ${menuOpen
                        ? styles.mobileMenuOpen
                        : ""
                    }`}
            >
                <nav>
                    {links.map((link) => {
                        const active =
                            pathname ===
                            link.href ||
                            pathname.startsWith(
                                `${link.href}/`,
                            );

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={
                                    active
                                        ? styles.mobileLinkActive
                                        : ""
                                }
                                onClick={() =>
                                    setMenuOpen(false)
                                }
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>

                <div
                    className={
                        styles.mobileLanguages
                    }
                >
                    <button
                        type="button"
                        className={styles.active}
                    >
                        PL
                    </button>

                    <span>/</span>

                    <button
                        type="button"
                        onClick={openDemoModal}
                    >
                        EN
                    </button>
                </div>
            </div>
        </header>
    );
}