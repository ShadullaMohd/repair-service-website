import { Clock, ShieldCheck, Banknote, PenTool } from 'lucide-react';

const features = [
    {
        icon: Clock,
        title: "Same Day Service",
        description: "We understand the urgency. Book before 12PM for same-day repair visits."
    },
    {
        icon: ShieldCheck,
        title: "90-Day Warranty",
        description: "All our repairs come with a comprehensive 90-day warranty on parts and labor."
    },
    {
        icon: Banknote,
        title: "Affordable Pricing",
        description: "Transparent pricing with no hidden charges. You approve the quote before we start."
    },
    {
        icon: PenTool,
        title: "Expert Technicians",
        description: "Our team consists of certified and background-checked repair professionals."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose CityFix?</h2>
                    <p className="text-lg text-slate-600">
                        We are dedicated to providing the best appliance repair service with a focus on reliability, quality, and customer satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                                <feature.icon className="w-7 h-7 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
