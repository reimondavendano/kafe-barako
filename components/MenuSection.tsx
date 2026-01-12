'use client';

import Image from 'next/image';
import { MenuItem } from '@/lib/mockData';
import { useState } from 'react';

type MenuSectionProps = {
    items: MenuItem[];
};

export default function MenuSection({ items }: MenuSectionProps) {
    const categories = Array.from(new Set(items.map(item => item.category)));
    const [activeCategory, setActiveCategory] = useState<string>(categories[0] || 'Kafe-Barako');

    const filteredItems = items.filter(item => item.category === activeCategory);

    // Category icons mapping
    const categoryIcons: Record<string, string> = {
        'Hot Coffee': '☕',
        'Kafe-Barako': '☕',
        'Cold-Brew': '🧊',
        'Cold Brew': '🧊',
        'Non-Coffee': '🍵',
        'Food': '🍽️',
        'Snacks': '🍽️',
        'Coffee': '☕',
        'Beverages': '🥤',
        'Desserts': '🍰',
        'Classic Coffee': '☕',
        'Signature Coffee': '✨',
        'Non Coffee': '🍵',
        'Refresher and Cooler': '🍹',
        'Rice Meals and Pasta': '🍝',
        'Pastries and Snacks': '🍟',
    };

    return (
        <section id="menu" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">Our Menu</h2>
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex bg-secondary/30 rounded-full p-2 gap-2 flex-wrap">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`
                  px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2
                  ${activeCategory === category
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'text-dark hover:bg-white hover:shadow-md'
                                    }
                `}
                            >
                                <span className="text-xl">{categoryIcons[category] || '📋'}</span>
                                <span>{category}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {filteredItems.map(item => (
                        <div
                            key={item.id}
                            className="bg-secondary/20 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-1"
                        >
                            <div className="relative h-80 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {item.isNew && (
                                    <span className="absolute top-2 right-2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                                        NEW
                                    </span>
                                )}
                                {item.isBestseller && (
                                    <span className="absolute top-2 left-2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                        <span>⭐</span> BESTSELLER
                                    </span>
                                )}
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-xl font-bold text-dark">{item.name}</h4>
                                    {/* <span className="text-primary font-bold text-lg">₱{item.price}</span> */}
                                    {/* Price hidden - data preserved in mockData for future use */}
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No items available in this category.</p>
                    </div>
                )}
            </div>
        </section>
    );
}
