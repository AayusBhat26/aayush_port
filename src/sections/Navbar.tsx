"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Skillset", href: "#skills_1" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-7xl ">
                    <div className="border border-white/15 rounded-[27px] lg:rounded-full bg-neutral-950/70 backdrop-blur p-4">
                        <figure className="grid grid-cols-1 lg:grid-cols-3 py-2 lg:px-2 px-4 items-center">
                            {/* Empty left column for spacing */}
                            <div className="hidden lg:block"></div>
                            {/* Centered nav links on desktop */}
                            <div className="flex justify-center items-center w-full">
                                <nav className="flex gap-8 font-medium">
                                    {navLinks.map((each) => (
                                        <a
                                            href={each.href}
                                            key={each.href}
                                            className="text-white font-bold text-2xl hover:text-blue-400 transition-colors duration-200"
                                        >
                                            {each.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            {/* Hamburger menu on mobile */}
                            <div className="flex justify-end lg:hidden">
                                <button
                                    onClick={() => setIsOpen((v) => !v)}
                                    aria-label="Toggle menu"
                                    className="text-white"
                                >
                                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </figure>

                        {/* Mobile menu */}
                        <AnimatePresence>
                            {isOpen && (
                                <motion.figure
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden lg:hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                key={link.href}
                                                href={link.href}
                                                className="text-white hover:text-blue-400 transition-colors duration-200"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </motion.figure>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px]"></div>
        </>
    );
}
