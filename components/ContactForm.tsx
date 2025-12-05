'use client';

import { ArrowDownCircle, ExternalLink } from 'lucide-react';

const FORM_URL = "https://docs.google.com/forms/d/1Uu7JFrP4KPhgR8SuXciChVA3t_GV1I5XafY72faR5Gc/viewform";

export default function ContactForm() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">Get In Touch</h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600">We'd love to hear from you!</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Terms & Conditions */}
                    <div className="bg-gray-50 rounded-xl p-8 lg:p-12 h-fit">
                        <h3 className="text-3xl font-bold text-primary mb-8">Terms & Conditions</h3>

                        <div className="space-y-4 text-sm text-gray-700">
                            <div>
                                <p className="font-semibold mb-2">PAYMENT:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>50% DOWN PAYMENT IS REQUIRED UPON BOOKING</li>
                                    <li>BALANCE CAN BE PAID IN THE VENUE</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold mb-2">ADDITIONAL CHARGES:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>ADDITIONAL DRINKS: ₱130/drink</li>
                                    <li>ADDITIONAL HOURS: ₱500/hour</li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-accent mb-2">NO REFUND</p>
                            </div>

                            <div>
                                <p className="font-semibold mb-2">CANCELLATION:</p>
                                <ul className="list-disc list-inside space-y-1 ml-2">
                                    <li>FOR LESS THAN 24 HRS CANCELLATION: NO REFUND</li>
                                    <li>CANCELLATION MUST BE MADE 3 DAYS OR 72 HRS BEFORE THE EVENT.</li>
                                    <li>ONLY 50% WILL BE REFUNDED IF CANCELLED WITHIN NOTICE PERIOD</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Google Inquiry Form */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[850px] border border-gray-100 flex flex-col">

                        {/* Instructions Header */}
                        <div className="bg-primary/5 p-4 text-center border-b border-gray-100">
                            <h4 className="font-bold text-primary text-lg mb-1">Inquiry Form</h4>
                            <p className="text-sm text-gray-600 flex items-center justify-center gap-2 animate-pulse">
                                <ArrowDownCircle className="w-4 h-4" />
                                Please scroll inside the box below to complete the form
                            </p>
                        </div>

                        {/* Iframe */}
                        <div className="flex-1 relative bg-gray-50">
                            <iframe
                                src={`${FORM_URL}?embedded=true`}
                                className="absolute inset-0 w-full h-full"
                                style={{ border: 0 }}
                                allowFullScreen
                                title="Inquiry Form"
                            >
                                Loading…
                            </iframe>
                        </div>

                        {/* Fallback Button */}
                        <div className="p-4 bg-gray-50 text-center border-t border-gray-200">
                            <a
                                href={FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-accent hover:text-primary font-semibold text-sm transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Having trouble? Open form in new tab
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
