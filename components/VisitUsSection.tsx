type VisitUsSectionProps = {
    branch: 'malolos' | 'talisay';
};

export default function VisitUsSection({ branch }: VisitUsSectionProps) {
    const branchInfo = {
        malolos: {
            name: 'Malolos Branch',
            address: 'Malolos Sports & Convention Center, 10 MacArthur Hwy, Malolos, Bulacan',
            // Using query parameter format to ensure red pin shows - zoom level 14
            mapEmbed: 'https://www.google.com/maps?q=Malolos+Sports+and+Convention+Center,+10+MacArthur+Hwy,+Malolos,+Bulacan&output=embed&z=14',
            mapUrl: 'https://maps.app.goo.gl/o4gmgngCzKtNUMhi6',
            phone: '0965 695 2128',
            email: 'kafebarako@gmail.com',
            hours: {
                weekday: 'Mon-Fri: 4:00 PM - 10:00 PM',
                weekend: 'Sat: 3:00 PM - 10:00 PM',
                sunday: 'Sun: Closed'
            },
            facebook: 'https://www.facebook.com/kafebarakomalolos',
            instagram: 'https://www.instagram.com/kafe_barako/'
        },
        talisay: {
            name: 'Talisay Branch',
            address: 'Talisay, Batangas',
            // Coordinates for Talisay, Batangas: 13.9436°N, 120.9329°E
            mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.123!2d120.9329!3d13.9436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU2JzM3LjAiTiAxMjDCsDU1JzU4LjQiRQ!5e0!3m2!1sen!2sph!4v1733328000000!5m2!1sen!2sph',
            mapUrl: 'https://www.google.com/maps/search/?api=1&query=Talisay,Batangas',
            phone: '0927 969 8669',
            email: 'kapebarako@gmail.com',
            hours: {
                weekday: 'Mon-Fri: 8:00 AM - 8:00 PM',
                weekend: 'Sat-Sun: 8:00 AM - 9:00 PM',
                sunday: ''
            },
            facebook: 'https://www.facebook.com/kafebarako',
            instagram: 'https://www.instagram.com/kafebarako'
        }
    };

    const info = branchInfo[branch];

    return (
        <section id="visit" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">
                        Visit Us
                    </h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600 text-lg">We'd love to see you at our {info.name}!</p>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information Cards */}
                    <div className="space-y-6">
                        {/* Operating Hours Card */}
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-dark mb-3">Operating Hours</h3>
                                    <div className="space-y-2 text-gray-700">
                                        <p className="flex justify-between">
                                            <span className="font-semibold">Weekdays:</span>
                                            <span>{info.hours.weekday}</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span className="font-semibold">Weekend:</span>
                                            <span>{info.hours.weekend}</span>
                                        </p>
                                        {info.hours.sunday && (
                                            <p className="flex justify-between">
                                                <span className="font-semibold">Sunday:</span>
                                                <span>{info.hours.sunday}</span>
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details Card */}
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-dark mb-3">Contact Details</h3>
                                    <div className="space-y-3">
                                        <a href={`tel:${info.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            <span className="font-semibold">{info.phone}</span>
                                        </a>
                                        <a href={`mailto:${info.email}`} className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <span>{info.email}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-dark mb-3">Location</h3>
                                    <p className="text-gray-700 mb-4">{info.address}</p>
                                    <a
                                        href={info.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-accent transition-colors text-sm font-semibold"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        Get Directions
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-primary/10 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-dark mb-4">Follow Us</h3>
                            <div className="flex gap-4">
                                <a
                                    href={info.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href={info.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Embed - No API Key Required */}
                    <div className="h-full min-h-[600px] rounded-xl overflow-hidden shadow-xl">
                        <iframe
                            src={info.mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${info.name} Location`}
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-accent text-white font-bold px-8 py-4 rounded-full hover:bg-primary transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Book an Event
                    </a>
                    <a
                        href={`tel:${info.phone.replace(/\s/g, '')}`}
                        className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-full hover:bg-accent transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call Us Now
                    </a>
                </div>
            </div>
        </section>
    );
}
