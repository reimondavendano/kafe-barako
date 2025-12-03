'use client';

import Image from 'next/image';
import { GalleryItem } from '@/lib/mockData';
import { useState } from 'react';

type GalleryProps = {
    images: GalleryItem[];
};

export default function Gallery({ images }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('All');

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];

    // Filter images based on active filter
    const filteredImages = activeFilter === 'All'
        ? images
        : images.filter(img => img.category === activeFilter);

    return (
        <section id="gallery" className="py-20 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">Gallery</h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600">A glimpse of our rustic ambiance and creations.</p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12 gap-3 flex-wrap">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`
                px-6 py-2 rounded-full font-semibold transition-all duration-300
                ${activeFilter === category
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }
              `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredImages.map((img) => (
                        <div
                            key={img.id}
                            className="relative h-64 cursor-pointer overflow-hidden rounded-lg group"
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-lg">{img.category}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty state */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">No images available in this category.</p>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full max-h-[90vh] h-full">
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            fill
                            className="object-contain"
                        />
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-accent"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                        >
                            &times;
                        </button>
                        <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                            <p className="text-xl font-bold">{selectedImage.alt}</p>
                            <p className="text-sm opacity-80">{selectedImage.category}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
