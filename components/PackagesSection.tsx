'use client';

import { PackageItem } from '@/lib/mockData';
import { useState } from 'react';

type PackagesSectionProps = {
    packages: PackageItem[];
};

export default function PackagesSection({ packages }: PackagesSectionProps) {
    const [activeTab, setActiveTab] = useState<'Coffee Bar' | 'Event'>('Coffee Bar');

    const filteredPackages = packages.filter(p => p.type === activeTab);

    return (
        <section id="packages" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">Our Packages</h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect package for your special occasion
                    </p>
                </div>

                {/* Tab Filters */}
                <div className="flex justify-center mb-12 gap-4">
                    <button
                        onClick={() => setActiveTab('Coffee Bar')}
                        className={`
              px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
              ${activeTab === 'Coffee Bar'
                                ? 'bg-primary text-white shadow-lg'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }
            `}
                    >
                        <span>☕</span>
                        <span>Coffee Bar Package</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('Event')}
                        className={`
              px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
              ${activeTab === 'Event'
                                ? 'bg-primary text-white shadow-lg'
                                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                            }
            `}
                    >
                        <span>🎉</span>
                        <span>Event Package</span>
                    </button>
                </div>

                {/* Coffee Bar Packages */}
                {activeTab === 'Coffee Bar' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Intimate Package */}
                        <div className="bg-secondary/20 rounded-2xl p-8 border-2 border-secondary hover:border-primary transition-all duration-300 hover:shadow-xl">
                            <h3 className="text-2xl font-bold text-primary mb-2 text-center">Intimate</h3>
                            <p className="text-accent font-semibold text-center mb-4">50 pax</p>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-dark">₱6,500</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>25 Hot Barako</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>25 Cold Brew</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>3 hours of service</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Professional barista service</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Premium coffee beans</span>
                                </li>
                            </ul>
                            <button className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-dark transition-colors">
                                Book Now
                            </button>
                        </div>

                        {/* Premium Package - MOST POPULAR */}
                        <div className="bg-secondary/20 rounded-2xl p-8 border-2 border-accent hover:border-primary transition-all duration-300 hover:shadow-xl relative transform md:scale-105">
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                                    MOST POPULAR
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-2 text-center">Classic</h3>
                            <p className="text-accent font-semibold text-center mb-4">75 pax</p>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-dark">₱11,500</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>35 Hot Barako</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>40 Cold Brew</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>3 hours of service</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Professional barista service</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Premium coffee beans</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Beautiful display presentation</span>
                                </li>
                            </ul>
                            <button className="w-full bg-accent text-white py-3 rounded-full font-semibold hover:bg-primary transition-colors">
                                Book Now
                            </button>
                        </div>

                        {/* Grand Package */}
                        <div className="bg-secondary/20 rounded-2xl p-8 border-2 border-secondary hover:border-primary transition-all duration-300 hover:shadow-xl">
                            <h3 className="text-2xl font-bold text-primary mb-2 text-center">Plus</h3>
                            <p className="text-accent font-semibold text-center mb-4">100 pax</p>
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold text-dark">₱15,500</span>
                            </div>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>50 Hot Barako</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>50 Cold Brew</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>4 hours of service</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Professional barista service</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Premium coffee beans</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-gray-700">
                                    <span className="text-primary mt-1">✓</span>
                                    <span>Beautiful display presentation</span>
                                </li>
                            </ul>
                            <button className="w-full bg-primary text-white py-3 rounded-full font-semibold hover:bg-dark transition-colors">
                                Book Now
                            </button>
                        </div>
                    </div>
                )}

                {/* Event Packages */}
                {activeTab === 'Event' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {filteredPackages.map((pkg, index) => (
                            <div
                                key={pkg.id}
                                className={`bg-white rounded-lg overflow-hidden shadow-md group border-t-4 ${index === 1 ? 'border-accent' : 'border-primary'
                                    }`}
                            >
                                <div className="p-8 text-center">
                                    <h4 className="text-2xl font-bold text-dark mb-2">{pkg.name}</h4>
                                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                                    {pkg.price && (
                                        <div className="text-3xl font-bold text-accent mb-6">
                                            ₱{pkg.price.toLocaleString()}
                                        </div>
                                    )}
                                    <button className="bg-dark text-white py-3 px-8 rounded-full hover:bg-accent transition-colors">
                                        Book This Package
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
