import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import MenuSection from '@/components/MenuSection';
import PackagesSection from '@/components/PackagesSection';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
// import OffersSection from '@/components/OffersSection'; // Hidden temporarily
import TestimonialsSection from '@/components/TestimonialsSection';
import VisitUsSection from '@/components/VisitUsSection';
import MenuPreloadModal from '@/components/MenuPreloadModal';
// import LoyaltyCardSection from '@/components/LoyaltyCardSection'; // Hidden - will be used in customer portal
import { TALISAY_MENU, PACKAGES, GALLERY_IMAGES, TALISAY_TESTIMONIALS } from '@/lib/mockData';
import Image from 'next/image';

export default function TalisayBranch() {
    return (
        <main className="min-h-screen bg-white">
            <MenuPreloadModal />
            <Header branch="talisay" />
            <Hero branch="talisay" />
            <Banner />

            {/* Why Kafe Barako Section */}
            <section id="story" className="py-20 container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=800&q=80"
                            alt="Talisay View"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-dark mb-6">Coffee with a View</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Nestled in Talisay, Batangas, our branch offers more than just great coffee. Enjoy your Kapeng Barako with a breathtaking view of the Taal Lake.
                            We bring the farm-to-cup experience closer to you, serving beans sourced directly from local farmers in the region.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            The cool breeze, the scenic view, and the aroma of freshly brewed coffee make Kape Barako Talisay the perfect destination for road trippers and coffee lovers alike.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-primary">Taal</span>
                                <span className="text-sm text-gray-500">Lake View</span>
                            </div>
                            <div className="text-center border-l border-gray-300 pl-4">
                                <span className="block text-3xl font-bold text-primary">Fresh</span>
                                <span className="text-sm text-gray-500">Farm Sourcing</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialsSection
                testimonials={TALISAY_TESTIMONIALS}
                facebookLink="https://www.facebook.com/kafebarakoph/reviews"
            />

            {/* <OffersSection /> */}
            {/* Special offers hidden - will be re-enabled in the future */}
            <MenuSection items={TALISAY_MENU} />
            <PackagesSection packages={PACKAGES} />

            {/* <LoyaltyCardSection /> */}
            {/* Loyalty card hidden - will be integrated into customer portal */}

            <Gallery images={GALLERY_IMAGES} />

            <VisitUsSection branch="talisay" />

            <ContactForm />
            <Footer branch="talisay" />

            {/* Supabase Connection Guide */}
            {/* 
        TODO: Connect to Supabase
        1. Install: npm install @supabase/supabase-js
        2. Create .env.local with:
           NEXT_PUBLIC_SUPABASE_URL=your-url
           NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
        3. Create lib/supabase.js with client
        4. Replace mock data with Supabase queries:
           - Fetch menu items from 'menu' table where branch = 'talisay' or 'both'
           - Fetch packages from 'packages' table
           - Fetch gallery from 'gallery' table
           - Fetch promotions from 'promotions' and 'banner' table
           - Submit contact form to 'booking' table
      */}
        </main>
    );
}
