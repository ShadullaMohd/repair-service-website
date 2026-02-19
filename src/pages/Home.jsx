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
                title="Washing Machine Repair in Hyderabad | Same Day Service"
                description="Expert washing machine and refrigerator repair in Hyderabad. Same day doorstep service for all brands (LG, Samsung, Whirlpool, etc)."
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
