'use client';

import Image from 'next/image';
import { Testimonial } from '@/lib/mockData';
import { useState } from 'react';

type TestimonialsSectionProps = {
    testimonials: Testimonial[];
    facebookLink?: string;
};

export default function TestimonialsSection({ testimonials, facebookLink = "https://www.facebook.com/kafebarakomalolos/reviews" }: TestimonialsSectionProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

    const currentTestimonials = testimonials.slice(
        currentIndex * testimonialsPerPage,
        (currentIndex + 1) * testimonialsPerPage
    );

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? 'text-accent' : 'text-gray-300'}>
                ★
            </span>
        ));
    };

    const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

    return (
        <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">
                        What Our Customers Say
                    </h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>

                    {/* Average Rating Display */}
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="text-5xl font-bold text-primary">{averageRating}</div>
                        <div>
                            <div className="flex text-2xl">
                                {renderStars(Math.round(parseFloat(averageRating)))}
                            </div>
                            <p className="text-gray-600 text-sm">Based on {testimonials.length} reviews</p>
                        </div>
                    </div>

                    {/* Facebook Reviews Link */}
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
                        <span>⭐ Real reviews from our</span>
                        <a
                            href={facebookLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1877F2] hover:underline font-semibold flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Facebook Page
                        </a>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {currentTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            >
                                {/* Customer Info */}
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent">
                                        {testimonial.image ? (
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-bold text-dark">{testimonial.name}</h4>
                                        <div className="flex text-sm">
                                            {renderStars(testimonial.rating)}
                                        </div>
                                    </div>
                                </div>

                                {/* Comment */}
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                                    "{testimonial.comment}"
                                </p>

                                {/* Date */}
                                <p className="text-xs text-gray-400">
                                    {new Date(testimonial.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={prevSlide}
                                className="w-10 h-10 rounded-full bg-primary text-white hover:bg-accent transition-colors flex items-center justify-center"
                                aria-label="Previous testimonials"
                            >
                                ←
                            </button>

                            <div className="flex gap-2">
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                                            }`}
                                        aria-label={`Go to page ${i + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextSlide}
                                className="w-10 h-10 rounded-full bg-primary text-white hover:bg-accent transition-colors flex items-center justify-center"
                                aria-label="Next testimonials"
                            >
                                →
                            </button>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">Had a great experience? Share your story!</p>
                        <a
                            href="#contact"
                            className="inline-block bg-accent text-white font-bold px-8 py-3 rounded-full hover:bg-primary transition-colors"
                        >
                            Leave a Review
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
