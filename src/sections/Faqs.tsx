"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What type of projects do you specialize in?",
        answer: "I specialize in full-stack web applications, particularly real-time communication platforms, AI-powered applications, and productivity tools. My expertise includes building scalable backend systems, real-time features with WebRTC and WebSockets, and integrating AI services like Google Gemini."
    },
    {
        question: "What technologies do you use for backend development?",
        answer: "I work with Node.js, Express.js, PostgreSQL, MongoDB, Prisma ORM, and deployment platforms like Vercel. I also have experience with containerization and orchestration (Docker, Kubernetes) as well as real-time technologies like Socket.io and WebRTC for building interactive applications."
    },
    {
        question: "Do you have experience with AI integration?",
        answer: "Yes! I've integrated Google Gemini AI into multiple projects, including a legal assistance platform and productivity tools. I also have experience with sentiment analysis, NLP, and building AI-powered features that enhance user experiences."
    },
    {
        question: "Can you build real-time applications?",
        answer: "Absolutely! I've built several real-time applications including a Discord-like platform with video/audio calls, screen sharing, and instant messaging. I use WebRTC, Socket.io, and WebSockets to create seamless real-time experiences."
    },
    {
        question: "What's your approach to database design?",
        answer: "I focus on designing scalable database architectures using PostgreSQL and MongoDB. I use Prisma ORM for type-safe database operations and implement proper indexing, relationships, and optimization strategies for performance."
    },
    {
        question: "Do you work with modern frontend frameworks?",
        answer: "Yes, I primarily work with React.js, Next.js 14, and TypeScript. I use modern styling solutions like Tailwind CSS and component libraries like shadcn/ui to create responsive, accessible, and performant user interfaces."
    }
];

export default function Faqs() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24">
            <div className="container max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-white mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-neutral-900/50 border border-white/10 rounded-xl overflow-hidden"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                animation: 'fadeInUp 0.6s ease-out forwards'
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-medium text-lg">
                                    {faq.question}
                                </span>
                                <div
                                    className={`transition-transform duration-300 ${
                                        openIndex === index ? 'rotate-180' : ''
                                    }`}
                                >
                                    <ChevronDown className="text-white/60" size={20} />
                                </div>
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <p className="text-white/70 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
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
