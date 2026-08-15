import { ProjectCard } from "@/components/projects/project-card";

import { projects } from "@/data/projects";

import styles from "./projekty.module.css";

export default function ProjectsPage() {
    return (
        <>

            <main className={styles.page}>
                <section className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                        />
                    ))}
                </section>
            </main>
        </>
    );
}