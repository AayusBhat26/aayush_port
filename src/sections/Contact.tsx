"use client";

import { useState } from "react";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { 
    Mail, 
    Linkedin, 
    Github, 
    Send, 
    CheckCircle, 
    AlertCircle,
    MessageSquare,
    Code,
    Users,
    Zap,
    Brain
} from "lucide-react";

const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aayush-kumar-bhat-/",
        icon: Linkedin,
        color: "text-blue-400 hover:text-blue-300"
    },
    {
        name: "GitHub",
        url: "https://github.com/AayusBhat26",
        icon: Github,
        color: "text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-gray-300"
    },
    {
        name: "Email",
        url: "mailto:naayush448@gmail.com",
        icon: Mail,
        color: "text-red-400 hover:text-red-300"
    }
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
            
            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus("idle"), 3000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="py-24 pt-32">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Contact</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-4xl mx-auto text-neutral-900 dark:text-white">
                    Let's{" "}
                    <span className="text-blue-400">Connect</span>{" "}
                    & Build Together
                </h2>
                <p className="text-center text-xl text-neutral-600 dark:text-white/60 mt-6 max-w-3xl mx-auto">
                    Ready to collaborate on your next project? Whether you need a full-stack application, 
                    real-time features, or AI integration, I'm here to help bring your ideas to life.
                </p>

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-white/10 rounded-2xl p-8 shadow-lg">
                        <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                            Send me a message
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-white/80 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-white/40 focus:border-blue-400/50 focus:outline-none transition-colors"
                                    placeholder="Your name"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-white/80 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-white/40 focus:border-blue-400/50 focus:outline-none transition-colors"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-white/80 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-white/40 focus:border-blue-400/50 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Sending...
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Send className="w-4 h-4" />
                                        Send Message
                                    </div>
                                )}
                            </Button>
                        </form>

                        {/* Status Messages */}
                        {submitStatus === "success" && (
                            <div className="mt-4 p-4 bg-green-500/20 border border-green-400/30 rounded-lg flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span className="text-green-400">Message sent successfully!</span>
                            </div>
                        )}
                        
                        {submitStatus === "error" && (
                            <div className="mt-4 p-4 bg-red-500/20 border border-red-400/30 rounded-lg flex items-center gap-3">
                                <AlertCircle className="w-5 h-5 text-red-400" />
                                <span className="text-red-400">Failed to send message. Please try again.</span>
                            </div>
                        )}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-6">
                                Let's connect
                            </h3>
                            <p className="text-neutral-700 dark:text-white/70 leading-relaxed mb-8">
                                I'm always open to discussing new opportunities, interesting projects, 
                                or just having a chat about technology and development.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                                What I can help with
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-neutral-700 dark:text-white/70">
                                    <Code className="w-5 h-5 text-blue-400" />
                                    <span>Full-stack web development</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-700 dark:text-white/70">
                                    <Zap className="w-5 h-5 text-green-400" />
                                    <span>Real-time applications</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-700 dark:text-white/70">
                                    <Brain className="w-5 h-5 text-purple-400" />
                                    <span>AI integration</span>
                                </div>
                                <div className="flex items-center gap-3 text-neutral-700 dark:text-white/70">
                                    <Users className="w-5 h-5 text-orange-400" />
                                    <span>Team collaboration</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                                Connect with me
                            </h4>
                            <div className="flex gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-3 bg-neutral-100 dark:bg-neutral-800/50 border border-neutral-200 dark:border-white/10 rounded-lg hover:border-blue-400/30 transition-all duration-300 hover:scale-105 ${link.color}`}
                                    >
                                        <link.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}