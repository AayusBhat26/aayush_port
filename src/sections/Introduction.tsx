"use client";

import Tag from "@/components/Tag";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
    Code2, 
    Database, 
    Server, 
    Globe, 
    Smartphone, 
    Zap,
    Brain,
    Shield,
    GitBranch,
    Cloud,
    Award,
    Users,
    TrendingUp,
    Rocket,
    Code,
    X,
    ExternalLink
} from "lucide-react";

const achievements = [
    {
        icon: Award,
        number: "7+",
        label: "Full-Stack Projects",
        description: "Comprehensive applications with modern tech stacks"
    },
    {
        icon: TrendingUp,
        number: "100%",
        label: "Real-time Systems",
        description: "All communication apps feature real-time capabilities"
    },
    {
        icon: Rocket,
        number: "5+",
        label: "AI Integrations",
        description: "Projects leveraging AI for enhanced functionality"
    },
    {
        icon: Code,
        number: "450+",
        label: "LeetCode Problems",
        description: "Solved with 1630+ rating"
    },
    {
        icon: Database,
        number: "250+",
        label: "GFG Problems",
        description: "Coding score 1340+"
    },
    {
        icon: Shield,
        number: "Gold",
        label: "HackerRank Medal",
        description: "C & C++ programming"
    }
];

const experience = [
    {
        year: "2024",
        title: "Full-Stack Developer",
        company: "Freelance & Personal Projects",
        description: "Building comprehensive web applications with modern technologies including Next.js, Node.js, PostgreSQL, and AI integrations."
    },
    {
        year: "2023",
        title: "Open Source Contributor",
        company: "ML4E Platform",
        description: "Contributed to machine learning platform, built landing pages and managed multi-device compatibility."
    },
    {
        year: "2023",
        title: "Real-time Communication Specialist",
        company: "Project Connecting",
        description: "Developed Discord-like platform with WebRTC, WebSockets, and comprehensive real-time features."
    }
];

const mainCategories = [
    {
        title: "Development",
        icon: Code2,
        color: "blue",
        description: "Full-stack web development with modern technologies",
        stats: "7+ Projects • 100% Real-time • 5+ AI Integrations",
        gradient: "dark:bg-black",
        borderColor: "border-blue-400/20",
        iconColor: "text-blue-400"
    },
    {
        title: "DSA & CP",
        icon: Brain,
        color: "black",
        description: "Competitive programming and problem solving",
        stats: "450+ LeetCode • 250+ GFG • Gold HackerRank",
        gradient: "dark:bg-black",
        borderColor: "border-green-400/20",
        iconColor: "text-green-400"
    }
];

export default function Introduction() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
        <>
            <section id="about" className="py-24 relative overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/50 dark:via-neutral-900/20 to-transparent" />
                
                <motion.div 
                    ref={containerRef}
                    className="container relative z-10"
                    style={{ y, opacity }}
                >
                    <motion.div 
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Tag>About Me</Tag>
                    </motion.div>

                    <motion.h2 
                        className="text-6xl font-medium text-center mt-6 max-w-4xl mx-auto text-neutral-900 dark:text-white"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Passionate{" "}
                        <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Full-Stack Developer
                        </span>{" "}
                        Building the Future
                    </motion.h2>
                    
                    {/* Main Content */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Story */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-3xl font-semibold mb-6 text-neutral-900 dark:text-white">
                                My Journey in Tech
                            </h3>
                            <div className="space-y-4 text-neutral-700 dark:text-white/80 text-lg leading-relaxed">
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    I'm a passionate full-stack developer from India, specializing in building 
                                    scalable web applications that solve real-world problems. My journey began 
                                    with a curiosity for creating things that make a difference.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    I've developed expertise in modern web technologies, with a particular focus 
                                    on real-time communication systems, AI integration, and database design. 
                                    From productivity platforms to collaborative tools, I love building applications 
                                    that enhance user experiences.
                                </motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    My projects range from AI-powered legal assistance platforms to Discord-like 
                                    communication tools, each demonstrating my ability to work across the full 
                                    technology stack and deliver comprehensive solutions.
                                </motion.p>
                            </div>
                        </motion.div>

                        {/* Right Side - Two Main Categories */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="space-y-6"
                        >
                            {mainCategories.map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, y: 30, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    whileHover={{ 
                                        scale: 1.02, 
                                        rotateY: 2,
                                        boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)"
                                    }}
                                    className={`bg-white/80 dark:bg-gradient-to-br ${category.gradient} border border-neutral-200 dark:${category.borderColor} rounded-2xl p-8 hover:border-blue-400/30 dark:hover:border-blue-400/30 transition-all duration-300 backdrop-blur-sm shadow-lg`}
                                >
                                    <motion.div 
                                        className="flex items-center gap-4 mb-4"
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl`}>
                                            <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-2xl font-bold text-neutral-900 dark:text-white">
                                                {category.title}
                                            </h4>
                                            <p className="text-neutral-600 dark:text-white/70 text-sm">
                                                {category.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                    <div className="text-sm text-neutral-500 dark:text-white/60 mb-4">
                                        {category.stats}
                                    </div>
                                </motion.div>
                            ))}

                            {/* View Details Button */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                                className="text-center"
                            >
                                <motion.button
                                    onClick={() => setIsModalOpen(true)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/25"
                                >
                                    View Detailed Achievements
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-white/10">
                            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Detailed Achievements & Experience</h3>
                            <motion.button
                                onClick={() => setIsModalOpen(false)}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-2 hover:bg-neutral-100 dark:hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6 text-neutral-900 dark:text-white" />
                            </motion.button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 space-y-8">
                            {/* Achievements Grid */}
                            <div>
                                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Achievements</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {achievements.map((achievement, index) => (
                                        <motion.div
                                            key={achievement.label}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                            className="bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="p-2 bg-blue-400/20 rounded-lg">
                                                    <achievement.icon className="w-5 h-5 text-blue-400" />
                                                </div>
                                            </div>
                                            <div className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">
                                                {achievement.number}
                                            </div>
                                            <div className="text-sm font-semibold text-blue-400 mb-2">
                                                {achievement.label}
                                            </div>
                                            <div className="text-xs text-neutral-600 dark:text-white/60">
                                                {achievement.description}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Experience Timeline */}
                            <div>
                                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">Professional Experience</h4>
                                <div className="space-y-6">
                                    {experience.map((exp, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.2 }}
                                            className="flex gap-4 p-4 bg-neutral-50 dark:bg-neutral-800/30 border border-neutral-200 dark:border-white/10 rounded-xl hover:border-blue-400/30 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-blue-400/30 rounded-full flex items-center justify-center">
                                                    <span className="text-blue-400 font-semibold text-sm">{exp.year}</span>
                                                </div>
                                            </div>
                                            <div className="flex-grow">
                                                <h5 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
                                                    {exp.title}
                                                </h5>
                                                <p className="text-blue-400 font-medium mb-2">
                                                    {exp.company}
                                                </p>
                                                <p className="text-neutral-600 dark:text-white/70 text-sm leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Key Strengths */}
                            <div>
                                <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">What Sets Me Apart</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <motion.div 
                                        className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-400/20"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Globe className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                                        <h5 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Web Development</h5>
                                        <p className="text-neutral-600 dark:text-white/60 text-sm">
                                            Full-stack web applications with modern frameworks, responsive design, and optimal performance.
                                        </p>
                                    </motion.div>

                                    <motion.div 
                                        className="text-center p-4 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl border border-green-400/20"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Server className="w-8 h-8 text-green-400 mx-auto mb-3" />
                                        <h5 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Backend Systems</h5>
                                        <p className="text-neutral-600 dark:text-white/60 text-sm">
                                            Scalable backend architectures, database design, API development, and server-side optimization.
                                        </p>
                                    </motion.div>

                                    <motion.div 
                                        className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/20"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Zap className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                                        <h5 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">Real-time Apps</h5>
                                        <p className="text-neutral-600 dark:text-white/60 text-sm">
                                            Interactive real-time applications with WebRTC, WebSockets, and instant communication features.
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
