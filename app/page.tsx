"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import ServicesGrid from "@/components/ServicesGrid";
import FutureGrid from "@/components/FutureGrid";
import Navbar from "@/components/Navbar";

// --- COMPONENTS (Internal for simplicity) ---

// --- COMPONENTS (Internal for simplicity) ---
// (Spotlight removed)

// 2. The Main Page
export default function DeepLoopHome() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isStatsHovered, setIsStatsHovered] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWebhookTrigger = async () => {
    if (!email) {
      alert("Please enter your email first.");
      return;
    }

    const emailToSend = email;
    setEmail(""); // Clear immediately as requested
    setIsSubmitting(true);

    try {
      // Using no-cors mode to ensure the request is sent even if the server doesn't support CORS.
      // Note: We won't be able to read the response status in this mode.
      await fetch("https://n8n.srv1171127.hstgr.cloud/webhook/80851036-e488-4c1d-b792-cf5ba289a857", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailToSend }),
      });

      alert("Workflow triggered! Check your email.");
    } catch (error) {
      console.error("Webhook error:", error);
      alert("An error occurred. Please try again.");
      setEmail(emailToSend); // Restore email on error
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    // Calculate movement relative to the center of the screen
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - width / 2) / 25; // Division controls sensitivity (higher = slower)
    const y = (clientY - height / 2) / 25;
    setMousePosition({ x, y });
    setCursorPosition({ x: clientX, y: clientY });
  };

  return (
    // MASTER CONTAINER: Rich Black Background (#050505) + White Text
    <main
      onMouseMove={handleMouseMove}
      className="min-h-screen w-full bg-[#050505] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden relative flex flex-col"
    >

      {/* GLOBAL STYLES FOR ANIMATION */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spotlight {
          0% { opacity: 0; transform: translate(-72%, -62%) scale(0.5); }
          100% { opacity: 1; transform: translate(-50%,-40%) scale(1); }
        }
        @keyframes move-grid {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0) scale(1.5); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(50px) scale(1.5); }
        }
        .animate-spotlight {
          animation: spotlight 2s ease .75s 1 forwards;
        }
        .animate-grid-flow {
          animation: move-grid 20s linear infinite;
        }
      `}} />

      {/* --- NAVBAR --- */}
      <Navbar />

      {/* --- HERO SECTION --- */}
      <div className="relative flex-grow flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden">

        {/* Future Grid Background */}
        <FutureGrid />

        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

        {/* Moving Grid Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
          <div
            className="w-[200%] h-[200%] -ml-[50%] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] animate-grid-flow origin-bottom"
          />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 text-center flex flex-col items-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-purple-500 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide text-white/80 uppercase">
              Deep Loop Consulting
            </span>
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/40 pb-6 max-w-6xl font-[family-name:--font-outfit]">
            Intelligent Automation <br />
            for the Future Enterprise.
          </h1>

          {/* Subheadline */}
          <p className="mt-8 text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We architect bespoke AI agents and autonomous workflows that streamline complex operations. Eliminate bottlenecks and scale your business logic with Deep Loop.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Secondary Button (Glass) - Now the primary call to action */}
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 text-lg font-medium text-white transition-all hover:bg-white/10 hover:scale-105 duration-300 backdrop-blur-sm"
            >
              Book Consultation
            </button>
          </div>

          {/* Tech Stack / Social Proof REMOVED */}
          <div className="mt-24 w-full h-10"></div>
        </div>
      </div>

      {/* --- SERVICES GRID --- */}
      <ServicesGrid />

      {/* --- BOOKING MODAL --- */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/10 text-white rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
            <div className="w-full h-[600px] bg-white">
              <iframe
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3SgjGBD3Xg1fIzScXTvME0Q6zUERzuTzVp3bIJ0gJfUoLpHqgqQJQ_E-MpcAIP34gal0wLEpLy?gv=true"
                style={{ border: 0 }}
                width="100%"
                height="600"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* --- STATISTICS SECTION --- */}
      <section
        className="py-32 relative"
        onMouseEnter={() => setIsStatsHovered(true)}
        onMouseLeave={() => setIsStatsHovered(false)}
      >
        {/* Cursor Glow Effect */}
        <div
          className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none transition-opacity duration-500 z-0 mix-blend-screen"
          style={{
            transform: `translate(${cursorPosition.x - 250}px, ${cursorPosition.y - 250}px)`,
            opacity: isStatsHovered ? 1 : 0
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Impact of Intelligent Automation</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Data-driven results that transform business operations and drive exponential growth.
            </p>
          </div>

          <div className="space-y-32">
            {/* Item 1: ROI (Text Left, Image Right) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
                  Return on Investment
                </div>
                <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                  3.7x
                </h3>
                <h4 className="text-2xl font-semibold text-white">Average ROI</h4>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Businesses implementing AI automation see an average return of $3.70 for every dollar invested. Top performers achieve up to 10x ROI by strategically deploying autonomous agents.
                </p>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <img
                    src="/assets/stat_roi.png"
                    alt="ROI Graph"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Item 2: Efficiency (Image Left, Text Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
              <div className="flex-1 space-y-6 text-left md:text-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium ml-auto">
                  Operational Efficiency
                </div>
                <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-slate-500">
                  40%
                </h3>
                <h4 className="text-2xl font-semibold text-white">Efficiency Gain</h4>
                <p className="text-lg text-slate-400 leading-relaxed">
                  AI implementation reduces operational costs by 20-30% while boosting overall efficiency by over 40%. Streamline workflows and eliminate bottlenecks with intelligent process automation.
                </p>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <img
                    src="/assets/stat_efficiency.png"
                    alt="Efficiency Flow"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Item 3: Productivity (Text Left, Image Right) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="flex-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                  Productivity
                </div>
                <h3 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
                  70%
                </h3>
                <h4 className="text-2xl font-semibold text-white">Automation Potential</h4>
                <p className="text-lg text-slate-400 leading-relaxed">
                  AI can automate up to 70% of routine back-office tasks, freeing your team to focus on high-value strategic initiatives. Eliminate human error and accelerate delivery times.
                </p>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
                  <img
                    src="/assets/stat_productivity.png"
                    alt="Productivity Brain"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AUTOMATION DEMO / WEBHOOK SECTION --- */}
      <section className="relative py-32 border-t border-white/5 bg-[#0A0A0A]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">See the Automation Live</h2>
          <p className="text-xl text-slate-400 mb-10">Enter your email to trigger a live webhook to our consulting grid.</p>

          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-lg"
            />
            <button
              onClick={handleWebhookTrigger}
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_20px_-5px_rgba(147,51,234,0.5)] text-lg"
            >
              {isSubmitting ? "Triggering..." : "Trigger Workflow"}
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}