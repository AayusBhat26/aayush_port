"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, toggleTheme, mounted } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setIsOpen(false);

    // Don't render theme toggle until mounted to prevent hydration issues
    if (!mounted) {
        return (
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10"
                        : "bg-transparent"
                }`}
            >
                <div className="container">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="text-xl font-bold text-neutral-900 dark:text-white">
                            Aayush Bhat
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-neutral-700 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium"
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-neutral-900 dark:text-white p-2"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    {isOpen && (
                        <div className="md:hidden">
                            <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200 dark:border-white/10 py-4">
                                <div className="flex flex-col gap-4">
                                    {navLinks.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            className="text-neutral-700 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white transition-colors px-4 py-2 text-sm font-medium"
                                            onClick={closeMenu}
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        );
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/10"
                    : "bg-transparent"
            }`}
        >
            <div className="container">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="text-xl font-bold text-neutral-900 dark:text-white">
                        Aayush Bhat
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-neutral-700 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white transition-colors text-sm font-medium"
                                onClick={closeMenu}
                            >
                                {link.label}
                            </a>
                        ))}
                        
                        {/* Theme Toggle Button */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                                transition={{ duration: 0.5 }}
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-4 h-4 text-yellow-400" />
                                ) : (
                                    <Moon className="w-4 h-4 text-blue-600" />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Theme Toggle Button for Mobile */}
                        <motion.button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <motion.div
                                initial={false}
                                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                                transition={{ duration: 0.5 }}
                            >
                                {theme === 'dark' ? (
                                    <Sun className="w-4 h-4 text-yellow-400" />
                                ) : (
                                    <Moon className="w-4 h-4 text-blue-600" />
                                )}
                            </motion.div>
                        </motion.button>
                        
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-neutral-900 dark:text-white p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border-t border-neutral-200 dark:border-white/10 py-4">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-neutral-700 dark:text-white/80 hover:text-neutral-900 dark:hover:text-white transition-colors px-4 py-2 text-sm font-medium"
                                        onClick={closeMenu}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
