'use client';

import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section className="relative w-full bg-[#0a0a0a] py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Ready to Create an <span className="text-amber-500">Unforgettable</span> Event?
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Tell us about your vision. We handle the sound, lights, and energy — you enjoy the moment.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-6 bg-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm border border-white/10"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                            />
                        </div>

                        {/* Phone */}
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+1 (555) 000-0000"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Event Type */}
                        <div className="space-y-2">
                            <label htmlFor="eventType" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Event Type</label>
                            <div className="relative">
                                <select
                                    id="eventType"
                                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white appearance-none focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all cursor-pointer"
                                >
                                    <option value="" disabled selected>Select an event type</option>
                                    <option value="corporate" className="bg-[#121212]">Corporate Event</option>
                                    <option value="wedding" className="bg-[#121212]">Luxury Wedding</option>
                                    <option value="party" className="bg-[#121212]">DJ Party / Nightlife</option>
                                    <option value="school" className="bg-[#121212]">School / College Event</option>
                                    <option value="private" className="bg-[#121212]">Private / VIP Event</option>
                                    <option value="other" className="bg-[#121212]">Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Event Date */}
                        <div className="space-y-2">
                            <label htmlFor="date" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Event Date</label>
                            <input
                                type="date"
                                id="date"
                                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all [color-scheme:dark]"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-400 uppercase tracking-wider">Message / Details</label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Tell us more about your venue, expected guests, or vibe..."
                            className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg py-5 rounded-xl transition-colors duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                        >
                            Plan My Event
                        </button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
