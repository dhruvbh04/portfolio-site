"use client";

import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { StickySection } from "@/components/StickySection";

const projects = [
    {
        title: "SNN Gesture Recognition",
        description:
            "Event-driven gesture classification using spiking neural networks on DVS data.",
        tags: ["snntorch", "DVS", "PyTorch", "Neuromorphic"],
        slug: "snn",
    },
    {
        title: "MOSFET Threshold Voltage Prediction",
        description:
            "Device-agnostic ML regression for MOSFET threshold voltage modeling.",
        tags: ["Scikit-learn", "Regression", "Semiconductor"],
        slug: "mosfet",
    },
    {
        title: "Credit Risk via Coupled Markov Chains",
        description:
            "Stochastic credit risk modeling using coupled Markov chain dynamics.",
        tags: ["Markov Chains", "Stochastic", "Python"],
        slug: "credit-risk",
    },
    {
        title: "Hardware Synthesizable Trading Algorithms",
        description:
            "FPGA-targeted trading logic with hardware-level latency optimization.",
        tags: ["FPGA", "Verilog", "Trading", "HFT"],
        slug: "fpga",
    },
];

const deepLearningItems = [
    {
        title: "Spiking Neural Networks",
        description:
            "Building biologically inspired neural architectures using temporal spike encoding and surrogate gradient training with snntorch.",
    },
    {
        title: "Event-Driven Vision",
        description:
            "Processing asynchronous event streams from Dynamic Vision Sensors for low-latency, energy-efficient perception.",
    },
    {
        title: "Neuromorphic Computing",
        description:
            "Exploring computation paradigms that mirror biological neural dynamics — sparse, event-driven, and temporally precise.",
    },
    {
        title: "Model Optimization",
        description:
            "Quantization, pruning, and architecture search for deploying deep learning models on resource-constrained hardware.",
    },
];

const snnItems = [
    {
        title: "Event-Based DVS Learning",
        description:
            "Processing asynchronous event streams from Dynamic Vision Sensors for temporal pattern recognition.",
    },
    {
        title: "snntorch Implementation",
        description:
            "Building spiking neural architectures with surrogate gradient descent for efficient training.",
    },
    {
        title: "Temporal Spike Encoding",
        description:
            "Converting continuous signals into precise spike timing patterns that preserve temporal information.",
    },
    {
        title: "Energy-Efficient Computation",
        description:
            "Leveraging sparse, event-driven computation for orders-of-magnitude reduction in energy consumption.",
    },
];

const mathItems = [
    {
        title: "Coupled Markov Chains",
        description:
            "Modeling correlated credit default dynamics through coupled stochastic processes.",
    },
    {
        title: "MOSFET Voltage Regression",
        description:
            "Device-agnostic machine learning models for semiconductor threshold voltage prediction.",
    },
    {
        title: "Device-Agnostic ML",
        description:
            "Generalizable modeling approaches that transfer across different device architectures.",
    },
    {
        title: "FPGA Trading Logic",
        description:
            "Hardware-synthesizable algorithms optimized for nanosecond-level execution latency.",
    },
];

export default function Home() {
    return (
        <>
            <Hero />

            {/* Deep Learning Section */}
            <StickySection
                id="deep-learning"
                label="01 — Deep Learning"
                heading="I build systems that learn."
                items={deepLearningItems}
                dark
            />

            {/* Intelligence Section */}
            <Section id="intelligence">
                <p className="font-mono text-sm text-[var(--muted)] mb-4 tracking-widest uppercase">
                    02 — Neuromorphic Intelligence
                </p>
                <h2 className="font-heading text-section-title font-bold tracking-tight mb-6 leading-[1.1]">
                    I explore intelligence
                    <br />
                    beyond static frames.
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mb-16 text-lg">
                    Spiking neural networks process information the way biology does — through
                    precise timing, sparse activity, and event-driven computation.
                </p>

                <div className="space-y-12">
                    {snnItems.map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 border-t border-[var(--border)] pt-8"
                        >
                            <h3 className="font-heading font-semibold text-base">{item.title}</h3>
                            <p className="text-[var(--muted)] text-sm leading-relaxed max-w-xl">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Mathematical Systems Section */}
            <Section id="math">
                <p className="font-mono text-sm text-[var(--muted)] mb-4 tracking-widest uppercase">
                    03 — Mathematical Systems
                </p>
                <h2 className="font-heading text-section-title font-bold tracking-tight mb-6 leading-[1.1]">
                    I think in systems.
                </h2>
                <p className="text-[var(--muted)] max-w-2xl mb-16 text-lg">
                    From stochastic processes to semiconductor physics — mathematical modeling
                    as a unified language for complex systems.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mathItems.map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-xl border border-[var(--border)] bg-[var(--surface)]"
                        >
                            <h3 className="font-heading font-semibold text-base mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[var(--muted)] text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Selected Work */}
            <Section id="work">
                <p className="font-mono text-sm text-[var(--muted)] mb-4 tracking-widest uppercase">
                    04 — Selected Work
                </p>
                <h2 className="font-heading text-section-title font-bold tracking-tight mb-16 leading-[1.1]">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} {...project} />
                    ))}
                </div>
            </Section>

            {/* About Section */}
            <Section id="about">
                <p className="font-mono text-sm text-[var(--muted)] mb-4 tracking-widest uppercase">
                    05 — About
                </p>
                <h2 className="font-heading text-section-title font-bold tracking-tight mb-8 leading-[1.1]">
                    Background
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 md:gap-16">
                    <div className="space-y-6 text-[var(--muted)] leading-relaxed">
                        <p>
                            I am pursuing a dual degree in Electrical Engineering and Mathematics,
                            driven by the conviction that the most impactful systems emerge at the
                            intersection of hardware, algorithms, and mathematical rigor.
                        </p>
                        <p>
                            My research interests span deep learning, neuromorphic computing
                            architectures, and mathematically grounded machine learning.
                            I am particularly drawn to problems where biological principles inform
                            computational design.
                        </p>
                    </div>

                    <div className="space-y-6 text-[var(--muted)] leading-relaxed">
                        <p>
                            I approach each project as a systems problem — understanding not just
                            individual components, but the dynamics that emerge when they interact.
                            This perspective drives my work across spiking neural networks,
                            stochastic modeling, and hardware-accelerated computation.
                        </p>
                        <p>
                            I believe that intelligence, whether artificial or biological, is
                            fundamentally a systems-level phenomenon requiring interdisciplinary
                            thinking to understand and engineer.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { label: "Focus", value: "Machine Learning" },
                        { label: "Methods", value: "Neuromorphic Computing" },
                        { label: "Foundation", value: "Mathematical Modeling" },
                        { label: "Tools", value: "PyTorch · snntorch · FPGA" },
                    ].map((item) => (
                        <div key={item.label}>
                            <p className="font-mono text-xs text-[var(--muted)] mb-2 uppercase tracking-wider">
                                {item.label}
                            </p>
                            <p className="font-heading font-semibold text-sm">{item.value}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </>
    );
}
