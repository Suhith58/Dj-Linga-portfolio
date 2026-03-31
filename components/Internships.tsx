'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const internships = [
    {
        id: 'basic',
        title: 'Basic',
        description: 'Perfect for beginners starting their journey',
        goal: 'Build strong foundations for absolute beginners',
        depth: 'bg-white/5 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
        glowHover: 'group-hover:shadow-[0_0_25px_rgba(59,130,246,0.15)]',
        accent: 'text-blue-400',
        buttonGlow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:border-blue-400/50',
        sections: [
            {
                title: "What You'll Learn",
                items: [
                    "Introduction to DJing (roles, types of DJs, industry overview)",
                    "Equipment basics (DJ controller, mixer, headphones, speakers)",
                    "Understanding music structure (beats, bars, phrases, BPM)",
                    "Beatmatching (manual + sync button use)",
                    "Basic transitions (fade in/out, EQ mixing)",
                    "Intro to DJ software (Rekordbox / Serato basics)",
                    "Playlist creation & track selection basics",
                    "Genre understanding (EDM, Hip-Hop, Bollywood, etc.)"
                ]
            },
            {
                title: "Practical Training",
                items: [
                    "Practice sessions on controllers",
                    "Mix 2–3 songs smoothly",
                    "Record a short 10–15 min mix"
                ]
            }
        ]
    },
    {
        id: 'standard',
        title: 'Standard',
        description: 'For those who want hands-on experience',
        goal: 'Make students confident enough to perform small gigs',
        depth: 'bg-white/10 border-white/20 shadow-[0_5px_25px_rgba(255,255,255,0.05)] hover:shadow-[0_10px_35px_rgba(245,158,11,0.2)]',
        glowHover: 'group-hover:shadow-[0_10px_35px_rgba(245,158,11,0.2)]',
        accent: 'text-amber-400',
        buttonGlow: 'hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] hover:border-amber-400/50',
        sections: [
            {
                title: "What You'll Learn",
                items: [
                    "Advanced transitions (cutting, looping, filters, FX)",
                    "Harmonic mixing (using Camelot wheel)",
                    "Cue points & hot cues",
                    "Looping techniques",
                    "Live set structuring (energy flow)",
                    "Crowd reading basics",
                    "Intro to scratching (basic baby scratch)",
                    "Microphone handling (basic hosting skills)"
                ]
            },
            {
                title: "Practical Training",
                items: [
                    "Create a 30–45 min DJ set",
                    "Perform in front of a small audience / mock gig",
                    "Work on genre blending",
                    "Practice with real club-style setups"
                ]
            },
            {
                title: "Bonus",
                items: [
                    "Intro to branding (DJ name, identity)",
                    "Social media basics (posting mixes)"
                ]
            }
        ]
    },
    {
        id: 'pro',
        title: 'Pro',
        description: 'Advanced training with real event exposure',
        goal: 'Prepare students for real gigs & DJ careers',
        depth: 'bg-white/15 border-white/30 shadow-[0_10px_35px_rgba(255,255,255,0.08)] hover:shadow-[0_15px_50px_rgba(168,85,247,0.25)]',
        glowHover: 'group-hover:shadow-[0_15px_50px_rgba(168,85,247,0.25)]',
        accent: 'text-purple-400',
        buttonGlow: 'hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:border-purple-400/50',
        sections: [
            {
                title: "What You'll Learn",
                items: [
                    "Advanced scratching techniques",
                    "Mashups & live remixing",
                    "Advanced FX chaining",
                    "Set storytelling & energy control (pro-level)",
                    "Multi-genre mixing mastery",
                    "Working with CDJs (club standard gear)",
                    "Technical setup for live events",
                    "Sound system & audio basics",
                    "Music library management (professional level)"
                ]
            },
            {
                title: "Career & Industry",
                items: [
                    "How to get gigs (clubs, weddings, events)",
                    "Networking with promoters",
                    "Pricing & contracts",
                    "Personal branding (logo, content strategy)",
                    "Building a DJ portfolio (mixes, videos)",
                    "Intro to music production (basic DAW overview)"
                ]
            },
            {
                title: "Practical Training",
                items: [
                    "Perform a live gig / showcase event",
                    "Record a professional DJ mix (1 hour)",
                    "Build a portfolio (SoundCloud/Instagram)"
                ]
            }
        ]
    }
];

export default function Internships() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="relative w-full bg-[#121212] py-24 px-6 md:px-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        We Are Now Offering <span className="text-amber-500">Internships</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Gain real-world experience in DJing, event production, and management with My Team Eventz.
                    </p>
                    <div className="h-1 w-24 bg-amber-500 mx-auto mt-8 rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {internships.map((internship, index) => (
                        <motion.div
                            key={internship.id}
                            layout
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group overflow-hidden rounded-3xl backdrop-blur-md border ${internship.depth} ${internship.glowHover} transition-all duration-500 transform hover:-translate-y-2`}
                        >
                            {/* Inner ambient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <motion.div layout className="relative z-10 p-8 flex flex-col h-full">
                                <motion.h3 layout className={`text-3xl font-bold mb-3 ${internship.accent}`}>
                                    {internship.title}
                                </motion.h3>
                                <motion.p layout className="text-gray-300 text-lg mb-6 flex-grow">
                                    {internship.description}
                                </motion.p>

                                <AnimatePresence>
                                    {expandedId === internship.id && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 mb-8 space-y-6 max-h-[50vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                                <div className="mb-2">
                                                    <h4 className={`text-xs tracking-wider uppercase font-bold mb-1 ${internship.accent}`}>Goal</h4>
                                                    <p className="text-gray-300 text-sm">{internship.goal}</p>
                                                </div>

                                                {internship.sections.map((section, sidx) => (
                                                    <div key={sidx} className="space-y-3">
                                                        <h4 className={`text-xs tracking-wider uppercase font-bold border-b border-white/10 pb-1 ${internship.accent}`}>
                                                            {section.title}
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {section.items.map((item, i) => (
                                                                <motion.li
                                                                    key={i}
                                                                    initial={{ opacity: 0, x: -10 }}
                                                                    animate={{ opacity: 1, x: 0 }}
                                                                    transition={{ delay: 0.1 + (i * 0.05) }}
                                                                    className="flex items-start text-gray-300 text-sm"
                                                                >
                                                                    <svg className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${internship.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                    <span>{item}</span>
                                                                </motion.li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            <a
                                                href="tel:+919787258725"
                                                className={`block w-full text-center py-4 rounded-xl font-bold text-white bg-white/5 border border-white/10 transition-all duration-300 ${internship.buttonGlow}`}
                                            >
                                                Call Now to Join
                                            </a>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <motion.button
                                    layout
                                    onClick={() => setExpandedId(expandedId === internship.id ? null : internship.id)}
                                    className="mt-6 flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer w-max"
                                >
                                    <span>{expandedId === internship.id ? 'Show Less' : 'View Details'}</span>
                                    <motion.svg
                                        animate={{ rotate: expandedId === internship.id ? 180 : 0 }}
                                        className="w-4 h-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </motion.svg>
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
