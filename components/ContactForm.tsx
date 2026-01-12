'use client';

import { MessageCircle, MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

const MESSENGER_LINK_MALOLOS = "https://www.facebook.com/messages/t/103360595563043";
const MESSENGER_LINK_TALISAY = "https://www.facebook.com/messages/t/113017253874491";

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">
                        Looking for Trusted Event Supplier?
                    </h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We are here to make your events memorable. Reach out to us for bookings and inquiries!
                    </p>
                </div>

                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Malolos Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                        <div className="bg-primary p-6 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('/hero/hero-bg.jpg')] bg-cover bg-center"></div>
                            <h3 className="text-3xl font-bold text-white relative z-10 font-[family-name:var(--font-bebas)] tracking-wider">Malolos Branch</h3>
                            <p className="text-white/80 relative z-10 text-sm tracking-widest uppercase">Bulacan</p>
                        </div>

                        <div className="p-8 flex-grow flex flex-col items-center text-center space-y-6">
                            <div className="p-4 bg-primary/5 rounded-full mb-2">
                                <Image src="/assets/kape barako.jpg" alt="Kafe Barako Malolos" width={80} height={80} className="w-20 h-20 object-cover rounded-full" />
                            </div>

                            <div className="space-y-4 w-full">
                                <div className="flex items-center justify-center gap-3 text-gray-800">
                                    <Phone className="w-5 h-5 text-accent" />
                                    <span className="font-serif text-xl tracking-wide">0917 658 0208</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-gray-700 px-4">
                                    <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                                    <span className="font-serif text-base italic">KM 42 MacArthur Highway, Brgy. Bulihan, Malolos City</span>
                                </div>
                            </div>

                            <div className="mt-auto pt-6 w-full">
                                <p className="text-sm text-gray-500 mb-3">For booking & inquiries</p>
                                <a
                                    href={MESSENGER_LINK_MALOLOS}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-[#0084FF] hover:bg-[#0072db] text-white py-4 px-6 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-blue-200"
                                >
                                    <MessageCircle className="w-6 h-6 fill-current" />
                                    Message Malolos Branch
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Talisay Card */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col">
                        <div className="bg-accent p-6 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10 bg-[url('/hero/hero-bg.jpg')] bg-cover bg-center"></div>
                            <h3 className="text-3xl font-bold text-white relative z-10 font-[family-name:var(--font-bebas)] tracking-wider">Talisay Branch</h3>
                            <p className="text-white/80 relative z-10 text-sm tracking-widest uppercase">Batangas</p>
                        </div>

                        <div className="p-8 flex-grow flex flex-col items-center text-center space-y-6">
                            <div className="p-4 bg-accent/5 rounded-full mb-2">
                                <Image src="/assets/kape_talisay.jpg" alt="Kafe Barako Talisay" width={80} height={80} className="w-20 h-20 object-cover rounded-full" />
                            </div>

                            <div className="space-y-4 w-full">
                                <div className="flex items-center justify-center gap-3 text-gray-800">
                                    <Phone className="w-5 h-5 text-accent" />
                                    <span className="font-serif text-xl tracking-wide">0952 586 2863</span>
                                </div>
                                <div className="flex items-center justify-center gap-3 text-gray-700 px-4">
                                    <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                                    <span className="font-serif text-base italic">Talisay - Tanauan Rd, Talisay, Batangas</span>
                                </div>
                            </div>

                            <div className="mt-auto pt-6 w-full">
                                <p className="text-sm text-gray-500 mb-3">For booking & inquiries</p>
                                <a
                                    href={MESSENGER_LINK_TALISAY}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 w-full bg-[#0084FF] hover:bg-[#0072db] text-white py-4 px-6 rounded-xl font-bold transition-all transform active:scale-95 shadow-lg shadow-blue-200"
                                >
                                    <MessageCircle className="w-6 h-6 fill-current" />
                                    Message Talisay Branch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
