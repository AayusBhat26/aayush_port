"use client";

import Tag from "@/components/Tag";
import {
    Github,
    Users,
    Zap,
    Award,
    TrendingUp,
    Code,
    Database,
    Globe,
    Smartphone,
    Cloud
} from "lucide-react";

const achievements = [
    {
        title: "Open Source Contributions",
        description: "Contributed to ML4E platform, building landing pages and managing multi-device compatibility",
        icon: Github,
        link: "https://ml4e.com/",
        stats: "Active contributor"
    },
    {
        title: "Full-Stack Projects",
        description: "Built 7+ comprehensive applications with modern tech stacks and real-world impact",
        icon: Code,
        link: "#projects",
        stats: "7+ Projects"
    },
    {
        title: "Real-time Systems",
        description: "Developed multiple real-time communication platforms with WebRTC and WebSockets",
        icon: Zap,
        link: "#projects",
        stats: "100% Real-time"
    },
    {
        title: "Oracle Cloud Infrastructure",
        description: "Oracle Cloud Infrastructure Associate certified — experience deploying cloud-native applications on OCI.",
        icon: Award,
        link: "#",
        stats: "OCI Associate"
    }
];

const technologies = [
    { name: "Next.js 14", category: "Framework" },
    { name: "React.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "Node.js", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "Prisma ORM", category: "Database" },
    { name: "Socket.io", category: "Real-time" },
    { name: "WebRTC", category: "Real-time" },
    { name: "Google Gemini AI", category: "AI" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Framer Motion", category: "Animation" },
    { name: "shadcn/ui", category: "UI" },
    { name: "Firebase", category: "Cloud" },
    { name: "Vercel", category: "Deployment" }
];

export default function Integrations() {
    return (
        <section className="py-24 bg-gradient-to-b from-transparent via-neutral-50/50 dark:via-neutral-900/20 to-transparent">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Achievements & Technologies</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-4xl mx-auto text-neutral-900 dark:text-white">
                    Achievements &{" "}
                    <span className="text-blue-400">Technology Stack</span>
                </h2>
                <p className="text-center text-xl text-neutral-600 dark:text-white/60 mt-6 max-w-3xl mx-auto">
                    My journey in tech has been marked by continuous learning and building
                    innovative solutions that make a real impact.
                </p>

                {/* Achievements */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-center mb-12 text-neutral-900 dark:text-white">
                        Key Achievements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {achievements.map((achievement, index) => (
                            <div
                                key={achievement.title}
                                className="bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 shadow-lg"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-400/20 rounded-xl">
                                        <achievement.icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                            {achievement.title}
                                        </h4>
                                        <p className="text-sm text-blue-400 font-medium">
                                            {achievement.stats}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-neutral-600 dark:text-white/70 text-sm leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technology Stack */}
                <div className="mt-20">
                    <h3 className="text-3xl font-semibold text-center mb-12 text-neutral-900 dark:text-white">
                        Technology Stack
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {technologies.map((tech, index) => (
                            <div
                                key={tech.name}
                                className="bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-xl p-4 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 shadow-sm"
                                style={{
                                    animationDelay: `${index * 0.05}s`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                <div className="text-center">
                                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">
                                        {tech.name}
                                    </h4>
                                    <p className="text-xs text-neutral-500 dark:text-white/50">
                                        {tech.category}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </section>
    );
}
