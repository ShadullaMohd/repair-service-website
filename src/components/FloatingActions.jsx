import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

export default function FloatingActions() {
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
        "Hello Mosin, I would like to book an appliance repair service in Hyderabad."
    )}`;

    return (
        <>
            {/* Desktop / Tablet Floating Action Bubbles (Bottom Right) */}
            <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col space-y-3 items-end">
                {/* WhatsApp Floating Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center bg-emerald-600 hover:bg-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Chat with Mosin on WhatsApp"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping mr-2.5"></span>
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-sm">Chat on WhatsApp</span>
                </a>

                {/* Direct Call Floating Button */}
                <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    aria-label={`Call Mosin: ${BUSINESS_INFO.phoneDisplay}`}
                >
                    <Phone className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-sm">Call {BUSINESS_INFO.phoneDisplay}</span>
                </a>
            </div>

            {/* Mobile Fixed Bottom Action Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2.5 shadow-2xl sm:hidden flex items-center space-x-2">
                <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 active:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-blue-600/30"
                >
                    <Phone className="w-4 h-4" />
                    <span>Call Technician</span>
                </a>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-emerald-600 active:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm shadow-md shadow-emerald-600/30"
                >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book WhatsApp</span>
                </a>
            </div>
        </>
    );
}
