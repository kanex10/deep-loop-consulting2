"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle, ArrowRight } from "lucide-react";

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

export default function LiveDemo() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setStatus("loading");
        try {
            // Simulate webhook call
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log("Webhook triggered with:", data);
            setStatus("success");
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section id="demo" className="py-20 px-6">
            <div className="max-w-xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Automation Demo</h2>
                    <p className="text-gray-400">
                        Enter your email to trigger a live webhook event.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
                >
                    {status === "success" ? (
                        <div className="text-center py-8">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <CheckCircle size={32} />
                            </motion.div>
                            <h3 className="text-xl font-bold mb-2">Webhook Triggered!</h3>
                            <p className="text-gray-400 mb-6">Check your inbox for the automated response.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="text-blue-400 hover:text-blue-300 font-medium"
                            >
                                Try again
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="you@company.com"
                                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-600 transition-all"
                                />
                                {errors.email && (
                                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Trigger Webhook
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
