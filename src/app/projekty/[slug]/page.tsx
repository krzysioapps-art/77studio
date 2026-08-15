import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import { projects } from "@/data/projects";
import { formatPolishText } from "@/lib/polish-text";

import { ProjectViewer } from "./project-viewer";

import styles from "./projekt.module.css";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({
    params,
}: ProjectPageProps) {
    const { slug } = await params;

    const projectIndex = projects.findIndex(
        (project) => project.slug === slug,
    );

    if (projectIndex === -1) {
        notFound();
    }

    const project = projects[projectIndex];

    const previousProject =
        projects[
        (projectIndex - 1 + projects.length) %
        projects.length
        ];

    const nextProject =
        projects[
        (projectIndex + 1) % projects.length
        ];

    return (
        <>
           

            <main className={styles.page}>

                <div className={styles.content}>

                    {/* ================================
                        BREADCRUMBS
                    ================================= */}

                    <nav
                        className={styles.breadcrumbs}
                        aria-label="Ścieżka nawigacji"
                    >
                        <Link href="/projekty">
                            Projekty
                        </Link>

                        <ChevronRight
                            size={12}
                            strokeWidth={1.6}
                            aria-hidden="true"
                        />

                        <span>
                            {project.title}
                        </span>
                    </nav>


                    {/* ================================
                        PROJECT OVERVIEW
                    ================================= */}

                    <section
                        className={
                            styles.projectOverview
                        }
                    >

                        {/* ============================
                            COVER
                        ============================= */}

                        <div className={styles.cover}>
                            <button
                                type="button"
                                className={
                                    styles.coverButton
                                }
                                aria-label={`Otwórz zdjęcie projektu ${project.title}`}
                            >
                                <img
                                    src={
                                        project.images[0]
                                    }
                                    alt={
                                        project.title
                                    }
                                />
                            </button>
                        </div>


                        {/* ============================
                            INFORMATION
                        ============================= */}

                        <div
                            className={
                                styles.projectInformation
                            }
                        >

                            <div
                                className={
                                    styles.projectHeading
                                }
                            >
                                <h1>
                                    {project.title}
                                </h1>

                                <p>
                                    {project.location}
                                </p>
                            </div>


                            <div
                                className={
                                    styles.details
                                }
                            >
                                <div>
                                    <span>
                                        Projekt
                                    </span>

                                    <strong>
                                        {
                                            project.projectYear
                                        }
                                    </strong>
                                </div>

                                <div>
                                    <span>
                                        Realizacja
                                    </span>

                                    <strong>
                                        {
                                            project.realizationYear
                                        }
                                    </strong>
                                </div>

                                {project.area && (
                                    <div>
                                        <span>
                                            Powierzchnia
                                        </span>

                                        <strong>
                                            {
                                                project.area
                                            }
                                        </strong>
                                    </div>
                                )}

                                {project.investor && (
                                    <div>
                                        <span>
                                            Inwestor
                                        </span>

                                        <strong>
                                            {
                                                project.investor
                                            }
                                        </strong>
                                    </div>
                                )}
                            </div>

                        </div>

                    </section>


                    <section className={styles.description}>
                        <span>
                            O projekcie
                        </span>

                        <p>
                            {formatPolishText(
                                project.description,
                            )}
                        </p>
                    </section>


                    {/* ================================
                        GALLERY
                    ================================= */}

                    <section
                        className={
                            styles.gallerySection
                        }
                    >
                        <ProjectViewer
                            images={
                                project.images
                            }
                            title={
                                project.title
                            }
                        />
                    </section>


                    {/* ================================
                        PROJECT NAVIGATION
                    ================================= */}

                    <nav
                        className={
                            styles.projectNavigation
                        }
                        aria-label="Nawigacja między projektami"
                    >
                        <Link
                            href={`/projekty/${previousProject.slug}`}
                            className={
                                styles.previous
                            }
                        >
                            <span>
                                Poprzedni projekt
                            </span>

                            <strong>
                                {
                                    previousProject.title
                                }
                            </strong>
                        </Link>

                        <Link
                            href="/projekty"
                            className={
                                styles.allProjects
                            }
                        >
                            Wszystkie projekty
                        </Link>

                        <Link
                            href={`/projekty/${nextProject.slug}`}
                            className={styles.next}
                        >
                            <span>
                                Następny projekt
                            </span>

                            <strong>
                                {
                                    nextProject.title
                                }
                            </strong>
                        </Link>
                    </nav>

                </div>

            </main>
        </>
    );
}