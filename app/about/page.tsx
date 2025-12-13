"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import FutureGrid from "@/components/FutureGrid";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Zap, Layers } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen w-full bg-[#050505] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden relative flex flex-col">
            <Navbar />

            <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
                <FutureGrid variant="halo" />

                {/* Gradients */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10" />

                {/* Return Button */}
                <div className="absolute top-24 left-6 z-30">
                    <Link href="/" className="flex items-center gap-2 text-sm text-slate-500 hover:text-white transition-colors group">
                        <div className="p-1 rounded-full bg-white/5 border border-white/10 group-hover:border-white/30 transition-colors">
                            <ArrowRight className="w-4 h-4 rotate-180" />
                        </div>
                        Back to Home
                    </Link>
                </div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
                            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse"></span>
                            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">
                                About Deep Loop
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
                            Human Intelligence. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                                Artificial Efficiency.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between complex AI technology and tangible business results.
                            Deep Loop is a boutique consultancy built for the future of work.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- ORIGIN STORY: THE LOOP --- */}
            <section className="relative py-24 bg-[#050505]">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* Left: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-white">The Origin of The Loop</h2>
                            <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
                                <p>
                                    In a world obsessed with "more"—more tools, more meetings, more complexity—I saw a need for
                                    <span className="text-white font-medium"> less</span>. Less friction, less waste, less manual work.
                                </p>
                                <p>
                                    I founded Deep Loop Consulting with a singular mission: to eliminate the repetitive tasks that drain human creativity.
                                    Having worked with traditional agencies, I realized that the "big team" model is often too slow for the AI era.
                                </p>
                                <p>
                                    Deep Loop is different. It's agile, direct, and ruthlessly efficient. I don't just advise on AI; I build the
                                    systems that run it. I partner directly with founders to architect autonomous workflows that scale
                                    without the headcount.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right: Abstract Visual */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl blur-2xl opacity-10"></div>
                            <div className="relative aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center p-8 overflow-hidden">
                                {/* Abstract Rings */}
                                <div className="absolute inset-0 border-[40px] border-white/5 rounded-full scale-150" />
                                <div className="absolute inset-0 border-[40px] border-white/5 rounded-full scale-[2]" />

                                <div className="relative z-10 text-center">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl mb-6">
                                        <Brain className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Founder-Led</h3>
                                    <p className="text-sm text-slate-400">Direct architecture. No middlemen.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- WHY DEEP LOOP? (Values) --- */}
            <section className="relative py-24 border-t border-white/5 bg-[#0A0A0A]">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Why Deep Loop?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            We aren't just another dev shop. We are your strategic partner in the age of intelligence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Agile & Autonomous</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We move fast. By leveraging AI agents internally, we deliver enterprise-grade solutions at startup speed. No bloated timelines.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                                <Layers className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Holistic Design</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Code is only half the battle. We design workflows that look as good as they function. Aesthetic clarity leads to operational clarity.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                                <Brain className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Future-Proofed</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                We don't just build for today. We architect systems designed to evolve with the rapidly changing landscape of AI models.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="relative py-32 flex flex-col items-center justify-center text-center overflow-hidden">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />

                <div className="relative z-10 max-w-3xl px-6">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Ready to close the loop on <br /> inefficiency?
                    </h2>
                    <p className="text-xl text-slate-400 mb-10">
                        Partner with Deep Loop Consulting and transform your operations today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-slate-200 transition-all hover:scale-105"
                        >
                            Start a Project <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
