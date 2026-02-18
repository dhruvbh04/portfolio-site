"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-mono text-sm text-[var(--muted)] mb-6 tracking-widest uppercase"
                >
                    Dhruv Bhardwaj
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="font-heading text-hero font-bold tracking-tight leading-[1.05] mb-8"
                >
                    All About
                    <br />
                    Machine Learning.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="text-[var(--muted)] text-lg md:text-xl font-light tracking-wide"
                >
                    Machine Learning{" "}
                    <span className="text-[var(--foreground)] opacity-30">×</span>{" "}
                    Deep Learning{" "}
                    <span className="text-[var(--foreground)] opacity-30">×</span>{" "}
                    Mathematical Modeling
                </motion.p>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} className="text-[var(--muted)]" />
                </motion.div>
            </motion.div>
        </section>
    );
}
