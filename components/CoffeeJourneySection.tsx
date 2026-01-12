'use client';

import Image from 'next/image';

type CoffeeJourneySectionProps = {
    branch?: 'malolos' | 'talisay';
};

export default function CoffeeJourneySection({ branch = 'malolos' }: CoffeeJourneySectionProps) {
    return (
        <section className="py-20 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">
                        {branch === 'talisay' ? 'The Heart of Barako' : 'From Batangas to Your Cup'}
                    </h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {branch === 'talisay'
                            ? "This is where it all began. Located in the heart of Talisay, Batangas, our main branch stands as a testament to the rich heritage of Kapeng Barako. We source, roast, and brew right here, closer to the farm than anywhere else."
                            : "We take pride in our heritage. Starting from our main branch in Talisay, Batangas, we now bring the same tradition, hard work, and passion for the famous Kapeng Barako to our new home in Malolos."
                        }
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Step 1: Sourcing */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-primary/10"></div>
                        <div className="mb-6 bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Sourced Locally</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Directly sourced from the highlands of Batangas, home of the Philippines' strong Liberica beans. We support local farmers and ensure fair trade.
                        </p>
                    </div>

                    {/* Step 2: Roasting */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-accent/10"></div>
                        <div className="mb-6 bg-accent/20 w-16 h-16 rounded-full flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Roasted with Care</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Our beans are roasted in small batches to preserve their bold, smoky, and fruity notes, ensuring consistency and freshness in every pack.
                        </p>
                    </div>

                    {/* Step 3: Brewing */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-primary/10"></div>
                        <div className="mb-6 bg-secondary/20 w-16 h-16 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Brewed to Perfection</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Expertly brewed using traditional and modern methods to extract the full potential of the Barako bean. Strong, aromatic, and unforgettable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
