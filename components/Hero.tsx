"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

                {/* Nebula Glows */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-blue-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    <span className="text-xs font-medium text-gray-300 tracking-wide">New release: Deep Loop Protocol v2.0</span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-medium tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40"
                >
                    Scale your protocol <br />
                    <span className="text-white/60">with smart</span> <br />
                    infrastructure
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    The essential toolkit for deploying secure dApps. From writing your first smart contract to governing a global DAO, build it all on one unified layer.
                </motion.p>

                {/* CTA Button */}
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="group relative px-8 py-4 bg-white/5 hover:bg-white/10 text-white text-sm font-bold tracking-widest uppercase rounded-full border border-white/10 transition-all overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Book a Consultation
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
            </div>
        </section>
    );
}
