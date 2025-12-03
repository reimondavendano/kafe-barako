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
                    {/* Contact Information */}
                    <div className="bg-gray-50 rounded-xl p-8 lg:p-12">
                        <h3 className="text-3xl font-bold text-primary mb-8">Contact Information</h3>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Phone</h4>
                                    <p className="text-gray-600">0927 969 8669</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Email</h4>
                                    <p className="text-gray-600">kapebarako@gmail.com</p>
                                </div>
                            </div>

                            {/* Service Area */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Service Area</h4>
                                    <p className="text-gray-600">Malolos, Bulacan</p>
                                </div>
                            </div>

                            {/* Booking Hours */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-dark mb-1">Booking Hours</h4>
                                    <p className="text-gray-600">Mon-Fri: 4PM - 10PM</p>
                                    <p className="text-gray-600">Sat: 3PM - 10PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Terms & Conditions */}
                        <div className="mt-8 bg-secondary/30 rounded-lg p-6">
                            <h4 className="text-xl font-bold text-primary mb-4">Terms & Conditions</h4>

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
                    </div>

                    {/* Send Inquiry Form */}
                    <div className="bg-white rounded-xl p-8 lg:p-12 shadow-lg">
                        <h3 className="text-3xl font-bold text-primary mb-8">Send Inquiry</h3>

                        <form className="space-y-6">
                            <div>
                                <label htmlFor="fullname" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Full Name <span className="text-accent">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullname"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="John Smith"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address <span className="text-accent">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number <span className="text-accent">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    placeholder="(555) 123-4567"
                                />
                            </div>

                            <div>
                                <label htmlFor="eventdate" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Event Date <span className="text-accent">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="eventdate"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Message <span className="text-accent">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                                    placeholder="Tell us about your event..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-accent text-white font-bold py-4 rounded-lg hover:bg-primary transition-colors flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                </svg>
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
