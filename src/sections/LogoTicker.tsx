"use client";

import { useEffect, useRef, useState } from "react";

const logos = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "Socket.io",
    "WebRTC",
    "Prisma",
    "Tailwind CSS",
    "Framer Motion",
    "shadcn/ui",
    "Google Gemini AI",
    "Firebase",
    "Vercel",
    "Railway"
];

export default function LogoTicker() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition((prev) => {
                if (containerRef.current) {
                    const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth;
                    return prev >= maxScroll ? 0 : prev + 1;
                }
                return prev;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-12 overflow-hidden bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
            <div className="container">
                <div className="flex items-center justify-center">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                            Technologies I Work With
                        </h3>
                        <div className="flex items-center gap-8 text-neutral-600 dark:text-white/60">
                            {logos.map((logo, index) => (
                                <div
                                    key={logo}
                                    className="bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 px-4 py-2 rounded-lg text-sm font-medium hover:border-blue-400/30 transition-colors shadow-sm"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                        animation: 'fadeInUp 0.6s ease-out forwards'
                                    }}
                                >
                                    {logo}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
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
