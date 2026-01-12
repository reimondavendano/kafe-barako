'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type HeroProps = {
    branch: 'malolos' | 'talisay';
};

const CAROUSEL_IMAGES_MALOLOS = [
    '/carousel/1.jpg',
    '/carousel/2.jpg',
    '/carousel/3.jpg',
    '/carousel/4.jpg',
    '/carousel/5.jpg',
    '/carousel/6.jpg',
    '/carousel/7.jpg',
];

const CAROUSEL_IMAGES_TALISAY = [
    '/carousel-talisay/1.jpg',
    '/carousel-talisay/2.jpg',
    '/carousel-talisay/3.jpg',
    '/carousel-talisay/4.jpg',
    '/carousel-talisay/5.jpg',
    '/carousel-talisay/6.jpg',
    '/carousel-talisay/7.jpg',
];

export default function Hero({ branch }: HeroProps) {
    const branchName = branch === 'malolos' ? 'Malolos' : 'Talisay';
    const carouselImages = branch === 'malolos' ? CAROUSEL_IMAGES_MALOLOS : CAROUSEL_IMAGES_TALISAY;
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [carouselImages.length]);

    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
            {/* Carousel Background */}
            <div className="absolute inset-0 z-0">
                {carouselImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Kafe Barako ${branchName} Ambiance ${index + 1}`}
                            fill
                            className="object-cover brightness-50"
                            priority={index === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center h-full">
                <div className="animate-fade-in-up">
                    {/* KAFE */}
                    <h1 className="text-6xl md:text-8xl font-medium leading-none font-[family-name:var(--font-bebas)] tracking-wider mb-2">
                        KAFE
                    </h1>

                    {/* BARAKO with Icons */}
                    <div className="flex items-center justify-center gap-3 text-6xl md:text-8xl font-black leading-none font-[family-name:var(--font-bebas)] tracking-widest mb-6">
                        <span>B</span>
                        {/* Volcano Icon replacing 'A' */}
                        <span className="relative w-[0.9em] h-[0.9em] flex items-center justify-center -mt-2">
                            <Image
                                src="/assets/A.png"
                                alt="A"
                                fill
                                className="object-contain"
                                priority
                            />
                        </span>
                        <span>R</span>
                        <span>A</span>
                        <span>K</span>
                        {/* Coffee Bean Icon replacing 'O' */}
                        <span className="relative w-[0.9em] h-[0.9em] flex items-center justify-center -mt-1">
                            <Image
                                src="/assets/O.png"
                                alt="O"
                                fill
                                className="object-contain"
                                priority
                            />
                        </span>
                    </div>

                    {/* Est. 2020 */}
                    <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up delay-100">
                        <div className="w-12 md:w-24 h-0.5 bg-white/80"></div>
                        <span className="text-xl md:text-2xl font-medium tracking-widest uppercase">Est. 2020</span>
                        <div className="w-12 md:w-24 h-0.5 bg-white/80"></div>
                    </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold mb-8 text-secondary-light animate-fade-in-up delay-200 hidden">
                    {branchName} Branch
                </h2>

                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light tracking-wide animate-fade-in-up delay-300">
                    Coffee on the go
                </p>

                <Link
                    href="#menu"
                    className="bg-accent hover:bg-primary text-white py-4 px-10 rounded-full text-lg font-bold tracking-wide transition-all transform hover:scale-105 shadow-xl animate-fade-in-up delay-400 inline-block border-2 border-transparent hover:border-white/20"
                >
                    VIEW MENU
                </Link>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
                {carouselImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
