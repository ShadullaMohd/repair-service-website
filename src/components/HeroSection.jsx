import { Phone, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../utils/constants';

export default function HeroSection() {
    return (
        <div className="relative bg-slate-900 text-white pt-24 pb-32 overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-20">
                <img
                    src="https://images.unsplash.com/photo-1581092921461-eab62e97a783?q=80&w=1200&auto=format&fit=crop"
                    alt="Appliance Repair Background"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width="1200"
                    height="800"
                />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="text-blue-200 font-medium text-sm">Available for Same Day Service</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Fast & Reliable <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                            Appliance Repair
                        </span> Service
                    </h1>

                    <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                        Expert repair for <strong>Fully Automatic Washing Machines</strong> (Front Load & Top Load) and Refrigerators.
                        We provide <span className="text-blue-400 font-bold">Same Day Doorstep Service</span> in Hyderabad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="inline-flex justify-center items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-blue-600/30"
                            aria-label={`Call ${BUSINESS_INFO.phoneDisplay}`}
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                        </a>
                        <Link
                            to="/contact"
                            className="inline-flex justify-center items-center space-x-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg backdrop-blur-sm transition-all"
                            aria-label="Book Appointment Online"
                        >
                            <span>Book Appointment</span>
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-slate-300">
                        {['Certified Technicians', '30-Day Warranty', 'Upfront Pricing'].map((feature) => (
                            <div key={feature} className="flex items-center space-x-2">
                                <CheckCircle className="w-5 h-5 text-green-400" />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
