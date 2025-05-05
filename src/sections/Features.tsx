"use client";

import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import { Ellipsis } from "lucide-react";
import Key from "@/components/Key";
import { motion } from "framer-motion";


const parentVariants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.7,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function Features() {
    return (
        <section id="projects" className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Projects</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl m-auto">
                    Where Creativity meets{" "}
                    <span className="text-blue-400">Skills</span>
                </h2>
                <motion.div
                    variants={parentVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                        {/* Project 1 */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Kanban Board Application"
                                description="A full-featured Kanban app with note-taking, drag-and-drop, and user authentication."
                                className="md:col-span-2 lg:col-span-1 h-96 flex flex-col"
                            >
                                <div className="flex flex-col items-center justify-center gap-2 h-full">
                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                                        {["React.js", "Node.js", "MongoDB", "JWT", "Drag & Drop"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-400 text-neutral-900 px-2 py-1 rounded-xl text-xs font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <ul className="text-white/70 text-sm mt-2 list-disc pl-5 text-left">
                                        <li>Dynamic boards & sections</li>
                                        <li>Note-taking & favorites</li>
                                        <li>Secure authentication</li>
                                    </ul>
                                </div>
                                <div className="mt-2">
                                    <a
                                        href="https://github.com/AayusBhat26/kanban"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline text-sm"
                                    >
                                        Github link
                                    </a>
                                </div>
                            </FeatureCard>
                        </motion.div>
                        {/* Project 2 */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Next.js 13 Real-Time Communication"
                                description="Real-time platform for text, voice, video, and screen sharing with responsive UI and OAuth login."
                                className="md:col-span-2 lg:col-span-1 h-96 flex flex-col"
                            >
                                <div className="flex flex-col items-center justify-center gap-2 h-full">
                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                                        {["Next.js 13", "TypeScript", "WebSockets", "shadcn UI", "OAuth"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-400 text-neutral-900 px-2 py-1 rounded-xl text-xs font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <ul className="text-white/70 text-sm mt-2 list-disc pl-5 text-left">
                                        <li>Hubs for text, voice, video</li>
                                        <li>Multi-user screen sharing</li>
                                        <li>Mobile & theme support</li>
                                    </ul>
                                </div>
                                <div className="mt-2">
                                    <a
                                        href="https://project-connecting-nny4.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline text-sm"
                                    >
                                        Live link
                                    </a>
                                </div>
                            </FeatureCard>
                        </motion.div>
                        {/* Project 3 */}
                        <motion.div
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <FeatureCard
                                title="Workify – AI Productivity"
                                description="Productivity platform with AI-powered sentiment analysis and optimized performance."
                                className="md:col-span-2 lg:col-span-1 h-96 flex flex-col"
                            >
                                <div className="flex flex-col items-center justify-center gap-2 h-full">
                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-2 justify-center mb-2">
                                        {["TypeScript", "Next.js", "PostgreSQL", "GraphQL", "NLP"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-400 text-neutral-900 px-2 py-1 rounded-xl text-xs font-semibold"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <ul className="text-white/70 text-sm mt-2 list-disc pl-5 text-left">
                                        <li>Modern UI with Next.js</li>
                                        <li>AI sentiment analysis</li>
                                        <li>Optimized PostgreSQL queries</li>
                                    </ul>
                                </div>
                                <div className="mt-2">
                                    <a
                                        href="https://github.com/AayusBhat26/workify"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 hover:underline text-sm"
                                    >
                                        Github link
                                    </a>
                                </div>
                            </FeatureCard>
                        </motion.div>
                    </div>
                </motion.div>
                {/* <div className="my-8 flex items-center justify-center flex-wrap gap-2 max-w-3xl m-auto">
                    {features.map((feature) => (
                        <div
                            className="bg-neutral-900 border border-white/10 inline-flex px-2 md:px-3 md:py-1 py-1 rounded-xl gap-2 items-center hover:scale-105 transition duration-500 group"
                            key={feature}
                        >
                            <span className="bg-blue-400 text-neutral-900 size-4 rounded-full inline-flex items-center justify-center text-base group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium text-sm md:text-base">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div> */}
            </div>
        </section>
    );
}
