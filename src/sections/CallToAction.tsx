"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/Button";

export default function CallToAction() {
    const scopeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = scopeRef.current;
        if (!element) return;

        const animate = () => {
            element.style.transform = 'scale(1.05)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 1000);
        };

        const interval = setInterval(animate, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24">
            <div className="container">
                <div
                    ref={scopeRef}
                    className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-3xl p-12 text-center transition-transform duration-1000"
                >
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Ready to Build Something{" "}
                        <span className="text-blue-400">Amazing?</span>
                    </h2>
                    <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                        Let's collaborate on your next project. Whether you need a full-stack application, 
                        real-time features, or AI integration, I'm here to help bring your ideas to life.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Get In Touch
                        </Button>
                        <Button href="#projects" variant="outline">
                            View My Work
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
