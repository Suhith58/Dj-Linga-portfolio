'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Neon Nexus",
        category: "Web Application",
        description: "A futuristic dashboard for managing IoT devices in smart cities.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Velvet Void",
        category: "E-commerce",
        description: "Luxury fashion brand with immersive 3D product previews.",
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Quantum Drift",
        category: "Experimental",
        description: "Generative art platform powered by WebGL and noise algorithms.",
        color: "from-emerald-500 to-teal-500"
    },
    {
        title: "Aether Lens",
        category: "Photography",
        description: "AI-enhanced photo editing suite built for professionals.",
        color: "from-orange-500 to-red-500"
    }
];

export default function Projects() {
    return (
        <section className="min-h-screen w-full bg-[#121212] py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight text-center md:text-left"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 transition-colors duration-500"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                            <div className="h-64 sm:h-80 w-full bg-gradient-to-br from-white/5 to-white/0 relative overflow-hidden">
                                {/* Abstract visual */}
                                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} opacity-20 blur-3xl transform scale-150 translate-y-12 translate-x-12 group-hover:translate-y-8 group-hover:translate-x-8 transition-transform duration-700 ease-out`} />
                            </div>

                            <div className="p-8 relative">
                                <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-2">{project.category}</p>
                                <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-white/70 leading-relaxed">{project.description}</p>

                                <div className="mt-8 flex items-center gap-2 text-white font-medium opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    <span>View Case Study</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
