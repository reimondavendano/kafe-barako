export default function OffersSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-secondary/40 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-[family-name:var(--font-bebas)] tracking-wide uppercase">Special Offers</h2>
                    <div className="flex justify-center mb-6">
                        <div className="w-24 h-1 bg-accent"></div>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Enjoy exclusive deals and join our loyalty program for more rewards!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {/* Grand Opening Promo */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-accent transform hover:-translate-y-2 transition-all">
                        <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                            <div className="text-sm font-bold uppercase tracking-wide mb-2">Limited Time</div>
                            <h3 className="text-2xl font-bold">Grand Opening</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-accent mb-4">50% OFF</div>
                            <p className="text-gray-600 mb-4">
                                Get half off on all coffee drinks during our grand opening celebration!
                            </p>
                            <div className="text-sm text-gray-500">
                                Valid until end of month
                            </div>
                        </div>
                    </div>

                    {/* Loyalty Program */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-primary transform hover:-translate-y-2 transition-all">
                        <div className="bg-gradient-to-r from-dark to-primary p-6 text-white">
                            <div className="text-sm font-bold uppercase tracking-wide mb-2">Rewards</div>
                            <h3 className="text-2xl font-bold">Loyalty Program</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-primary mb-4">FREE</div>
                            <p className="text-gray-600 mb-4">
                                Buy 10 cups of Kapeng Barako and get 1 free! Join our loyalty program today.
                            </p>
                            <button className="w-full py-2 bg-primary text-white rounded hover:bg-dark transition-colors">
                                Sign Up Now
                            </button>
                        </div>
                    </div>

                    {/* Student Discount */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-accent transform hover:-translate-y-2 transition-all">
                        <div className="bg-gradient-to-r from-accent to-primary p-6 text-white">
                            <div className="text-sm font-bold uppercase tracking-wide mb-2">Students</div>
                            <h3 className="text-2xl font-bold">Student Discount</h3>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-accent mb-4">10% OFF</div>
                            <p className="text-gray-600 mb-4">
                                Show your valid student ID and enjoy 10% discount on all items.
                            </p>
                            <div className="text-sm text-gray-500">
                                Available at Malolos branch
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
