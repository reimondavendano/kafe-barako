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
            <div className="relative w-full max-w-2xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white rounded-full transition-all"
                    aria-label="Close modal"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Carousel */}
                <div className="relative">
                    {/* Images - Using aspect-square to match expected social media image format (1:1) to prevent cropping or whitespace */}
                    <div className="relative aspect-square w-full bg-white">
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
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white text-gray-800 rounded-full transition-all"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white text-gray-800 rounded-full transition-all"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Button Inside Carousel */}
                    <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
                        <button
                            onClick={handleClose}
                            className="bg-accent hover:bg-primary text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 shadow-lg border-2 border-white/50 backdrop-blur-sm"
                        >
                            View Full Menu
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
                        {MENU_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`h-1.5 rounded-full transition-all shadow-sm ${index === currentIndex
                                    ? 'w-6 bg-white'
                                    : 'w-1.5 bg-white/50 hover:bg-white/80'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
