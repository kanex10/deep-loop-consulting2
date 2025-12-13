"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-[#050505]/80 border-b border-white/5"
        >
            <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl tracking-tight">Deep Loop</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                {["Product", "Docs", "Customers", "Pricing"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-6">
                <Link href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block">
                    Sign in
                </Link>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold tracking-widest uppercase rounded-full border border-white/10 transition-all"
                >
                    Request Demo
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                </motion.button>
            </div>
        </motion.header>
    );
}
