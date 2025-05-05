"use client";
import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSent(false);

        // Replace with your Formspree endpoint
        const endpoint = "https://formspree.io/f/manoodjp";

        const res = await fetch(endpoint, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                message: form.message,
            }),
        });

        if (res.ok) {
            setSent(true);
            setForm({ name: "", email: "", message: "" });
        } else {
            setError("Failed to send message. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-24 bg-neutral-950">
            <div className="container max-w-xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-8">Contact Me</h2>
                <form
                    onSubmit={handleSubmit}
                    className="bg-neutral-900 border border-white/10 rounded-3xl p-8 flex flex-col gap-4 shadow-lg"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-neutral-800 text-white rounded-xl px-4 py-2 outline-none"
                        onChange={handleChange}
                        value={form.name}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="bg-neutral-800 text-white rounded-xl px-4 py-2 outline-none"
                        onChange={handleChange}
                        value={form.email}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        className="bg-neutral-800 text-white rounded-xl px-4 py-2 outline-none min-h-[100px]"
                        onChange={handleChange}
                        value={form.message}
                    />
                    <button
                        type="submit"
                        className="bg-blue-400 text-neutral-900 font-bold rounded-xl px-6 py-2 mt-2 hover:bg-blue-300 transition"
                    >
                        Send Message
                    </button>
                    {sent && (
                        <p className="text-green-400 text-center mt-2">Message sent successfully!</p>
                    )}
                    {error && (
                        <p className="text-red-400 text-center mt-2">{error}</p>
                    )}
                </form>
                <div className="mt-8 text-center text-white/80 space-y-2">
                    <div>
                        <span className="font-semibold">LinkedIn: </span>
                        <a
                            href="https://linkedin.com/in/aayush-kumar-bhat-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            aayush-kumar-bhat-/
                        </a>
                    </div>
                    <div>
                        <span className="font-semibold">Gmail: </span>
                        <span className="text-blue-400">naayush448@gmail.com</span>
                    </div>
                </div>
            </div>
        </section>
    );
}