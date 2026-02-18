"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    slug: string;
}

export function ProjectCard({ title, description, tags, slug }: ProjectCardProps) {
    return (
        <Link href={`/projects/${slug}`}>
            <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group relative p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)] 
                   hover:shadow-lg hover:shadow-black/5 transition-shadow duration-300 h-full
                   flex flex-col justify-between"
            >
                <div>
                    <div className="flex items-start justify-between mb-3">
                        <h3 className="font-heading font-semibold text-lg leading-tight">
                            {title}
                        </h3>
                        <ArrowUpRight
                            size={18}
                            className="text-[var(--muted)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1 ml-2"
                        />
                    </div>
                    <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
                        {description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--background)] 
                         border border-[var(--border)] text-[var(--muted)]"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.article>
        </Link>
    );
}
