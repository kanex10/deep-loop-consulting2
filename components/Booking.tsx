"use client";

import { motion } from "framer-motion";

export default function Booking() {
    return (
        <section id="pricing" className="py-20 px-6 bg-black/50">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Consultation</h2>
                    <p className="text-gray-400 mb-8">
                        Get expert advice on your AI strategy. 30-minute session.
                    </p>

                    <div className="inline-block bg-blue-600/10 border border-blue-500/20 rounded-full px-6 py-2 mb-12">
                        <span className="text-blue-400 font-semibold">$50 / Session</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden p-4 shadow-2xl"
                >
                    {/* Placeholder for Google Calendar Embed */}
                    <div className="aspect-video w-full bg-black/40 rounded-xl flex items-center justify-center border border-white/5">
                        <iframe
                            src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"
                            style={{ border: 0 }}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            className="w-full h-[500px]"
                        ></iframe>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
