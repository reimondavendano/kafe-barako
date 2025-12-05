import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Banner from '@/components/Banner';
import MenuSection from '@/components/MenuSection';
import PackagesSection from '@/components/PackagesSection';
import Gallery from '@/components/Gallery';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
// import OffersSection from '@/components/OffersSection'; // Hidden temporarily
import WhyKafeBarako from '@/components/WhyKafeBarako';
import TestimonialsSection from '@/components/TestimonialsSection';
import VisitUsSection from '@/components/VisitUsSection';
import MenuPreloadModal from '@/components/MenuPreloadModal';
// import LoyaltyCardSection from '@/components/LoyaltyCardSection'; // Hidden - will be used in customer portal
import { MALOLOS_MENU, PACKAGES, GALLERY_IMAGES, TESTIMONIALS } from '@/lib/mockData';

import { FloatingMessenger } from '@/components/FloatingMessenger';

export default function MalolosBranch() {
    return (
        <main className="min-h-screen bg-white">
            <MenuPreloadModal />
            <Header branch="malolos" />
            <Hero branch="malolos" />
            <Banner />

            <WhyKafeBarako />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* <OffersSection /> */}
            {/* Special offers hidden - will be re-enabled in the future */}
            <MenuSection items={MALOLOS_MENU} />
            <PackagesSection packages={PACKAGES} />

            {/* <LoyaltyCardSection /> */}
            {/* Loyalty card hidden - will be integrated into customer portal */}

            <Gallery images={GALLERY_IMAGES} />

            <VisitUsSection branch="malolos" />

            <ContactForm />
            <FloatingMessenger />
            <Footer branch="malolos" />

            {/* Supabase Connection Guide */}
            {/* 
        TODO: Connect to Supabase
        1. Install: npm install @supabase/supabase-js
        2. Create .env.local with:
           NEXT_PUBLIC_SUPABASE_URL=your-url
           NEXT_PUBLIC_SUPABASE_ANON_KEY=your-key
        3. Create lib/supabase.js with client
        4. Replace mock data with Supabase queries:
           - Fetch menu items from 'menu' table where branch = 'malolos' or 'both'
           - Fetch packages from 'packages' table
           - Fetch gallery from 'gallery' table
           - Fetch promotions from 'promotions' and 'banner' table
           - Submit contact form to 'booking' table
      */}
        </main>
    );
}
