"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clsx } from "clsx";

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    dark?: boolean;
}

export function Section({ children, className, id, dark = false }: SectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id={id}
            className={clsx(
                "section-padding transition-colors duration-500",
                dark
                    ? "bg-[#0f0f0f] text-[#fafafa]"
                    : "bg-[var(--background)] text-[var(--foreground)]",
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="max-w-6xl mx-auto px-6"
            >
                {children}
            </motion.div>
        </section>
    );
}
