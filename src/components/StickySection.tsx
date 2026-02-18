"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { clsx } from "clsx";

interface StickySectionProps {
    id?: string;
    label: string;
    heading: string;
    items: { title: string; description: string }[];
    dark?: boolean;
}

export function StickySection({
    id,
    label,
    heading,
    items,
    dark = false,
}: StickySectionProps) {
    const ref = useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            id={id}
            className={clsx(
                "section-padding transition-colors duration-500",
                dark ? "bg-[#0f0f0f] text-[#fafafa]" : "bg-[var(--background)] text-[var(--foreground)]"
            )}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16">
                    {/* Sticky left column */}
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                            <p
                                className={clsx(
                                    "font-mono text-sm mb-4 tracking-widest uppercase",
                                    dark ? "text-neutral-500" : "text-[var(--muted)]"
                                )}
                            >
                                {label}
                            </p>
                            <h2 className="font-heading text-section-title font-bold tracking-tight leading-[1.1]">
                                {heading}
                            </h2>
                        </motion.div>
                    </div>

                    {/* Right column — items */}
                    <div className="space-y-0">
                        {items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{
                                    duration: 0.6,
                                    delay: i * 0.15,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                }}
                                className={clsx(
                                    "py-8 border-b",
                                    dark ? "border-neutral-800" : "border-[var(--border)]"
                                )}
                            >
                                <h3 className="font-heading font-semibold text-base mb-2">
                                    {item.title}
                                </h3>
                                <p
                                    className={clsx(
                                        "text-sm leading-relaxed max-w-lg",
                                        dark ? "text-neutral-400" : "text-[var(--muted)]"
                                    )}
                                >
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
