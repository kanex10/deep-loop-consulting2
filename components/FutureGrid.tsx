"use client";
import React from "react";
import { motion } from "framer-motion";

interface FutureGridProps {
    variant?: "orbs" | "halo";
}

export default function FutureGrid({ variant = "orbs" }: FutureGridProps) {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[#050505] pointer-events-none">

            {/* 
        CSS for the Grid Animation 
        We use a perspective container and a moving background plane.
      */}
            <style jsx>{`
        .perspective-container {
          perspective: 1000px;
          overflow: hidden;
          width: 100%;
          height: 100%;
          position: absolute;
        }
        
        .grid-plane {
          position: absolute;
          width: 200%;
          height: 200%;
          left: -50%;
          top: -50%;
          background-image: 
            linear-gradient(rgba(120, 50, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 50, 255, 0.3) 1px, transparent 1px);
          background-size: 50px 50px;
          transform-style: preserve-3d;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            transform: rotateX(60deg) translateY(0);
          }
          100% {
            transform: rotateX(60deg) translateY(50px);
          }
        }
      `}</style>

            {/* 
         1. The Moving Grid (Floor) 
         We fade it out at the top (horizon) and bottom (foreground) for a smooth look.
      */}
            <div className="perspective-container flex items-center justify-center">
                <div className="grid-plane opacity-30" />

                {/* Variant-specific Grid Effects */}
                {variant === "halo" && (
                    <div className="absolute inset-0 z-0">
                        {/* Rising Digital Columns - "New Animation" */}
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={`col-${i}`}
                                className="absolute bottom-0 bg-blue-500/20 backdrop-blur-sm border-t border-blue-400/50"
                                style={{
                                    left: `${i * 7}%`,
                                    width: "4%",
                                    height: "0%",
                                }}
                                animate={{
                                    height: [
                                        Math.random() * 20 + "%",
                                        Math.random() * 60 + "%",
                                        Math.random() * 20 + "%"
                                    ],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: Math.random() * 3 + 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>
                )}

                {/* Horizon Fade Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505] z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] z-10" />
            </div>

            {/* 
         2. Content: "Warp Speed" Stars or Halo
      */}
            <div className="absolute inset-0 z-0">
                {variant === "orbs" ? (
                    <>
                        {/* Standard Floating Particles */}
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-white rounded-full"
                                initial={{
                                    x: Math.random() * 100 + "%",
                                    y: Math.random() * 100 + "%",
                                    width: Math.random() * 2 + 1 + "px",
                                    height: Math.random() * 2 + 1 + "px",
                                    opacity: Math.random() * 0.5 + 0.2,
                                }}
                                animate={{
                                    y: [null, Math.random() * 100 + "%"],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 10 + 10,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        ))}

                        {/* Larger glowing orbs - "Powerful & Solid" */}
                        {[...Array(12)].map((_, i) => {
                            const durationX = Math.random() * 20 + 20;
                            const durationY = Math.random() * 20 + 20;
                            const delayX = -Math.random() * durationX;
                            const delayY = -Math.random() * durationY;

                            return (
                                <motion.div
                                    key={`orb-${i}`}
                                    className="absolute rounded-full mix-blend-screen"
                                    style={{
                                        width: "120px",
                                        height: "120px",
                                        left: 0,
                                        top: 0,
                                        background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(192, 132, 252, 0.8) 20%, rgba(107, 33, 168, 0.4) 60%, transparent 80%)",
                                        boxShadow: "0 0 60px rgba(168, 85, 247, 0.4), inset 0 0 20px rgba(255,255,255,0.5)",
                                    }}
                                    animate={{
                                        x: ["0vw", "calc(100vw - 120px)"],
                                        y: ["0vh", "calc(100vh - 120px)"],
                                    }}
                                    transition={{
                                        x: {
                                            duration: durationX,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            ease: "linear",
                                            delay: delayX,
                                        },
                                        y: {
                                            duration: durationY,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            ease: "linear",
                                            delay: delayY,
                                        }
                                    }}
                                />
                            );
                        })}
                    </>
                ) : (
                    /* HALO VARIANT */
                    /* Centered Bright Blue Ring with Ripple */
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        {/* Main Halo Ring */}
                        <motion.div
                            className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full"
                            style={{
                                background: "transparent",
                                // Thin Blue Ray
                                border: "2px solid rgba(59, 130, 246, 0.8)", // blue-500
                                boxShadow: "0 0 60px rgba(59, 130, 246, 0.6), inset 0 0 20px rgba(59, 130, 246, 0.4)",
                            }}
                            animate={{
                                scale: [1, 1.05, 1], // Ripple / Breathing
                                opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Inner Faint Glow for depth */}
                            <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl " />
                        </motion.div>
                    </div>
                )}
            </div>

            {/* 3. Global Glow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10 mix-blend-screen pointer-events-none" />

        </div>
    );
}
