import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { formatPolishText } from "@/lib/polish-text";

import { Hero } from "./hero";

import styles from "./page.module.css";

const projects = [
    {
        slug: "swidernojer",
        name: "Świdernojer",
        location: "Warszawa · Falenica",
        image:
            "https://77studio.pl/wp-content/uploads/2025/04/warszawa-zapole-fot-piotr-krajewski-LQ_15_D_3K2A5487-1.jpg",
    },
    {
        slug: "dom-35-35-na-skarpie",
        name: "Dom 35.35 na skarpie",
        location: "Mazowsze",
        image:
            "https://77studio.pl/wp-content/uploads/2025/04/pl-plock-szpitalna-1-fot-piotr-krajewski-LQ_06_D_3K2A2118-1.jpg",
    },
    {
        slug: "willa-pod-skocznia",
        name: "Willa pod Skocznią",
        location: "Warszawa · Mokotów",
        image:
            "https://77studio.pl/wp-content/uploads/2025/04/YAS7948-HDR-copy.jpg",
    },
];

export default function HomePage() {
    return (
        <>

            <main className={styles.page}>

                <Hero />


                <section
                    className={
                        styles.introduction
                    }
                >
                    <div
                        className={
                            styles.introductionMain
                        }
                    >
                        <h1>
                            Architektura
                            <br />
                            jest sztuką
                            <br />
                            kontekstu.
                        </h1>
                    </div>

                    <div
                        className={
                            styles.introductionCopy
                        }
                    >
                        <p>
                            {formatPolishText(
                                "Od 1999 roku projektujemy przestrzenie do życia, pracy i odpoczynku.",
                            )}
                        </p>

                        <p>
                            {formatPolishText(
                                "Szukamy relacji pomiędzy człowiekiem, miejscem, materiałem i czasem.",
                            )}
                        </p>
                    </div>
                </section>


                <section
                    className={styles.projects}
                >
                    <div
                        className={
                            styles.projectsHeader
                        }
                    >
                        <span>
                            Wybrane projekty
                        </span>

                        <Link href="/projekty">
                            <span>
                                Wszystkie projekty
                            </span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </Link>
                    </div>

                    <div
                        className={
                            styles.projectList
                        }
                    >
                        {projects.map(
                            (project) => (
                                <Link
                                    key={
                                        project.slug
                                    }
                                    href={`/projekty/${project.slug}`}
                                    className={
                                        styles.project
                                    }
                                >
                                    <div
                                        className={
                                            styles.projectImage
                                        }
                                    >
                                        <img
                                            src={
                                                project.image
                                            }
                                            alt={
                                                project.name
                                            }
                                            loading="lazy"
                                        />
                                    </div>

                                    <div
                                        className={
                                            styles.projectInfo
                                        }
                                    >
                                        <strong>
                                            {
                                                project.name
                                            }
                                        </strong>

                                        <span>
                                            {
                                                project.location
                                            }
                                        </span>
                                    </div>
                                </Link>
                            ),
                        )}
                    </div>
                </section>


                <section
                    className={styles.statement}
                >
                    <div
                        className={
                            styles.statementLead
                        }
                    >
                        <p>
                            Projektujemy
                            <br />
                            dla ludzi.
                        </p>
                    </div>

                    <div
                        className={
                            styles.statementCopy
                        }
                    >
                        <p>
                            {formatPolishText(
                                "Tworzymy środowisko do życia – wypoczynku, pracy czy rekreacji – w pełnej symbiozie z otoczeniem.",
                            )}
                        </p>

                        <p>
                            {formatPolishText(
                                "Zależy nam na architekturze, która nie kończy się na wizualizacji, ale przez lata pozostaje dobrym miejscem do życia.",
                            )}
                        </p>

                        <Link
                            href="/studio"
                            className={
                                styles.statementLink
                            }
                        >
                            <span>
                                Poznaj 77STUDIO
                            </span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </section>


                <section
                    className={styles.contact}
                >
                    <div
                        className={
                            styles.contactMain
                        }
                    >
                        <p>
                            Porozmawiajmy
                            <br />
                            o projekcie.
                        </p>
                    </div>

                    <div
                        className={
                            styles.contactSide
                        }
                    >
                        <p>
                            77STUDIO architektury
                            <br />
                            Warszawa
                        </p>

                        <Link href="/kontakt">
                            <span>
                                Kontakt
                            </span>

                            <ArrowUpRight
                                size={14}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </Link>
                    </div>
                </section>

            </main>
        </>
    );
}