"use client";

import Tag from "@/components/Tag";
import {
    Code2,
    Server,
    Zap,
    Brain,
    Database,
    Cloud,
    Globe,
    Smartphone,
    Shield,
    GitBranch
} from "lucide-react";

const skills = [
    {
        category: "Frontend Development",
        icon: Code2,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        skills: ["React.js", "Next.js 14", "TypeScript", "Docker", "Kubernetes", "Tailwind CSS", "Framer Motion", "shadcn/ui"]
    },
    {
        category: "Backend Development",
        icon: Server,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "REST APIs", "GraphQL"]
    },
    {
        category: "Real-time & Communication",
        icon: Zap,
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        skills: ["Socket.io", "WebRTC", "WebSockets", "Real-time Chat", "Video/Audio Calls", "Screen Sharing"]
    },
    // AI & Machine Learning card removed per request
    {
        category: "Database & Cloud",
        icon: Database,
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        skills: ["PostgreSQL", "MongoDB", "Firebase", "Supabase", "Oracle Cloud"]
    },
    {
        category: "DevOps & Tools",
        icon: Cloud,
        color: "text-orange-400",
        bgColor: "bg-orange-400/10",
        skills: ["Git", "GitHub", "Docker", "CI/CD", "JWT", "OAuth", "Nodemailer"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Skills & Expertise</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-4xl mx-auto text-neutral-900 dark:text-white">
                    Technical{" "}
                    <span className="text-blue-400">Skills</span>{" "}
                    & Technologies
                </h2>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillGroup, index) => (
                        <div
                            key={skillGroup.category}
                            className="bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 shadow-lg"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`p-3 rounded-xl ${skillGroup.bgColor}`}>
                                    <skillGroup.icon className={`w-6 h-6 ${skillGroup.color}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                                    {skillGroup.category}
                                </h3>
                            </div>
                            <div className="space-y-3">
                                {skillGroup.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className="flex items-center gap-3 text-neutral-700 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white transition-colors"
                                    >
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span className="text-sm">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Highlights */}
                <div className="mt-20">
                    <h3 className="text-3xl font-semibold text-center mb-12 text-neutral-900 dark:text-white">
                        Additional Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-400/20 shadow-lg">
                                <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">Web Development</h4>
                                <p className="text-neutral-600 dark:text-white/60">
                                    Full-stack web applications with modern frameworks, responsive design, and optimal performance.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-400/20 shadow-lg">
                                <Server className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">Backend Systems</h4>
                                <p className="text-neutral-600 dark:text-white/60">
                                    Scalable backend architectures, database design, API development, and server-side optimization.
                                </p>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-400/20 shadow-lg">
                                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                                <h4 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">Real-time Apps</h4>
                                <p className="text-neutral-600 dark:text-white/60">
                                    Interactive real-time applications with WebRTC, WebSockets, and instant communication features.
                                </p>
                            </div>
                        </div>
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
