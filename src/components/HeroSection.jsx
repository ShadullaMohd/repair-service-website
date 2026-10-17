import { Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../utils/constants';

export default function HeroSection() {
    return (
        <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-15">
                <img
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=1200&auto=format&fit=crop"
                    alt="Appliance Repair Technician"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width="1200"
                    height="800"
                />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="max-w-3xl">
                    {/* Live Status Badge */}
                    <div className="inline-flex items-center space-x-2.5 bg-blue-500/10 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md shadow-sm">
                        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400"></span>
                        <span className="text-blue-100 font-semibold text-xs md:text-sm tracking-wide">
                            Technicians Active in Hyderabad • Same Day Doorstep Visits
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
                        Washing Machine & Fridge Repair in Hyderabad – <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200">
                            Fast Doorstep Service
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                        Expert repair for <strong>Fully Automatic Front Load, Top Load</strong> and <strong>All Refrigerators</strong>. Fixed at your home with genuine spare parts and transparent pricing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="inline-flex justify-center items-center space-x-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-0.5 shadow-xl shadow-blue-600/30 active:scale-95"
                            aria-label={`Call ${BUSINESS_INFO.phoneDisplay}`}
                        >
                            <Phone className="w-5 h-5 animate-pulse" />
                            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-xl font-bold text-lg backdrop-blur-md transition-all active:scale-95"
                            aria-label="Book Appointment Online"
                        >
                            <span>Book on WhatsApp</span>
                        </Link>
                    </div>

                    {/* Trust Highlights */}
                    <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs md:text-sm font-semibold text-slate-300">
                        <div className="flex items-center space-x-2 bg-slate-800/40 border border-slate-700/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>Doorstep in 60-90 Mins</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-800/40 border border-slate-700/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>90-Day Parts Warranty</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-800/40 border border-slate-700/50 rounded-lg px-3 py-2 backdrop-blur-sm col-span-2 sm:col-span-1">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span>100% Genuine Spares</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
