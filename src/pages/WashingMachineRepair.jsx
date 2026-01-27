import MetaTags from '../seo/MetaTags';
import { getServiceSchema } from '../seo/structuredData';
import { Phone, CheckCircle, AlertTriangle, Settings, PenTool } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

// Common problems list
const problems = [
    "Water leakage from bottom or door",
    "Strange loud noises during spin cycle",
    "Washing machine not draining water",
    "Drum not spinning or rotating",
    "Error codes on display panel",
    "Machine vibrates excessively",
    "Door get stuck or won't open",
    "Water not filling or overfilling"
];

// Brands (Visual representation via text for now)
const brands = ["Samsung", "LG", "Whirlpool", "IFB", "Bosch", "Godrej", "Haier", "Panasonic"];

export default function WashingMachineRepair() {
    const schema = getServiceSchema("WashingMachineRepair", "Professional washing machine repair service for all brands.");

    return (
        <div className="bg-slate-50 min-h-screen">
            <MetaTags
                title="Washing Machine Repair Service Near Me | Expert Technicians"
                description="Fast & reliable washing machine repair service. We fix all brands including Samsung, LG, IFB, Whirlpool. Same-day service available. Call now!"
                schema={schema}
            />

            {/* Hero Header */}
            <div className="bg-blue-600 py-16 text-white text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Washing Machine Repair</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Is your washing machine acting up? Get it fixed today by our certified technicians.
                        Affordable rates and 90-day warranty.
                    </p>
                    <div className="mt-8">
                        <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
                            <Phone className="w-5 h-5" />
                            <span>Call For Service</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl py-12">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Service Description */}
                        <section>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                                <Settings className="w-8 h-8 text-blue-600 mr-3" />
                                Comprehensive Repair Service
                            </h2>
                            <p className="text-slate-700 leading-relaxed text-lg mb-4">
                                We provide professional repair services for all types of washing machines including
                                <strong> Top Load, Front Load, and Semi-Automatic</strong> models. Our technicians are trained to diagnose and fix complex issues efficiently.
                            </p>
                            <p className="text-slate-700 leading-relaxed text-lg">
                                Whether it's a minor part replacement or a major motor repair, we use genuine spare parts to ensure the longevity of your appliance.
                            </p>
                        </section>

                        {/* Common Problems */}
                        <section className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                                <AlertTriangle className="w-6 h-6 text-amber-500 mr-3" />
                                Common Issues We Fix
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

                        {/* Brands */}
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Brands We Service</h2>
                            <div className="flex flex-wrap gap-3">
                                {brands.map((brand) => (
                                    <span key={brand} className="bg-white border border-slate-200 px-4 py-2 rounded-lg font-medium text-slate-600 shadow-sm">
                                        {brand}
                                    </span>
                                ))}
                                <span className="px-4 py-2 text-slate-500 italic">and many more...</span>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 sticky top-24">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Why Hire Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <PenTool className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Skilled Technicians</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <ClockIcon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">On-Time Arrival</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <ShieldCheckIcon className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="font-medium text-slate-700">Warranty on Repairs</span>
                                </li>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                                <p className="text-sm text-slate-500 mb-2">Need Help?</p>
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-2xl font-bold text-blue-600 block hover:underline">
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

// Simple Icon Wrappers for Sidebar (since I didn't import them all at top to keep it clean)
// Actually I should import them. Let's fix imports.
import { Clock as ClockIcon, ShieldCheck as ShieldCheckIcon } from 'lucide-react';
