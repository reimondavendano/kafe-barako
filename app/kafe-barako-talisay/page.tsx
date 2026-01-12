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
import { TALISAY_MENU, TALISAY_PACKAGES, TALISAY_GALLERY_IMAGES, TALISAY_TESTIMONIALS } from '@/lib/mockData';
import Image from 'next/image';
import WhyKafeBarakoTalisay from '@/components/WhyKafeBarakoTalisay';
import CoffeeJourneySection from '@/components/CoffeeJourneySection';
import { FloatingMessenger } from '@/components/FloatingMessenger';

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
            <PackagesSection packages={TALISAY_PACKAGES} />

            {/* <LoyaltyCardSection /> */}
            {/* Loyalty card hidden - will be integrated into customer portal */}

            <Gallery images={TALISAY_GALLERY_IMAGES} />

            <VisitUsSection branch="talisay" />

            <ContactForm />
            <Footer branch="talisay" />
            <FloatingMessenger branch="talisay" />

            {/* Supabase Connection Guide */}
            { }
        </main>
    );
}
