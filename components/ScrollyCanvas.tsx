'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 79; // 0 to 78

export default function ScrollyCanvas() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            // pad with 3 zeros usually, but my script did that. 
            // 0 -> 000.png, 10 -> 010.png
            const src = `/sequence/${String(i).padStart(3, '0')}.png`;
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Draw parameters
    const renderIndex = useRef(0);

    const drawImage = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        const img = images[index];

        if (!canvas || !ctx || !img) return;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Object fit: cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvas.width;
            drawHeight = canvas.width / imgRatio;
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = canvas.height * imgRatio;
            drawHeight = canvas.height;
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame on resize
                if (isLoaded) {
                    drawImage(renderIndex.current);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images]);

    // Sync Scroll to Frame
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;

        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        if (frameIndex !== renderIndex.current) {
            renderIndex.current = frameIndex;
            requestAnimationFrame(() => drawImage(frameIndex));
        }
    });

    // Initial draw once loaded
    useEffect(() => {
        if (isLoaded) {
            drawImage(0);
        }
    }, [isLoaded]);

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative bg-[#121212]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
                <Overlay scrollYProgress={scrollYProgress} />

                {/* Loading State or Fallback can go here */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                        Loading Sequence...
                    </div>
                )}
            </div>
        </div>
    );
}
