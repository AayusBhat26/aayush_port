"use client";

import Tag from "@/components/Tag";
import {
    useMotionValue,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on("change", (latest) => {
            setCurrentWord(latest);
        });
    }, [wordIndex]);

    useMotionValueEvent(scrollYProgress, "change", (latest) =>
        console.log(latest)
    );

    return (
        <section id="about" className="py-24 bg-neutral-950">
            <div className="container max-w-3xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center text-white mb-6">
                    👋 Hi, I'm Aayush Kumar Bhat
                </h2>
                <p className="text-xl text-center text-white/70 mb-8">
                    I'm a passionate software developer specializing in building modern
                    web applications. I love working with JavaScript, React, Next.js, and
                    the MERN stack. My focus is on creating performant, accessible, and
                    visually appealing digital experiences.
                </p>
                <p className="text-lg text-center text-white/50">
                    Always eager to learn new technologies and collaborate on exciting
                    projects. Let's connect and build something amazing together!
                </p>
            </div>
        </section>
    );
}
