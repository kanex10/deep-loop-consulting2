"use client";
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
            <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    {/* Logo Icon */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <div className="w-5 h-5 bg-[#050505] rounded-full" />
                    </div>
                    <span className="font-bold text-white text-xl tracking-tight">Deep Loop</span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-10 text-base font-medium text-slate-400">
                    <Link href="/services" className="hover:text-white transition-colors">
                        Services
                    </Link>
                    <Link href="#" className="hover:text-white transition-colors">
                        Methodology
                    </Link>
                    <Link href="/about" className="hover:text-white transition-colors">
                        About
                    </Link>
                </div>

                {/* CTA Button */}
                <Link href="/request-demo" className="text-sm font-semibold bg-white text-black px-6 py-2.5 rounded-full hover:bg-slate-200 transition-colors">
                    Request Demo &rarr;
                </Link>
            </div>
        </nav>
    );
}
