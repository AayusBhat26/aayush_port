"use client";

import Button from "@/components/Button";
import designExample1 from "@/assets/images/design-example-1.png";
import designExample2 from "@/assets/images/design-example-2.png";
import extraImage from "@/assets/images/extra-image.png"; // Import your new image
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [leftPointerScope, leftPointerAnimate] = useAnimate();

  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [rightPointerScope, rightPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    leftPointerAnimate([
      [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
      [
        leftPointerScope.current,
        { y: [0, 16, 0], x: 0 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    rightDesignAnimate([
      [
        rightDesignScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
    ]);

    rightPointerAnimate([
      [
        rightPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
      [
        rightPointerScope.current,
        { y: [0, 20, 0], x: 0 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      id="home"
      className="py-24 overflow-x-clip"
      style={{
        cursor: `url(${cursorImage.src}), auto`,
      }}
    >
      <div className="container relative ">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          className="absolute -left-32 top-16 hidden lg:block"
          drag
        >
          <Image
            draggable={false}
            src={"/github_stats.png"}
            width={300}
            height={300}
            style={{
              opacity: 0.5,
            }}
            alt="github stats"
          />
        </motion.div>
        <motion.div
          ref={leftPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute top-96 left-56 hidden lg:block"
        >
          <Pointer name="Aayush" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100, x: 100 }}
          ref={rightDesignScope}
          className="absolute -right-64 -top-16 hidden lg:block"
          drag
        >
          <Image
            draggable={false}
            src={"/project_1.png"}
            width={500}
            height={500}
            style={{
              opacity: 0.5,
            }}
            alt="project"
          />
        </motion.div>
        <motion.div
          ref={rightPointerScope}
          initial={{ opacity: 0, x: 275, y: 100 }}
          className="absolute -top-4 right-80 hidden lg:block"
        >
          <Pointer color="red" name="Bhat" />
        </motion.div>

        <div>
          <p className="text-center text-7xl font-bold ">
            <span className="hover:text-orange-400">Aayush</span> <span>Kumar</span>
            <span className="text-green-400"> Bhat</span>
          </p>
        </div>
        <h1 className="text-xl md:text-2xl lg:text-3xl font-medium text-center mt-6 ">
          Software Developer from{" "}
          <p className="text-center text-6xl font-bold ">
            <span className="hover:text-orange-400">In</span>
            <span>d</span>
            <span className="text-green-400">ia</span>
          </p>
        </h1>
        <p className="text-center text-xl text-white/10 mt-8 max-w-2xl mx-auto">
          Software developer with a passion for creating innovative solutions. I have
          experience in web development. I am always eager to learn new technologies and
          improve my skills. Let's connect and collaborate on exciting projects!
        </p>

        
        {/* <motion.div
          initial={{ opacity: 0, y: 40, x: 0 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          <Image 

            src={"/leetcode_stats.png"}
            alt="LeetcodeStatis"
            width={400}
            height={400}
            style={{
              opacity:1
            }}
            className="rounded-xl shadow-lg"
          />
        </motion.div> */}
      </div>
    </section>
  );
}
