"use client";
import React from "react";
import FutureGrid from "@/components/FutureGrid";
import Navbar from "@/components/Navbar";
import { Brain, Network, Zap, Flag, Monitor, Code, Database, Cpu } from "lucide-react";

export default function Methodology() {
    return (
        <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden relative">

            {/* Navbar */}
            <Navbar />

            {/* Background */}
            <FutureGrid variant="halo" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

            {/* Hero Section */}
            <section className="relative z-10 pt-40 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span className="text-sm font-medium tracking-wide text-cyan-100 uppercase">
                            The Protocol
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 font-[family-name:--font-outfit]">
                        The Deep Loop Protocol: <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            Engineering Your Autonomous Future.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        We don't just "implement AI." We architect the neural pathways of your digital enterprise.
                    </p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="relative z-10 py-20 px-6 border-y border-white/5 bg-black/40 backdrop-blur-sm">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:--font-outfit]">Our Core Philosophy</h2>
                    <p className="text-lg text-slate-300 leading-8">
                        <span className="text-white font-semibold">"Automation matches humanity; it doesn't delete it."</span> <br />
                        We believe that true operational singularity isn't about replacing your workforce—it's about liberating them from the robotic so they can focus on the creative. We build <span className="text-purple-400">Human-Centric Intelligence</span> that scales your logic without diluting your essence.
                    </p>
                </div>
            </section>

            {/* The Framework (Process) */}
            <section className="relative z-10 py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl font-bold text-white mb-4 font-[family-name:--font-outfit]">The Deep Loop Framework</h2>
                        <p className="text-slate-400">From chaos to coherence in four distinct phases.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                        {/* Phase 1 */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">01</div>
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                                <Brain size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Neural Discovery</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We map your operational DNA. We audit your current workflows, identify friction points, and isolate the "logic loops" ripe for automation. This is where we separate the noise from the signal.
                            </p>
                        </div>

                        {/* Phase 2 */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">02</div>
                            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                                <Network size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">System Blueprinting</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We architect the agentic swarm. Using systems thinking, we design a bespoke mesh of AI agents and data pipelines that will handle the workload. No black boxes—just clear, logic-driven architecture.
                            </p>
                        </div>

                        {/* Phase 3 */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">03</div>
                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Active Fusion</h3>
                            <p className="text-slate-400 leading-relaxed">
                                The build phase. We fuse best-in-class tools (n8n, Python, LLMs) to construct your system. We iterate rapidly, testing edge cases and ensuring the logic holds up under pressure.
                            </p>
                        </div>

                        {/* Phase 4 */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500">
                            <div className="absolute top-8 right-8 text-6xl font-black text-white/5 group-hover:text-white/10 transition-colors">04</div>
                            <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 text-green-400">
                                <Flag size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">Autonomous Handover</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We don't just leave you with a login. We provide comprehensive documentation, training, and a warm handover. You receive a system that is yours to command—fully observable and ready to scale.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Toolkit */}
            <section className="relative z-10 py-24 bg-[#0A0A0A] border-y border-white/5">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
                        <div className="md:col-span-1">
                            <h2 className="text-3xl font-bold text-white mb-4">The Armory</h2>
                            <p className="text-slate-400 text-sm">Best-in-class technology stack for enterprise-grade stability.</p>
                        </div>
                        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center gap-3 text-slate-500 hover:text-white transition-colors">
                                <Monitor size={32} />
                                <span className="font-semibold text-sm">n8n</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 text-slate-500 hover:text-white transition-colors">
                                <Code size={32} />
                                <span className="font-semibold text-sm">Python</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 text-slate-500 hover:text-white transition-colors">
                                <Cpu size={32} />
                                <span className="font-semibold text-sm">OpenAI & Anthropic</span>
                            </div>
                            <div className="flex flex-col items-center gap-3 text-slate-500 hover:text-white transition-colors">
                                <Database size={32} />
                                <span className="font-semibold text-sm">Supabase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Outcome */}
            <section className="relative z-10 py-40 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Operational Singularity</h2>
                    <p className="text-xl text-slate-400 mb-12">
                        Peace of mind. Exponential scale. The freedom to focus on what matters. <br />
                        This is what happens when you stop managing tasks and start managing systems.
                    </p>
                    <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-slate-200 transition-all hover:scale-105">
                        Start Your Evolution
                    </button>
                </div>
            </section>

        </main>
    );
}
