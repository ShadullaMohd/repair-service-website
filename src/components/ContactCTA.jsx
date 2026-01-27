import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function ContactCTA() {
    return (
        <section className="py-20 bg-blue-600">
            <div className="container mx-auto px-4 max-w-4xl text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Appliance Acting Up? Get it Fixed Today!
                </h2>
                <p className="text-xl text-blue-100 mb-10">
                    Fast, affordable, and reliable repair service is just a phone call away.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="inline-flex justify-center items-center space-x-2 bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
                    >
                        <Phone className="w-5 h-5" />
                        <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                    </a>
                    <Link
                        to="/contact"
                        className="inline-flex justify-center items-center space-x-2 bg-blue-700 text-white hover:bg-blue-800 border border-blue-500 px-8 py-4 rounded-full font-bold text-lg transition-colors"
                    >
                        <span>Book Online</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
