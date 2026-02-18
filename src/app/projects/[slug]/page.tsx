import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/mdx";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

interface PageProps {
    params: { slug: string };
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const project = getProjectBySlug(params.slug);
    if (!project) return { title: "Not Found" };

    return {
        title: `${project.meta.title} — Dhruv Bhardwaj`,
        description: project.meta.description,
        openGraph: {
            title: `${project.meta.title} — Dhruv Bhardwaj`,
            description: project.meta.description,
            type: "article",
        },
    };
}

export default function ProjectPage({ params }: PageProps) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-32 pb-section">
            <article className="max-w-3xl mx-auto px-6">
                {/* Back link */}
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12"
                >
                    <ArrowLeft size={16} />
                    All Projects
                </Link>

                {/* Header */}
                <header className="mb-16">
                    <h1 className="font-heading text-section-title font-bold tracking-tight leading-[1.1] mb-4">
                        {project.meta.title}
                    </h1>
                    <p className="text-lg text-[var(--muted)]">
                        {project.meta.description}
                    </p>

                    {project.meta.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-6">
                            {project.meta.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </header>

                {/* MDX Content */}
                <div className="prose">
                    <MDXRemote source={project.content} />
                </div>
            </article>
        </div>
    );
}
