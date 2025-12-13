"use client";
import React from "react";
import { Brain, Workflow, Link2, TrendingUp, ArrowUpRight } from "lucide-react";

export default function ServicesGrid() {
    const services = [
        {
            label: "Architecture",
            title: "AI Agent Systems",
            description: "Autonomous agents that handle complex customer support, sales qualification, and data analysis 24/7.",
            icon: <Brain className="w-8 h-8 text-purple-400" />,
            colSpan: "md:col-span-2",
            bgGradient: "from-purple-500/10 via-purple-500/5 to-transparent",
            border: "border-purple-500/20",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]"
        },
        {
            label: "Automation",
            title: "Workflow Optimization",
            description: "End-to-end automation of business logic using n8n and custom Python scripts.",
            icon: <Workflow className="w-8 h-8 text-cyan-400" />,
            colSpan: "md:col-span-1",
            bgGradient: "from-cyan-500/10 via-cyan-500/5 to-transparent",
            border: "border-cyan-500/20",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)]"
        },
        {
            label: "Integration",
            title: "LLM & API Glue",
            description: "Seamlessly glue your existing stack with top-tier models like GPT-4, Claude 3, and Gemini.",
            icon: <Link2 className="w-8 h-8 text-blue-400" />,
            colSpan: "md:col-span-1",
            bgGradient: "from-blue-500/10 via-blue-500/5 to-transparent",
            border: "border-blue-500/20",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]"
        },
        {
            label: "Strategy",
            title: "Consulting & Roadmapping",
            description: "Roadmapping and technical strategy for deep-tech transformation. We build the future with you.",
            icon: <TrendingUp className="w-8 h-8 text-pink-400" />,
            colSpan: "md:col-span-2",
            bgGradient: "from-pink-500/10 via-pink-500/5 to-transparent",
            border: "border-pink-500/20",
            glow: "group-hover:shadow-[0_0_50px_-10px_rgba(236,72,153,0.3)]"
        }
    ];

    return (
        <section className="py-32 relative z-10 bg-[#0F172A] border-y border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-20 text-center animate-fade-in-up">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight font-[family-name:--font-outfit]">
                        Engineering Intelligence
                    </h2>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        We don't just wrap APIs. We build resilient, scalable intelligent systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-[2rem] border border-white/5 bg-white/5 p-8 md:p-10 overflow-hidden backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${service.colSpan} ${service.glow} animate-fade-in-up`}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Grid Pattern Overlay (Subtle) */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="inline-flex items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 shadow-lg">
                                            {service.icon}
                                        </div>
                                        <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase group-hover:text-white/70 transition-colors">
                                            {service.label}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4 font-[family-name:--font-outfit]">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 leading-relaxed text-lg font-light">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/30 group-hover:text-white transition-colors duration-300">
                                    <span>EXPLORE</span>
                                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
