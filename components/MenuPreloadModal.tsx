'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const MENU_IMAGES = [
    {
        src: '/new-menu/1.jpg',
        caption: 'Fruit Tea',
        label: 'Hibiscus and Vanilla Earl Grey'
    },
    {
        src: '/new-menu/2.jpg',
        caption: 'Ube Latte',
        label: 'Creamy Purple Yam Delight'
    },
    {
        src: '/new-menu/3.jpg',
        caption: 'Pistachio Latte',
        label: 'Rich & Nutty Perfection'
    },
    {
        src: '/new-menu/4.jpg',
        caption: 'Cold Brews',
        label: 'Sea Salt Latte and Tiramisu'
    },
];

export default function MenuPreloadModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // Show modal after a short delay on every page load
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Autoplay carousel
    useEffect(() => {
        if (!isOpen) return;

        const autoplayInterval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % MENU_IMAGES.length);
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(autoplayInterval);
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % MENU_IMAGES.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + MENU_IMAGES.length) % MENU_IMAGES.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            {/* Modal Container */}
            <div className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                    aria-label="Close modal"
                >
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Carousel */}
                <div className="relative">
                    {/* Images */}
                    <div className="relative aspect-[16/10] md:aspect-[16/9] bg-gray-100">
                        {MENU_IMAGES.map((item, index) => (
                            <div
                                key={item.src}
                                className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.caption}
                                    fill
                                    className="object-contain"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Caption Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-1 font-[family-name:var(--font-bebas)] tracking-wide">
                            {MENU_IMAGES[currentIndex].caption}
                        </h3>
                        <p className="text-sm md:text-base opacity-90">
                            {MENU_IMAGES[currentIndex].label}
                        </p>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex items-center justify-center gap-2 py-4 bg-white">
                    {MENU_IMAGES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`h-2 rounded-full transition-all ${index === currentIndex
                                ? 'w-8 bg-primary'
                                : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Footer */}
                <div className="bg-primary/5 px-6 py-4 text-center border-t border-gray-200">
                    <button
                        onClick={handleClose}
                        className="bg-accent hover:bg-primary text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                    >
                        View Full Menu
                    </button>
                </div>
            </div>
        </div>
    );
}
