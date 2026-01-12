import Image from 'next/image';

export default function WhyKafeBarako() {
    return (
        <section id="story" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side - Content */}
                    <div className="flex-1 space-y-8 animate-fade-in-left">
                        <div>
                            <div className="inline-block px-4 py-1 bg-secondary/30 text-primary font-bold rounded-full text-sm mb-4 tracking-wider uppercase">
                                Our Promise
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-bebas)] tracking-wide leading-none">
                                More Than Just <br /> <span className="text-primary">Strong Coffee</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Located in the historic city of Malolos, <span className="font-bold text-gray-800">Kafe Barako</span> is your sanctuary for authentic Batangas coffee in Bulacan.
                                We don't just serve coffee; we serve a tradition of strength and warmth.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Trusted Quality</h3>
                                    <p className="text-sm text-gray-600 mt-1">Consistent excellence in every cup we serve.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Premium Drinks</h3>
                                    <p className="text-sm text-gray-600 mt-1">Crafted with the finest local ingredients.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Delicious Snacks</h3>
                                    <p className="text-sm text-gray-600 mt-1">Perfect combination for your coffee.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Wallet Friendly</h3>
                                    <p className="text-sm text-gray-600 mt-1">Quality coffee that fits your budget.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 items-center pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary font-[family-name:var(--font-bebas)]">100%</span>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-tight leading-tight">Locally<br />Sourced</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary font-[family-name:var(--font-bebas)]">5+</span>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-tight leading-tight">Years<br />Brewing</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary font-[family-name:var(--font-bebas)]">4.9</span>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-tight leading-tight">Customer<br />Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="lg:flex-1 relative w-full h-[600px] lg:h-[700px]">
                        <div className="absolute inset-0 bg-primary rounded-t-[10rem] rounded-b-[2rem] transform rotate-3 opacity-10"></div>
                        <div className="absolute inset-0 bg-secondary rounded-t-[10rem] rounded-b-[2rem] transform -rotate-2 opacity-20"></div>
                        <div className="relative h-full w-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/carousel/4.jpg"
                                alt="Kafe Barako Ambiance"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg max-w-[200px] animate-bounce-slow hidden md:block">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-xs font-bold text-gray-500 uppercase">Open Today</span>
                                </div>
                                <p className="text-sm font-bold text-gray-800">Ready to serve you the best brew.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
