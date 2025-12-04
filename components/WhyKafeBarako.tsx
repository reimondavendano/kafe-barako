import Image from 'next/image';

export default function WhyKafeBarako() {
    return (
        <section id="story" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">
                        Why Kafe Barako?
                    </h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
                    {/* Left Side - Image with Decorative Shape */}
                    <div className="relative">
                        {/* Decorative blob shape behind image */}
                        <div className="absolute -top-6 -left-6 w-full h-full">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
                                <path fill="#C17C5C" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,73.1,42.8C64.8,56.4,53.8,69,40.4,76.8C27,84.6,13.5,87.6,-0.5,88.5C-14.5,89.4,-29,88.2,-42.2,80.8C-55.4,73.4,-67.3,59.8,-75.6,44.4C-83.9,29,-88.6,11.8,-87.7,-5.2C-86.8,-22.2,-80.3,-38.9,-70.5,-52.8C-60.7,-66.7,-47.6,-77.8,-33.1,-84.7C-18.6,-91.6,-2.7,-94.3,11.6,-91.4C25.9,-88.5,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                            </svg>
                        </div>

                        {/* Image */}
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <div className="relative h-[500px]">
                                <Image
                                    src="/images/kafe1.jpg"
                                    alt="Kafe Barako Coffee"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Decorative accent shape */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
                    </div>

                    {/* Right Side - Content */}
                    <div>
                        {/* Four Features Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {/* Trusted Quality Service */}
                            <div className="text-center">
                                <div className="mb-3 flex justify-center">
                                    <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        <path d="M17 2l1.5 3 3 .5-2.25 2 .75 3-2.5-1.5L15 10.5l.75-3L13.5 5.5l3-.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-bold text-gray-700">Trusted Quality Service</h3>
                            </div>

                            {/* Quality Drinks */}
                            <div className="text-center">
                                <div className="mb-3 flex justify-center">
                                    <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M2 19h18v2H2v-2zm2-7h12v5H4v-5zm14-4v5c0 1.1.9 2 2 2s2-.9 2-2V8c0-1.1-.9-2-2-2h-2zm-1-4H3c-1.1 0-2 .9-2 2v3h18V6c0-1.1-.9-2-2-2z" />
                                        <path d="M9 10l-1.5 1.5L9 13l3-3-1.5-1.5L9 10z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-bold text-gray-700">Quality Drinks</h3>
                            </div>

                            {/* Owned Baked Pastries */}
                            <div className="text-center">
                                <div className="mb-3 flex justify-center">
                                    <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M3 17v2h18v-2H3zm3-7l1.5-4.5L9 10l1.5-4.5L12 10l1.5-4.5L15 10l1.5-4.5L18 10v4H6v-4z" />
                                        <path d="M20 14H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-bold text-gray-700">Owned Baked Pastries</h3>
                            </div>

                            {/* Budget Friendly */}
                            <div className="text-center">
                                <div className="mb-3 flex justify-center">
                                    <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        <circle cx="12" cy="12" r="2" />
                                    </svg>
                                </div>
                                <h3 className="text-sm font-bold text-gray-700">Budget Friendly</h3>
                            </div>
                        </div>

                        {/* Description Text */}
                        <div className="space-y-4 mb-8">
                            <p className="text-gray-600 leading-relaxed">
                                Located in the historic city of Malolos, Kafe Barako brings the authentic taste of Batangas coffee to Bulacan.
                                We pride ourselves on sourcing the finest Liberica beans, roasted to perfection to bring out that strong,
                                <span className="font-bold text-primary"> bold flavor</span> that Filipinos love.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Our shop offers a rustic yet modern sanctuary where you can escape the busy city life. Whether you're
                                here for a morning boost or a relaxing evening, we promise a cup that warms the soul.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 max-w-sm">
                            <div className="text-center bg-white rounded-lg p-4 shadow-md">
                                <div className="text-4xl font-bold text-primary mb-1">100%</div>
                                <div className="text-gray-600 text-sm font-semibold">Local Beans</div>
                            </div>
                            <div className="text-center bg-white rounded-lg p-4 shadow-md">
                                <div className="text-4xl font-bold text-primary mb-1">5+</div>
                                <div className="text-gray-600 text-sm font-semibold">Years Brewing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
