'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const services = [
    {
        title: "Corporate Events",
        slug: "corporate-events",
        description: "Professional sound & lighting setups for conferences, product launches, and galas.",
        color: "from-blue-900/80 to-slate-900/80",
        image: "/service-corporate.png"
    },
    {
        title: "Luxury Weddings",
        slug: "luxury-weddings",
        description: "Elegant entertainment solutions for your special day. Bespoke playlists and ambiance.",
        color: "from-purple-900/80 to-pink-900/80",
        image: "/service-wedding.png"
    },
    {
        title: "DJ Parties & Nightlife",
        slug: "dj-parties-nightlife",
        description: "High-energy sets that keep the dance floor moving all night long.",
        color: "from-red-900/80 to-orange-900/80",
        image: "/service-dj.png"
    },
    {
        title: "School & College Events",
        slug: "school-college-events",
        description: "Trend-setting tracks and hype for proms, fests, and campus parties.",
        color: "from-yellow-900/80 to-amber-900/80",
        image: "/service-school.png"
    },
    {
        title: "Private & Celebrity Events",
        slug: "private-celebrity-events",
        description: "Exclusive, discreet, and premium entertainment for VIP gatherings.",
        color: "from-emerald-900/80 to-teal-900/80",
        image: "/service-vip.png"
    }
];

export default function Services() {
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
                        <Link
                            href={`/services/${service.slug}`}
                            key={service.slug}
                            className={`relative group overflow-hidden rounded-3xl ${index === 0 || index === 4 ? 'md:col-span-2' : ''}`}
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
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
