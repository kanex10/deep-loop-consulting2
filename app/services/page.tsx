"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import FutureGrid from "@/components/FutureGrid";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Brain, Zap, Monitor } from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen w-full bg-[#050505] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden">
            <Navbar />

            {/* BACKGROUND */}
            <div className="fixed inset-0 z-0">
                <FutureGrid variant="halo" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Return Button */}
            <div className="fixed top-24 left-6 z-30">
                <Link href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group">
                    <div className="p-1 rounded-full bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                        <ArrowUpRight className="w-4 h-4 rotate-[225deg]" />
                    </div>
                    Back to Home
                </Link>
            </div>

            <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-20 animate-fade-in-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-outfit tracking-tight">
                        Our Expertise
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Three pillars of modern enterprise efficiency.
                    </p>
                </div>

                {/* 1. AUTOMATION (Primary) */}
                <section className="mb-32">
                    <div className="relative rounded-3xl overflow-hidden border border-purple-500/30 bg-white/5 backdrop-blur-xl group">
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-700" />

                        <div className="relative grid md:grid-cols-2 gap-12 p-12 items-center">
                            <div className="order-2 md:order-1 space-y-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-semibold uppercase tracking-wider">
                                    <Zap className="w-4 h-4" /> Primary Service
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-white font-outfit leading-tight">
                                    Intelligent <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                                        Automation
                                    </span>
                                </h2>
                                <p className="text-lg text-slate-300 leading-relaxed">
                                    We don't just connect apps; we build autonomous nervous systems for your business. From complex data pipelines to self-healing workflows, our automation architectures eliminate manual bottleneck and scale endlessly.
                                </p>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-400" /> End-to-end Process Orchestration</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-400" /> Custom LLM Agent Integration</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-purple-400" /> Error Handling & Auto-Recovery</li>
                                </ul>
                            </div>

                            <div className="order-1 md:order-2 flex justify-center">
                                <div className="relative w-full aspect-square max-w-md bg-gradient-to-tr from-purple-900/50 to-blue-900/50 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder visual/icon */}
                                    <Zap className="w-32 h-32 text-white/20" />
                                    <div className="absolute inset-0 bg-[url('/assets/grid-pattern.svg')] opacity-30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. AI EDUCATION & 3. WEB DESIGN (Grid) */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* AI Education */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Brain className="w-8 h-8 text-blue-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 font-outfit">AI Company-wide Education</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Empower your workforce with the skills to leverage AI. We provide tailored workshops, executive briefings, and hands-on training to ensure your team moves as fast as the technology.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-500 mb-8">
                            <li>• Prompt Engineering Mastery</li>
                            <li>• AI Ethics & Compliance</li>
                            <li>• Custom Tool Adoption</li>
                        </ul>
                        <button className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                            Learn more <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </motion.div>

                    {/* Sleek Web Design */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition duration-300 group"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                            <Monitor className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 font-outfit">Sleek Web Designs</h3>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            First impressions matter. We fuse modern aesthetics with high-performance frameworks to create digital experiences that captivate and convert.
                        </p>
                        <ul className="space-y-2 text-sm text-slate-500 mb-8">
                            <li>• Next.js & React Architecture</li>
                            <li>• 3D Interactions & Motion</li>
                            <li>• Conversion-Optimized UX</li>
                        </ul>
                        <button className="flex items-center gap-2 text-white font-medium hover:gap-4 transition-all">
                            View Portfolio <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>

            </div>
        </main>
    );
}
