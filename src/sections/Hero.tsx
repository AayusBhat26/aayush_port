"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Button from "@/components/Button";
import { 
    Code, 
    Database, 
    Zap, 
    Brain, 
    Globe, 
    Smartphone 
} from "lucide-react";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 300], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    const springY = useSpring(y, { stiffness: 300, damping: 30 });
    const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });
    const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const floatingIcons = [
        { Icon: Code, delay: 0, x: -20, y: -10 },
        { Icon: Database, delay: 0.2, x: 20, y: -15 },
        { Icon: Zap, delay: 0.4, x: -15, y: 15 },
        { Icon: Brain, delay: 0.6, x: 25, y: 10 },
        { Icon: Globe, delay: 0.8, x: -25, y: -5 },
        { Icon: Smartphone, delay: 1, x: 15, y: 20 },
    ];

    return (
        <section id="home" className="py-24 relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                    key={index}
                    className="absolute text-blue-400/20 dark:text-blue-400/30"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                        opacity: [0.3, 0.6, 0.3], 
                        scale: [1, 1.1, 1],
                        x: [x, x + 10, x],
                        y: [y, y - 10, y]
                    }}
                    transition={{
                        duration: 6,
                        delay: delay + 1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        left: `${50 + x}%`,
                        top: `${30 + y}%`,
                    }}
                >
                    <Icon className="w-8 h-8 md:w-12 md:h-12" />
                </motion.div>
            ))}

            <div className="container relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    style={{ y: springY, opacity: springOpacity, scale: springScale }}
                >
                    {/* resume */}
                    <div className="w-36 m-4 mx-auto mb-6">
                        <Button href="https://drive.google.com/file/d/1-nfDc1OKOCpRKZT_G3jDTZXiJNU1LPDK/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                            Resume
                        </Button>
                    </div>
                    {/* Main Heading */}
                    <motion.h1 
                        className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900 dark:text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Full-Stack Developer
                        </span>{" "}
                        {/* Building the Future */}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p 
                        className="text-xl md:text-2xl text-neutral-600 dark:text-white/70 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Crafting scalable web applications with modern technologies, 
                        real-time features, and AI integration. From concept to deployment, 
                        I bring ideas to life with clean code and exceptional user experiences.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Button href="#projects" size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-500/25">
                            View Projects
                        </Button>
                        <Button href="#contact" variant="outline" size="lg" className="border-2 border-neutral-300 dark:border-neutral-600 text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 px-8 py-4 text-lg font-semibold">
                            Get In Touch
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8, delay: 1.5 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-neutral-400 dark:border-neutral-500 rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <motion.div
                        className="w-1 h-3 bg-neutral-400 dark:bg-neutral-500 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
