"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        // On mount, check localStorage or system preference
        const saved = localStorage.getItem("theme");
        if (saved === "light" || saved === "dark") {
            setTheme(saved);
            document.documentElement.classList.toggle("dark", saved === "dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setTheme(prefersDark ? "dark" : "light");
            document.documentElement.classList.toggle("dark", prefersDark);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-4 right-4 z-50 bg-neutral-800 dark:bg-white rounded-full p-3 shadow-lg transition-colors"
            aria-label="Toggle theme"
            type="button"
        >
            {theme === "dark" ? (
                <FaSun className="text-yellow-400" size={22} />
            ) : (
                <FaMoon className="text-neutral-900" size={22} />
            )}
        </button>
    );
}