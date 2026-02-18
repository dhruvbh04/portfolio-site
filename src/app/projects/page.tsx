import { getAllProjects } from "@/lib/mdx";
import { ProjectCard } from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects — Dhruv Bhardwaj",
    description:
        "Selected projects in robotics, spiking neural networks, mathematical modeling, and hardware systems.",
};

export default function ProjectsPage() {
    const projects = getAllProjects();

    return (
        <div className="min-h-screen pt-32 pb-section">
            <div className="max-w-6xl mx-auto px-6">
                <p className="font-mono text-sm text-[var(--muted)] mb-4 tracking-widest uppercase">
                    All Projects
                </p>
                <h1 className="font-heading text-section-title font-bold tracking-tight mb-16 leading-[1.1]">
                    Selected Work
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            slug={project.slug}
                        />
                    ))}
                </div>

                {projects.length === 0 && (
                    <p className="text-[var(--muted)] text-center py-20">
                        No projects found. Add MDX files to the{" "}
                        <code className="font-mono text-sm">/content</code> directory.
                    </p>
                )}
            </div>
        </div>
    );
}
