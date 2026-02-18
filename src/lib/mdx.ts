import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export interface ProjectMeta {
    title: string;
    description: string;
    tags: string[];
    slug: string;
    date?: string;
}

export function getAllProjects(): ProjectMeta[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory).filter((f) => f.endsWith(".mdx"));

    const projects = files.map((filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(contentDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContents);

        return {
            title: data.title || slug,
            description: data.description || "",
            tags: data.tags || [],
            slug,
            date: data.date || undefined,
        };
    });

    return projects;
}

export function getProjectBySlug(slug: string) {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContents);

    return {
        meta: {
            title: data.title || slug,
            description: data.description || "",
            tags: data.tags || [],
            slug,
            date: data.date || undefined,
        } as ProjectMeta,
        content,
    };
}

export function getAllProjectSlugs(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    return fs
        .readdirSync(contentDirectory)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => f.replace(/\.mdx$/, ""));
}
