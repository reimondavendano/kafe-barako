import Image from 'next/image';

export default function WhyKafeBarakoTalisay() {
    return (
        <section id="story" className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Side - Content */}
                    <div className="flex-1 space-y-8 animate-fade-in-left">
                        <div>
                            <div className="inline-block px-4 py-1 bg-secondary/30 text-primary font-bold rounded-full text-sm mb-4 tracking-wider uppercase">
                                Our Location
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-bebas)] tracking-wide leading-none">
                                Coffee with <br /> <span className="text-primary">A View</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Nestled in Talisay, Batangas, our branch offers more than just great coffee. Enjoy your Kapeng Barako with a breathtaking view of the Taal Lake.
                                We bring the farm-to-cup experience closer to you, serving beans sourced directly from local farmers in the region.
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Taal Lake View</h3>
                                    <p className="text-sm text-gray-600 mt-1">Scenic ambiance while you sip.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Fresh Sourcing</h3>
                                    <p className="text-sm text-gray-600 mt-1">Beans straight from local farms.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">Road Trip Stop</h3>
                                    <p className="text-sm text-gray-600 mt-1">Perfect destination for travelers.</p>
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
                                    <p className="text-sm text-gray-600 mt-1">Perfect pairings for your brew.</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-8 items-center pt-4 border-t border-gray-100">
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary font-[family-name:var(--font-bebas)]">100%</span>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-tight leading-tight">Taal<br />View</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary font-[family-name:var(--font-bebas)]">Fresh</span>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-tight leading-tight">Farm<br />Sourcing</span>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="flex items-center gap-2">
                                <span className="text-4xl font-bold text-primary font-[family-name:var(--font-bebas)]">4.9</span>
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-tight leading-tight">Customer<br />Rating</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex-1 relative w-full h-[600px] lg:h-[700px]">
                        <div className="absolute inset-0 bg-primary rounded-t-[10rem] rounded-b-[2rem] transform rotate-3 opacity-10"></div>
                        <div className="absolute inset-0 bg-secondary rounded-t-[10rem] rounded-b-[2rem] transform -rotate-2 opacity-20"></div>
                        <div className="relative h-full w-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="/talisay-operations/4.jpg"
                                alt="Talisay View"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Badge */}
                            <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-lg max-w-[200px] animate-bounce-slow hidden md:block">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-xs font-bold text-gray-500 uppercase">Open Today</span>
                                </div>
                                <p className="text-sm font-bold text-gray-800">Enjoy the view with your coffee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
