import { useParams } from 'react-router-dom';
import MetaTags from '../seo/MetaTags';
import { getServiceSchema } from '../seo/structuredData';
import { Phone, CheckCircle, PenTool, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

const brandData = {
    lg: { name: "LG", title: "LG Washing Machine Repair" },
    samsung: { name: "Samsung", title: "Samsung Washing Machine Repair" },
    whirlpool: { name: "Whirlpool", title: "Whirlpool Washing Machine Repair" },
    ifb: { name: "IFB", title: "IFB Washing Machine Repair" },
    godrej: { name: "Godrej", title: "Godrej Washing Machine Repair" },
    haier: { name: "Haier", title: "Haier Washing Machine Repair" },
    panasonic: { name: "Panasonic", title: "Panasonic Washing Machine Repair" },
    bosch: { name: "Bosch", title: "Bosch Washing Machine Repair" }
};

export default function BrandRepair({ brand: propBrand }) {
    const { brand: paramBrand } = useParams();
    const brand = propBrand || paramBrand;
    const info = brandData[brand] || { name: "Washing Machine", title: "Washing Machine Repair" };
    const capitalizedBrand = info.name;

    const schema = getServiceSchema(info.title, `Expert ${capitalizedBrand} washing machine repair service in Hyderabad. We fix Front Load, Top Load, and Fully Automatic models.`);

    return (
        <div className="bg-slate-50 min-h-screen">
            <MetaTags
                title={`${info.title} in Hyderabad | Expert Mechanics`}
                description={`Professional ${capitalizedBrand} Washing Machine repair in Hyderabad. We fix all models: Front Load, Top Load, Fully Automatic. Same-day doorstep service!`}
                schema={schema}
            />

            {/* Hero */}
            <div className="bg-blue-700 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{info.title} Service</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Authorized-style service for <strong>{capitalizedBrand}</strong> washing machines.
                        Genuine parts and expert diagnosis.
                    </p>
                    <div className="mt-8">
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
                            <Phone className="w-5 h-5" />
                            <span>Call For {capitalizedBrand} Expert</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Us for {capitalizedBrand}?</h2>
                            <p className="text-slate-700 leading-relaxed mb-4">
                                {capitalizedBrand} washing machines are built with advanced technology like Direct Drive motors and EcoBubble features.
                                Regular mechanics often fail to diagnose specific error codes (like OE, IE, dE).
                            </p>
                            <p className="text-slate-700 leading-relaxed">
                                Our technicians are specifically trained to handle <strong>{capitalizedBrand} Front Load and Top Load</strong> machines.
                                We use high-quality spares to ensure your machine runs like new.
                            </p>
                        </section>

                        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Models We Repair</h3>
                            <ul className="grid grid-cols-1 gap-3">
                                {['Fully Automatic Front Load', 'Fully Automatic Top Load', 'Semi-Automatic', 'Inverter Technology Models'].map(item => (
                                    <li key={item} className="flex items-center text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Book {capitalizedBrand} Service</h3>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <Clock className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Same Day Service</h4>
                                    <p className="text-slate-600 text-sm">We arrive within 2 hours of booking in most Hyderabad areas.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">90-Day Warranty</h4>
                                    <p className="text-slate-600 text-sm">We provide a written warranty on all {capitalizedBrand} spare parts replaced.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <PenTool className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Expert Diagnosis</h4>
                                    <p className="text-slate-600 text-sm">Advanced tools to fix PCB issues, Motor problems, and Water leakage.</p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="block w-full bg-green-600 text-white text-center py-4 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors">
                                    Call {BUSINESS_INFO.phoneDisplay}
                                </a>
                                <p className="text-center text-xs text-slate-400 mt-2">No visiting charges if service is availed.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
