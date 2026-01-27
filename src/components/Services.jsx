import ServiceCard from './ServiceCard';
import { Wrench, Snowflake } from 'lucide-react';
import wmImage from '../assets/professional-washing-machine-repair-service-640w.webp';
import fridgeImage from '../assets/Male-Technician-With-Screwdriver-Repairing-Refrigerator-in-Kitchen.jpg';

export default function Services() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Repair Services</h2>
                    <p className="text-lg text-slate-600">
                        We specialize in major home appliances. Expert diagnosis and repair for all brands.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ServiceCard
                        title="Washing Machine Repair"
                        description="Leaking, not spinning, or making noise? We repair all types of washing machines including front load, top load, and semi-automatic."
                        icon={Wrench}
                        image={wmImage}
                        link="/washing-machine-repair"
                    />
                    <ServiceCard
                        title="Refrigerator Repair"
                        description="Cooling issues, compressor problems, or strange noises? Our experts handle single-door, double-door, and side-by-side refrigerators."
                        icon={Snowflake}
                        image={fridgeImage}
                        link="/fridge-repair"
                    />
                </div>
            </div>
        </section>
    );
}
