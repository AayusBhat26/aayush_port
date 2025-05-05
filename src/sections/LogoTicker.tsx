"use client";

import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";

const logos = [
    { name: "JavaScript", image: quantumLogo },
    { name: "Typescript", image: acmeLogo },
    { name: "Java", image: echoValleyLogo },
    { name: "C/C++", image: pulseLogo },
    { name: "React", image: outsideLogo },
    { name: "Next", image: apexLogo },
    { name: "MERN", image: celestialLogo },
    { name: "MySQL", image: twiceLogo },
    { name: "PostgresSQL", image: twiceLogo },
    { name: "Docker", image: twiceLogo },
    { name: "Prisma", image: twiceLogo },
];

export default function LogoTicker() {
    return (
        <section id="skills_1" className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-2xl">
                    Skills and Technologies
                </h3>
                <div className="flex overflow-hidden mt-16 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <React.Fragment key={i}>
                                {logos.map((each) => (
                                    <div
                                        key={each.name}
                                        className="flex flex-col items-center group"
                                    >
                                        {/* Uncomment below if you want to show logos */}
                                        {/* <Image
                                            src={each.image}
                                            alt={each.name}
                                            className="w-16 h-16 mb-2"
                                        /> */}
                                        <span
                                            className="text-3xl font-bold text-white transition-colors duration-200 group-hover:text-blue-400 hover:text-blue-400 cursor-pointer"
                                        >
                                            {each.name}
                                        </span>
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
