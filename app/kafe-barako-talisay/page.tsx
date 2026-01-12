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

// import LoyaltyCardSection from '@/components/LoyaltyCardSection'; // Hidden - will be used in customer portal
import { TALISAY_MENU, PACKAGES, TALISAY_GALLERY_IMAGES, TALISAY_TESTIMONIALS } from '@/lib/mockData';
import Image from 'next/image';
import WhyKafeBarakoTalisay from '@/components/WhyKafeBarakoTalisay';
import CoffeeJourneySection from '@/components/CoffeeJourneySection';

export default function TalisayBranch() {
    return (
        <main className="min-h-screen bg-white">

            <Header branch="talisay" />
            <Hero branch="talisay" />
            <Banner />

            {/* Why Kafe Barako Section */}
            <WhyKafeBarakoTalisay />
            <CoffeeJourneySection branch="talisay" />

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

            <Gallery images={TALISAY_GALLERY_IMAGES} />

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
