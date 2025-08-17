"use client";

import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { 
    ExternalLink, 
    Github, 
    Calendar, 
    Users, 
    Zap, 
    Brain,
    MessageSquare,
    Code,
    Target,
    Clock,
    Award,
    Globe
} from "lucide-react";

const projects = [
    {
        title: "TaskFlow - Productivity Platform",
        description: "A comprehensive productivity and collaboration platform with AI integration, real-time features, and gamified productivity tracking.",
        tech: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Socket.io", "Google Gemini AI"],
        features: [
            "Smart task management with rich text editor",
            "Interactive mind maps with real-time collaboration",
            "Pomodoro timer with gamified points system",
            "DSA practice integration with LeetCode",
            "Real-time chat and workspace sharing"
        ],
        github: "https://github.com/AayusBhat26/TaskFlow-main",
        live: "https://task-flow-main.vercel.app/",
        image: "/taskflow-preview.png",
        featured: true
    },
    {
        title: "Project Connecting - Discord-like Platform",
        description: "A full-stack communication platform with real-time messaging, video/audio calls, and screen sharing capabilities.",
        tech: ["Next.js", "TypeScript", "WebRTC", "Socket.io", "PostgreSQL", "Prisma"],
        features: [
            "Real-time messaging with WebSockets",
            "Video and audio calling with WebRTC",
            "Screen sharing functionality",
            "Hub and subhub organization system",
            "User authentication and permissions"
        ],
        github: "https://github.com/AayusBhat26/Project_Connecting",
        live: "https://project-connecting-nny4.vercel.app/",
        image: "/project-connecting-preview.png",
        featured: true
    },
    {
        title: "Legal Assist - AI Legal Platform",
        description: "An AI-powered legal assistance platform with lawyer matching and comprehensive legal advice using Google Gemini AI.",
        tech: ["Next.js", "Google Gemini AI", "Firebase", "MongoDB", "Tailwind CSS"],
        features: [
            "AI-powered legal advice with Google Gemini",
            "60+ qualified lawyers across 20+ specializations",
            "Smart lawyer matching based on query analysis",
            "Multi-location support across major Indian cities",
            "Responsive design for all devices"
        ],
        github: "https://github.com/AayusBhat26/legal_assist",
        live: "https://anugoonj.in/",
        image: "/legal-assist-preview.png",
        featured: true
    },
    {
        title: "Social Media Trends Analyzer",
        description: "A powerful analytics platform for tracking and visualizing social media trends in real-time across multiple platforms.",
        tech: ["Next.js 15", "TypeScript", "PostgreSQL", "Prisma", "D3.js", "Chart.js"],
        features: [
            "Multi-platform analysis (Twitter, Instagram, Facebook)",
            "Customizable dashboards with drag-and-drop widgets",
            "AI-powered sentiment analysis",
            "Historical trend comparison",
            "Real-time alerts and webhooks"
        ],
        github: "https://github.com/AayusBhat26/social_media_trends",
        live: "#",
        image: "/social-trends-preview.png",
        featured: false
    },
    {
        title: "ML4E - Open Source Contributions",
        description: "Contributed to ML4E platform, building landing pages and managing multi-device compatibility for machine learning education.",
        tech: ["React", "JavaScript", "CSS", "Responsive Design"],
        features: [
            "Built landing pages and hero sections",
            "Managed multi-device compatibility",
            "Open source contributions",
            "Educational content development",
            "Community-driven platform"
        ],
        github: "#",
        live: "https://ml4e.com/",
        image: "/ml4e-preview.png",
        featured: false
    },
    {
        title: "Kanban Board - Task Management",
        description: "A full-stack Kanban-style task management application with notes for each todo and comprehensive CRUD operations.",
        tech: ["React", "Node.js", "Express", "MongoDB", "TypeScript"],
        features: [
            "Visual Kanban board with drag-and-drop",
            "Notes and descriptions for each task",
            "CRUD operations for tasks and notes",
            "Persistent data management",
            "Responsive design"
        ],
        github: "https://github.com/AayusBhat26/kanban",
        live: "#",
        image: "/kanban-preview.png",
        featured: false
    },
    {
        title: "Draw Together - Collaborative Drawing",
        description: "A collaborative drawing application where multiple users can draw together in real-time on a shared canvas.",
        tech: ["TypeScript", "Next.js", "WebRTC", "Canvas API", "Real-time Collaboration"],
        features: [
            "Real-time collaborative drawing",
            "Shared canvas for multiple users",
            "WebRTC for peer-to-peer communication",
            "Modern TypeScript architecture",
            "Responsive design"
        ],
        github: "https://github.com/AayusBhat26/draw_together",
        live: "#",
        image: "/draw-together-preview.png",
        featured: false
    }
];

export default function Features() {
    const featuredProjects = projects.filter(project => project.featured);
    const otherProjects = projects.filter(project => !project.featured);

    return (
        <section id="projects" className="py-24 pt-32">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Projects</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-4xl mx-auto text-neutral-900 dark:text-white">
                    Full-Stack Projects that{" "}
                    <span className="text-blue-400">Solve Real Problems</span>
                </h2>
                <p className="text-center text-xl text-neutral-600 dark:text-white/60 mt-6 max-w-3xl mx-auto">
                    From AI-powered platforms to real-time communication tools, each project demonstrates 
                    my expertise in building comprehensive, scalable applications.
                </p>

                {/* Featured Projects */}
                <div className="mt-16">
                    <h3 className="text-3xl font-semibold text-center mb-12 text-neutral-900 dark:text-white">
                        Featured Projects
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {featuredProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 shadow-lg"
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                    animation: 'fadeInUp 0.8s ease-out forwards'
                                }}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <Button
                                            href={project.github}
                                            variant="outline"
                                            size="sm"
                                            className="p-2"
                                        >
                                            <Github className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            href={project.live}
                                            size="sm"
                                            className="p-2"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                                
                                <p className="text-neutral-700 dark:text-white/70 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-400/10 text-blue-400 border border-blue-400/20 px-3 py-1 rounded-full text-xs font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold text-green-400 mb-3">Key Features</h4>
                                    <ul className="space-y-2">
                                        {project.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-neutral-600 dark:text-white/60 text-sm">
                                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
                <div className="mt-20">
                    <h3 className="text-3xl font-semibold text-center mb-12 text-neutral-900 dark:text-white">
                        Other Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {otherProjects.map((project, index) => (
                            <div
                                key={project.title}
                                className="bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 shadow-lg"
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: 'fadeInUp 0.6s ease-out forwards'
                                }}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-1">
                                        <Button
                                            href={project.github}
                                            variant="outline"
                                            size="sm"
                                            className="p-1"
                                        >
                                            <Github className="w-3 h-3" />
                                        </Button>
                                        <Button
                                            href={project.live}
                                            size="sm"
                                            className="p-1"
                                        >
                                            <ExternalLink className="w-3 h-3" />
                                        </Button>
                                    </div>
                                </div>
                                
                                <p className="text-neutral-600 dark:text-white/60 text-sm mb-4">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tech.slice(0, 3).map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-blue-400/10 text-blue-400 border border-blue-400/20 px-2 py-1 rounded text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tech.length > 3 && (
                                        <span className="bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-white/60 px-2 py-1 rounded text-xs">
                                            +{project.tech.length - 3} more
                                        </span>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    {project.features.slice(0, 3).map((feature) => (
                                        <div key={feature} className="flex items-start gap-2 text-neutral-500 dark:text-white/50 text-xs">
                                            <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
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
