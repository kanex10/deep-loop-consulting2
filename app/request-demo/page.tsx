"use client";
"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RequestDemo() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        businessType: ""
    });
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch("https://n8n.srv1171127.hstgr.cloud/webhook/bd54eb96-c7bc-44ec-af63-31ac24713f7d", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            setIsSubmitted(true);
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                businessType: ""
            });
        } catch (error) {
            console.error("Webhook error:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen w-full bg-[#050505] text-slate-300 font-sans selection:bg-purple-500/30 overflow-x-hidden relative flex flex-col items-center justify-center py-20 px-6">

            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050505] to-[#050505] pointer-events-none" />

            {/* Back Link */}
            <div className="absolute top-8 left-8 z-50">
                <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium">
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            <div className="relative z-10 w-full max-w-2xl">
                {isSubmitted ? (
                    <div className="text-center animate-in fade-in zoom-in-95 duration-500">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M20 6 9 17l-5-5" /></svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Successfully Submitted</h1>
                        <p className="text-lg text-slate-400 max-w-md mx-auto">
                            Thank you for your interest. We have received your request and will be in touch shortly to schedule your personalized walkthrough.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-4">Request a Demo</h1>
                            <p className="text-lg text-slate-400">Tell us about your needs and we'll schedule a personalized walkthrough.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-md shadow-2xl space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-slate-300">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-slate-300">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Work Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                    placeholder="jane@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="businessType" className="text-sm font-medium text-slate-300">Business Type</label>
                                <select
                                    id="businessType"
                                    required
                                    value={formData.businessType}
                                    onChange={handleChange}
                                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none"
                                >
                                    <option value="" disabled>Select your business type</option>
                                    <option value="enterprise">Enterprise</option>
                                    <option value="startup">Startup / Scaleup</option>
                                    <option value="agency">Agency / Consultancy</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-white text-black font-bold text-lg py-4 rounded-full hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4"
                            >
                                {isSubmitting ? "Submitting..." : "Submit Request"}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </main>
    );
}
