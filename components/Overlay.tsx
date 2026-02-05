'use client';

import { MotionValue, useTransform, motion } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {

    // -- Hero Section: 0% - 15% --
    const opacityHero = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
    const yHero = useTransform(scrollYProgress, [0, 0.15], [0, -50]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);

    // -- Services Sequence: 20% - 90% --
    // We stagger them so they appear one by one.

    // 1. Corporate Events (20% - 32%)
    const op1 = useTransform(scrollYProgress, [0.18, 0.22, 0.28, 0.32], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.18, 0.32], [50, -50]);

    // 2. Luxury Weddings (34% - 46%)
    const op2 = useTransform(scrollYProgress, [0.34, 0.38, 0.42, 0.46], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.34, 0.46], [50, -50]);

    // 3. DJ Parties & Nightlife (48% - 60%)
    const op3 = useTransform(scrollYProgress, [0.48, 0.52, 0.56, 0.60], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.48, 0.60], [50, -50]);

    // 4. School & College Events (62% - 74%)
    const op4 = useTransform(scrollYProgress, [0.62, 0.66, 0.70, 0.74], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.62, 0.74], [50, -50]);

    // 5. Private & Celebrity Events (76% - 88%)
    const op5 = useTransform(scrollYProgress, [0.76, 0.80, 0.84, 0.88], [0, 1, 1, 0]);
    const y5 = useTransform(scrollYProgress, [0.76, 0.88], [50, -50]);


    return (
        <div className="absolute inset-0 pointer-events-none z-10 text-white font-sans">

            {/* 1. Hero Container - Center */}
            <motion.div
                style={{ opacity: opacityHero, y: yHero, scale: scaleHero }}
                className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
                <h2 className="text-xl md:text-2xl font-bold tracking-[0.2em] text-amber-500 uppercase mb-4 drop-shadow-lg">
                    Founder & CEO — My Team Eventz
                </h2>
                <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-2xl">
                    DJ LINGA
                </h1>
                <p className="text-lg md:text-xl font-light text-gray-300 tracking-wide max-w-lg">
                    Premium DJ & Event Management Company
                </p>
            </motion.div>


            {/* 2. Services Layers - Absolute Positioning for perfect overlap */}

            {/* Service 1 */}
            <motion.div style={{ opacity: op1, y: y1 }} className="absolute inset-0 flex items-center justify-center p-12">
                <h2 className="text-5xl md:text-7xl font-bold text-center leading-tight">
                    Corporate <span className="text-blue-500">Events</span>
                </h2>
            </motion.div>

            {/* Service 2 */}
            <motion.div style={{ opacity: op2, y: y2 }} className="absolute inset-0 flex items-center justify-center p-12">
                <h2 className="text-5xl md:text-7xl font-bold text-center leading-tight">
                    Luxury <span className="text-purple-500">Weddings</span>
                </h2>
            </motion.div>

            {/* Service 3 */}
            <motion.div style={{ opacity: op3, y: y3 }} className="absolute inset-0 flex items-center justify-center p-12">
                <h2 className="text-5xl md:text-7xl font-bold text-center leading-tight">
                    DJ Parties & <br /><span className="text-rose-500">Nightlife</span>
                </h2>
            </motion.div>

            {/* Service 4 */}
            <motion.div style={{ opacity: op4, y: y4 }} className="absolute inset-0 flex items-center justify-center p-12">
                <h2 className="text-5xl md:text-7xl font-bold text-center leading-tight">
                    School & <br /><span className="text-yellow-400">College Events</span>
                </h2>
            </motion.div>

            {/* Service 5 */}
            <motion.div style={{ opacity: op5, y: y5 }} className="absolute inset-0 flex items-center justify-center p-12">
                <h2 className="text-5xl md:text-7xl font-bold text-center leading-tight">
                    Private & <br /><span className="text-emerald-400">Celebrity Events</span>
                </h2>
            </motion.div>

        </div>
    );
}
