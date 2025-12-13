"use client";
import React, { useEffect } from "react";
import { useMotionValue, useMotionTemplate, motion } from "framer-motion";

export default function StageSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = ({ pageX, pageY }: MouseEvent) => {
            mouseX.set(pageX);
            mouseY.set(pageY);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* 
        The "Stage Light" Effect 
      */}
            <motion.div
                className="absolute inset-0 opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              800px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.25),
              transparent 80%
            )
          `,
                }}
            />

            {/* Core Beam */}
            <motion.div
                className="absolute inset-0 opacity-100 mix-blend-screen"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.3),
              transparent 60%
            )
          `,
                }}
            />
        </div>
    );
}
