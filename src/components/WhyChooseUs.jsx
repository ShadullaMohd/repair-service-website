import { Clock, ShieldCheck, Banknote, PenTool } from 'lucide-react';

const features = [
    {
        icon: Clock,
        title: "Same Day Service",
        description: "We understand the urgency. Technicians arrive at your doorstep in 60-90 minutes across Hyderabad."
    },
    {
        icon: ShieldCheck,
        title: "90-Day Parts Warranty",
        description: "Complete peace of mind. We provide a 90-day warranty on all replaced spare parts plus a 30-day service guarantee."
    },
    {
        icon: Banknote,
        title: "Transparent Pricing",
        description: "No hidden charges. Visiting charge is just ₹199, and you approve the upfront quote before work begins."
    },
    {
        icon: PenTool,
        title: "Certified Specialists",
        description: "Expert technicians trained specifically for LG, Samsung, Whirlpool, IFB, Bosch, and Godrej appliances."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-slate-50/80">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                        Hyderabad's Top Rated
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
                        Why Choose CityFix?
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Reliable, fast, and transparent doorstep appliance repair you can depend on every single time.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-100 transform hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div>
                                <div className="w-14 h-14 bg-blue-50 group-hover:bg-blue-600 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 shadow-sm">
                                    <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
