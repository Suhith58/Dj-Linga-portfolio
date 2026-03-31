'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        title: "Corporate Events",
        slug: "corporate-events",
        description: "Professional sound & lighting setups for conferences, product launches, and galas.",
        color: "from-blue-900/80 to-slate-900/80",
        image: "/service-corporate.png",
        features: [
            "Professional DJ setup",
            "Conference sound systems",
            "Stage & lighting setup",
            "Background music & hosting support"
        ]
    },
    {
        title: "Luxury Weddings",
        slug: "luxury-weddings",
        description: "Elegant entertainment solutions for your special day. Bespoke playlists and ambiance.",
        color: "from-purple-900/80 to-pink-900/80",
        image: "/service-wedding.png",
        features: [
            "Wedding DJ & Sangeet setup",
            "Premium sound systems",
            "Stage lighting & ambiance design",
            "Artist & performer coordination"
        ]
    },
    {
        title: "DJ Parties & Nightlife",
        slug: "dj-parties-nightlife",
        description: "High-energy sets that keep the dance floor moving all night long.",
        color: "from-red-900/80 to-orange-900/80",
        image: "/service-dj.png",
        features: [
            "High-energy DJ performance",
            "Club-style lighting & effects",
            "Crowd engagement",
            "Live mixing experience"
        ]
    },
    {
        title: "School & College Events",
        slug: "school-college-events",
        description: "Trend-setting tracks and hype for proms, fests, and campus parties.",
        color: "from-yellow-900/80 to-amber-900/80",
        image: "/service-school.png",
        features: [
            "DJ for cultural events & fests",
            "Crowd interaction & engagement",
            "Sound & lighting setup",
            "Student event coordination"
        ]
    },
    {
        title: "Private & Celebrity Events",
        slug: "private-celebrity-events",
        description: "Exclusive, discreet, and premium entertainment for VIP gatherings.",
        color: "from-emerald-900/80 to-teal-900/80",
        image: "/service-vip.png",
        features: [
            "Exclusive DJ experience",
            "Premium sound & lighting",
            "Customized music sets",
            "High-end event atmosphere"
        ]
    }
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

    return (
        <section className="relative z-10 w-full bg-[#121212] py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white bg-clip-text mb-4 text-transparent bg-gradient-to-r from-gray-100 to-gray-500">
                        Our Services
                    </h2>
                    <div className="h-1 w-24 bg-amber-500 mx-auto md:mx-0 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
                    {services.map((service, index) => (
                        <button
                            onClick={() => setSelectedService(service)}
                            key={service.slug}
                            className={`relative group overflow-hidden rounded-3xl ${index === 0 || index === 4 ? 'md:col-span-2' : ''} text-left cursor-pointer outline-none focus:outline-none focus:ring-2 focus:ring-amber-500/50`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="w-full h-full"
                            >
                                {/* Background Image */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                {/* Gradient Overlay for Readability */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80 mix-blend-multiply transition-opacity duration-500`} />

                                {/* Darker Glass Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                        <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors drop-shadow-md">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/80 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                                            {service.description}
                                        </p>

                                        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            <span>Explore Service</span>
                                            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Modal Overlay and Popup */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 overflow-hidden overscroll-none">
                        {/* Dim Backdrop */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 w-full h-full bg-black/80 backdrop-blur-sm cursor-default outline-none"
                            aria-label="Close modal"
                        />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] z-10"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 z-20 p-2.5 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full text-white/70 hover:text-white transition-all duration-300 group outline-none focus:ring-2 focus:ring-amber-500/50"
                                aria-label="Close"
                            >
                                <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Header Image Area */}
                            <div className="relative h-48 md:h-64 flex-shrink-0">
                                <Image
                                    src={selectedService.image}
                                    alt={selectedService.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${selectedService.color} opacity-80 mix-blend-multiply`} />
                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                                    <h3 className="text-3xl md:text-4xl font-black text-white drop-shadow-lg">
                                        {selectedService.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 md:p-8 overflow-y-auto">
                                <h4 className="text-amber-500 font-bold tracking-wider uppercase text-sm mb-5">What We Do</h4>
                                <ul className="space-y-4 mb-8">
                                    {selectedService.features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2 + (i * 0.05) }}
                                            className="flex items-start text-gray-200"
                                        >
                                            <div className="mt-1 mr-4 bg-amber-500/20 p-1 rounded-full text-amber-500 flex-shrink-0">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-lg">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>

                                {/* CTA Section */}
                                <div className="mt-10 pt-8 border-t border-white/10 text-center">
                                    <p className="text-white font-bold text-2xl mb-2">Want to see our real events?</p>
                                    <p className="text-gray-400 mb-8">Click below to view our live event works on Instagram</p>
                                    <a
                                        href="https://www.instagram.com/my_team_eventz_management?igsh=eWRiNW90eW5tOGZr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:-translate-y-1"
                                    >
                                        <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        View on Instagram
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
