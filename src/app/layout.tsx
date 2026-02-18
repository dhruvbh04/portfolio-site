import type { Metadata } from "next";
import { Inter, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-ibm-plex-mono",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Dhruv Bhardwaj — All About Machine Learning",
    description:
        "Portfolio of Dhruv Bhardwaj. Machine Learning, Deep Learning, Mathematical Modeling.",
    keywords: [
        "Dhruv Bhardwaj",
        "BITS Pilani",
        "BITS Goa",
        "Machine Learning",
        "Deep Learning",
        "Spiking Neural Networks",
        "Mathematical Modeling",
        "Neuromorphic Computing",
        "Portfolio",
    ],
    authors: [{ name: "Dhruv Bhardwaj" }],
    openGraph: {
        title: "Dhruv Bhardwaj — All About Machine Learning",
        description:
            "Machine Learning, Deep Learning, Mathematical Modeling.",
        type: "website",
        locale: "en_US",
        siteName: "Dhruv Bhardwaj",
    },
    twitter: {
        card: "summary_large_image",
        title: "Dhruv Bhardwaj — All About Machine Learning",
        description:
            "Machine Learning, Deep Learning, Mathematical Modeling.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
        >
            <body className={`${inter.className} antialiased`}>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
