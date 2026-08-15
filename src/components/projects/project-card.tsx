import Link from "next/link";

import type { Project } from "@/data/projects";

import styles from "./project-card.module.css";

type ProjectCardProps = {
    project: Project;
};

export function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <Link
            href={`/projekty/${project.slug}`}
            className={styles.card}
        >
            <div className={styles.imageWrap}>
                <img
                    src={project.cover}
                    alt={project.title}
                    loading="lazy"
                />
            </div>

            <div className={styles.info}>
                <h2 className={styles.title}>
                    {project.title}
                </h2>

                <div className={styles.meta}>
                    <span>
                        {project.location}
                    </span>

                    <span>
                        {project.area} ·{" "}
                        {project.projectYear}
                    </span>
                </div>
            </div>
        </Link>
    );
}