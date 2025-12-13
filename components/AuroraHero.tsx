"use client";
import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import React, { useEffect } from "react";

export default function AuroraHero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            mouseX.set(clientX / innerWidth);
            mouseY.set(clientY / innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.section
            className="absolute inset-0 z-0 overflow-hidden bg-[#000000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            {/* Stars / Noise Base */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>

            {/* Aurora Curtain 1 (Cyan/Green - Vertical) */}
            <motion.div
                className="absolute -inset-[50%] opacity-60 blur-[60px]"
                style={{
                    background: "conic-gradient(from 180deg at 50% 50%, #000000 0deg, #13FFAA 40deg, #000000 80deg, #1E67C6 120deg, #000000 160deg)",
                    translateX: useMotionTemplate`calc(${mouseX} * -30px)`,
                    translateY: useMotionTemplate`calc(${mouseY} * -10px)`,
                    filter: "blur(80px)",
                    mixBlendMode: "screen",
                }}
                animate={{
                    transform: ["scale(1) rotate(0deg)", "scale(1.1) rotate(2deg)", "scale(1) rotate(0deg)"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
            />

            {/* Aurora Curtain 2 (Purple/Pink - Vertical Offset) */}
            <motion.div
                className="absolute -inset-[50%] opacity-50 blur-[80px]"
                style={{
                    background: "conic-gradient(from 0deg at 60% 50%, #000000 0deg, #CE84CF 60deg, #000000 100deg, #DD335C 160deg, #000000 220deg)",
                    translateX: useMotionTemplate`calc(${mouseX} * 30px)`,
                    translateY: useMotionTemplate`calc(${mouseY} * 10px)`,
                    filter: "blur(100px)",
                    mixBlendMode: "screen",
                }}
                animate={{
                    transform: ["scale(1.1) rotate(0deg)", "scale(1) rotate(-3deg)", "scale(1.1) rotate(0deg)"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut"
                }}
            />

            {/* Aurora Curtain 3 (Deep Blue/Teal - Bottom Fill) */}
            <motion.div
                className="absolute inset-x-0 bottom-0 h-[80%] opacity-60 blur-[90px]"
                style={{
                    background: "linear-gradient(to top, #1E67C6, #13FFAA, transparent)",
                    translateX: useMotionTemplate`calc(${mouseX} * 15px)`,
                    scale: 1.5,
                    mixBlendMode: "screen"
                }}
            />

            {/* Vertical Ray Overlay (Simulating the distinct beams) */}
            <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 100px)"
                }}
            ></div>

        </motion.section>
    );
}
