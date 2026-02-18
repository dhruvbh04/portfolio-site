import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const links = [
    { href: "mailto:f20221271@goa.bits-pilani.ac.in", label: "Email" },
    { href: "https://github.com/dhruvbh04", label: "GitHub" },
    { href: "https://www.linkedin.com/in/dhruv-bhardwaj-7b288b244/", label: "LinkedIn" },
];

export function Footer() {
    return (
        <footer id="contact" className="section-padding border-t border-[var(--border)]">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="font-heading text-hero font-bold tracking-tight leading-[1.1] mb-12">
                    Let&apos;s build
                    <br />
                    intelligent systems.
                </h2>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="flex flex-wrap gap-6">
                        {links.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-1 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
                            >
                                {link.label}
                                <ArrowUpRight
                                    size={14}
                                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                                />
                            </Link>
                        ))}
                    </div>

                    <p className="text-xs text-[var(--muted)]">
                        © {new Date().getFullYear()} Dhruv Bhardwaj
                    </p>
                </div>
            </div>
        </footer>
    );
}
