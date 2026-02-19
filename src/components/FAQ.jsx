import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "What is the cost of washing machine repair in Hyderabad?",
        answer: "Our visiting charge is just ₹199. The final repair cost depends on the problem and spare parts required. We provide a transparent quote before starting work."
    },
    {
        question: "Do you provide same day service?",
        answer: "Yes! We offer same-day doorstep service in Hyderabad. Our technician usually arrives within 2 hours of booking."
    },
    {
        question: "Do you repair LG and Samsung washing machines?",
        answer: "Absolutely. We specialize in LG, Samsung, Whirlpool, IFB, Bosch, Godrej, and all other major brands of washing machines (Front Load & Top Load)."
    },
    {
        question: "What areas do you serve in Hyderabad?",
        answer: "We cover all areas including Madhapur, Gachibowli, Kukatpally, L.B. Nagar, Uppal, Secunderabad, Begumpet, and surrounding localities."
    },
    {
        question: "Do you provide warranty?",
        answer: "Yes, we provide a 90-day warranty on all spare parts replaced and a 30-day service warranty on our repairs."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FAQ Schema JSON-LD
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 inline-flex items-center justify-center">
                        <HelpCircle className="w-8 h-8 text-blue-600 mr-3" />
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Common questions about our washing machine repair services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-colors text-left"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-semibold text-slate-900 pr-8">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="p-6 bg-white border-t border-slate-100">
                                    <p className="text-slate-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Inject JSON-LD Schema */}
                <script type="application/ld+json">
                    {JSON.stringify(faqSchema)}
                </script>
            </div>
        </section>
    );
}
