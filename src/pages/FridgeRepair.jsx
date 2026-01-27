import MetaTags from '../seo/MetaTags';
import { getServiceSchema } from '../seo/structuredData';
import { Phone, CheckCircle, AlertTriangle, Snowflake, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

const problems = [
    "Refrigerator not cooling at all",
    "Ice build-up in freezer",
    "Water leakage inside or outside",
    "Strange clicking sounds",
    "Compressor running continuously",
    "Door seal is broken or loose",
    "Fresh food section is freezing",
    "Light not working"
];

const brands = ["Samsung", "LG", "Whirlpool", "Godrej", "Haier", "Hitachi", "Voltas", "Kelvinator"];

export default function FridgeRepair() {
    const schema = getServiceSchema("FridgeRepair", "Expert refrigerator repair services for all major brands.");

    return (
        <div className="bg-slate-50 min-h-screen">
            <MetaTags
                title="Fridge Repair Near Me | Refrigerator Service Experts"
                description="Reliable fridge repair service at your doorstep. We fix single door, double door, and side-by-side refrigerators. Fast & affordable."
                schema={schema}
            />

            {/* Hero Header */}
            <div className="bg-cyan-700 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Professional Fridge Repair</h1>
                    <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                        Food spoiling? Fridge not cooling? We provide fast and efficient refrigerator repair
                        services to get your appliance running like new.
                    </p>
                    <div className="mt-8">
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-cyan-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-cyan-50 transition-colors inline-flex items-center space-x-2">
                            <Phone className="w-5 h-5" />
                            <span>Book Appointment</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                                <Snowflake className="w-8 h-8 text-cyan-600 mr-3" />
                                Refrigerator Repair & Service
                            </h2>
                            <p className="text-slate-700 leading-relaxed text-lg mb-4">
                                We specialize in repairing all types of residential refrigerators including
                                <strong> Single Door, Double Door, Side-by-Side, and Inverter models</strong>.
                                Our certified technicians carry common spare parts to aim for a first-visit fix.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                Don't let your food go to waste. Call us for prompt service for gas refilling, compressor issues, or thermostat replacement.
                            </p>
                        </section>

                        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <AlertTriangle className="w-6 h-6 text-amber-500 mr-3" />
                                Problems We Solve
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {problems.map((prob, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                                        <span className="text-slate-700">{prob}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Brands We Handle</h2>
                            <div className="flex flex-wrap gap-3">
                                {brands.map((brand) => (
                                    <span key={brand} className="bg-white border border-slate-200 px-4 py-2 rounded-lg font-medium text-slate-600 shadow-sm">
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-cyan-600 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Service Guarantee</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-cyan-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Fast Response Time</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="w-4 h-4 text-cyan-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Genuine Parts</span>
                                </li>
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                <p className="text-sm text-slate-500 mb-2">Speak to an Expert</p>
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold text-cyan-700 block hover:underline">
                                    {BUSINESS_INFO.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
