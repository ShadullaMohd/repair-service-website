import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';
import MetaTags from '../seo/MetaTags';
import { getLocalBusinessSchema } from '../seo/structuredData';

export default function Home() {
    return (
        <>
            <MetaTags
                title="Best Washing Machine & Fridge Repair Service"
                description="Expert appliance repair service near you. We fix washing machines and refrigerators with same-day service and warranty. Call now for a quote!"
                schema={getLocalBusinessSchema()}
            />

            <HeroSection />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <ContactCTA />
        </>
    );
}
