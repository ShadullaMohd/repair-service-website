import { useParams } from 'react-router-dom';
import MetaTags from '../seo/MetaTags';
import { getServiceSchema } from '../seo/structuredData';
import { Phone, MapPin, Clock, ShieldCheck, PenTool, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

export default function LocationRepair({ location: propLocation }) {
    // Fallback if accessed via dynamic route (optional future use)
    const { location: paramLocation } = useParams();
    const location = propLocation || paramLocation || "Hyderabad";

    const title = `Washing Machine Repair in ${location}`;
    const description = `Expert Washing Machine & Refrigerator Repair in ${location}. Same day doorstep service, 90-day warranty. Technicians available near you in ${location}.`;

    const schema = getServiceSchema(title, description);

    return (
        <div className="bg-slate-50 min-h-screen">
            <MetaTags
                title={`${title} | Same Day Service`}
                description={description}
                schema={schema}
            />

            {/* Hero Section */}
            <div className="bg-slate-900 py-16 text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-blue-600"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6">
                        <MapPin className="w-4 h-4 text-blue-400" />
                        <span className="text-blue-100 font-medium text-sm">Technicians Available in {location}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Looking for a reliable mechanic in <strong>{location}</strong>?
                        We provide fast, affordable, and high-quality appliance repair at your doorstep.
                    </p>
                    <div className="mt-8">
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2 shadow-lg shadow-blue-600/30">
                            <Phone className="w-5 h-5" />
                            <span>Call {location} Expert</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Best Service Center in {location}</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                Residents of <strong>{location}</strong> trust us for all their washing machine and fridge repair needs.
                                Our local technicians know the area well and can reach your home within 60-90 minutes.
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Avoid the hassle of transporting your heavy appliances. We bring the workshop to you.
                                Whether it's a <strong>Samsung Top Load</strong> or an <strong>LG Front Load</strong>, we fix it all on the spot.
                            </p>
                        </section>

                        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Areas near {location} We also Cover</h3>
                            <p className="text-slate-600 text-sm mb-4">Our {location} team also serves nearby colonies:</p>
                            <ul className="grid grid-cols-2 gap-2 text-sm">
                                {['Nearby Streets', 'Housing Colonies', 'Apartment Complexes', 'Gated Communities'].map(item => (
                                    <li key={item} className="flex items-center text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    {/* Right Booking Card */}
                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Book {location} Technician</h3>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Fast Arrival</h4>
                                    <p className="text-slate-600 text-sm">Technician reaches {location} in ~90 mins.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Warranty Assured</h4>
                                    <p className="text-slate-600 text-sm">Get valid bill and warranty on repairs.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <PenTool className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">All Brands Solved</h4>
                                    <p className="text-slate-600 text-sm">Whirlpool, Godrej, Haier, Voltas, etc.</p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="block w-full bg-green-600 text-white text-center py-4 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors">
                                    Call {BUSINESS_INFO.phoneDisplay}
                                </a>
                                <p className="text-center text-xs text-slate-400 mt-2">Local visiting charges apply.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
