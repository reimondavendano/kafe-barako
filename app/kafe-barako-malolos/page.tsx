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
import CoffeeJourneySection from '@/components/CoffeeJourneySection';
// import LoyaltyCardSection from '@/components/LoyaltyCardSection'; // Hidden - will be used in customer portal
import { MALOLOS_MENU, MALOLOS_PACKAGES, GALLERY_IMAGES, TESTIMONIALS } from '@/lib/mockData';

import { FloatingMessenger } from '@/components/FloatingMessenger';

export default function MalolosBranch() {
    return (
        <main className="min-h-screen bg-white">
            <MenuPreloadModal />
            <Header branch="malolos" />
            <Hero branch="malolos" />
            <Banner />

            <WhyKafeBarako />
            <CoffeeJourneySection />

            <TestimonialsSection testimonials={TESTIMONIALS} />

            {/* <OffersSection /> */}
            {/* Special offers hidden - will be re-enabled in the future */}
            <MenuSection items={MALOLOS_MENU} />
            <PackagesSection packages={MALOLOS_PACKAGES} />

            {/* <LoyaltyCardSection /> */}
            {/* Loyalty card hidden - will be integrated into customer portal */}

            <Gallery images={GALLERY_IMAGES} />

            <VisitUsSection branch="malolos" />

            <ContactForm />
            <FloatingMessenger branch="malolos" />
            <Footer branch="malolos" />

        </main>
    );
}
