'use client';

import Image from 'next/image';
import { PackageItem } from '@/lib/mockData';
import { useState } from 'react';

type PackagesSectionProps = {
    packages: PackageItem[];
};

export default function PackagesSection({ packages }: PackagesSectionProps) {
    // Get unique types from packages
    const packageTypes = Array.from(new Set(packages.map(p => p.type)));
    const [activeTab, setActiveTab] = useState<string>(packageTypes[0] || 'Coffee Bar');

    const filteredPackages = packages.filter(p => p.type === activeTab);

    if (packages.length === 0) return null;

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
                {packageTypes.length > 1 && (
                    <div className="flex flex-wrap justify-center mb-12 gap-4">
                        {packageTypes.map((type) => (
                            <button
                                key={type}
                                onClick={() => setActiveTab(type)}
                                className={`
                  px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                  ${activeTab === type
                                        ? 'bg-primary text-white shadow-lg'
                                        : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                    }
                `}
                            >
                                <span>{type === 'Coffee Bar' ? '☕' : type === 'Grazing Table' ? '🧀' : type === 'Kakanin Corner' ? '🥥' : type === 'Sliders Station' ? '🍔' : '🍰'}</span>
                                <span>{type}</span>
                            </button>
                        ))}
                    </div>
                )}

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filteredPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className={`bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl relative flex flex-col
                                ${pkg.isPopular ? 'border-accent transform md:-translate-y-2' : 'border-secondary hover:border-primary'}
                            `}
                        >
                            {/* Background Image Container - Clipped */}
                            <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                                {pkg.image && (
                                    <div className="relative w-full h-full opacity-10">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            {pkg.isPopular && activeTab === 'Coffee Bar' && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                                    <span className="bg-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-primary mb-2 text-center">{pkg.name}</h3>
                                {pkg.pax && (
                                    <p className="text-accent font-bold text-center mb-1 text-lg">{pkg.pax}</p>
                                )}
                                {pkg.description && (
                                    <p className="text-gray-600 text-center text-sm mb-4">{pkg.description}</p>
                                )}
                            </div>

                            <div className="relative z-10 text-center mb-6">
                                <span className="text-4xl font-bold text-dark">
                                    {typeof pkg.price === 'number' ? `₱${pkg.price.toLocaleString()}` : pkg.price}
                                </span>
                            </div>

                            {pkg.note && (
                                <div className="relative z-10 bg-secondary/20 rounded-lg p-3 mb-6 text-center text-sm font-semibold text-primary">
                                    {pkg.note}
                                </div>
                            )}

                            <div className="relative z-10 flex-grow">
                                {pkg.inclusions && pkg.inclusions.length > 0 && (
                                    <ul className="space-y-3 mb-8">
                                        {pkg.inclusions.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <span className="text-primary mt-0.5">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <button className={`relative z-10 w-full py-3 rounded-full font-semibold transition-colors mt-auto
                                ${pkg.isPopular ? 'bg-accent text-white hover:bg-primary' : 'bg-primary text-white hover:bg-dark'}
                            `}>
                                Book Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
