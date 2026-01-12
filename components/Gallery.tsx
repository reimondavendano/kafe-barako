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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const ITEMS_PER_PAGE = 6;

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];

    // Filter images based on active filter
    const filteredImages = activeFilter === 'All'
        ? images
        : images.filter(img => img.category === activeFilter);

    // Calculate pagination
    const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentImages = filteredImages.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleFilterChange = (category: string) => {
        setActiveFilter(category);
        setCurrentPage(1); // Reset to first page when filter changes
    };

    return (
        <section id="gallery" className="py-20 bg-white">
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
                            onClick={() => handleFilterChange(category)}
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
                    {currentImages.map((img) => (
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

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12 gap-2">
                        <button
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="px-4 py-2 border border-primary text-primary rounded-md disabled:opacity-50 hover:bg-primary/10 transition-colors"
                        >
                            Previous
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-10 h-10 rounded-md transition-colors ${currentPage === page
                                    ? 'bg-primary text-white shadow-md'
                                    : 'border border-primary text-primary hover:bg-primary/10'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 border border-primary text-primary rounded-md disabled:opacity-50 hover:bg-primary/10 transition-colors"
                        >
                            Next
                        </button>
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
