import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                accent: "#3b82f6",
                surface: "var(--surface)",
            },
            fontFamily: {
                heading: ["var(--font-space-grotesk)", "sans-serif"],
                body: ["var(--font-inter)", "sans-serif"],
                mono: ["var(--font-ibm-plex-mono)", "monospace"],
            },
            fontSize: {
                hero: "clamp(3rem, 8vw, 6rem)",
                "section-title": "clamp(2rem, 5vw, 3.5rem)",
            },
            spacing: {
                section: "120px",
            },
        },
    },
    plugins: [],
};

export default config;
