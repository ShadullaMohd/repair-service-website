import { useState } from 'react';
import MetaTags from '../seo/MetaTags';
import { Phone, Mail, MapPin, Send, Map } from 'lucide-react';
import { BUSINESS_INFO } from '../utils/constants';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        service: 'Washing Machine Repair',
        message: ''
    });
    const [location, setLocation] = useState(null);
    const [loadingLocation, setLoadingLocation] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const getLocation = () => {
        setLoadingLocation(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation(`https://www.google.com/maps?q=${latitude},${longitude}`);
                    setLoadingLocation(false);
                    alert("Location captured successfully!");
                },
                (error) => {
                    console.error("Error getting location:", error);
                    setLoadingLocation(false);
                    alert("Unable to retrieve your location. Please ensure location services are enabled.");
                }
            );
        } else {
            setLoadingLocation(false);
            alert("Geolocation is not supported by this browser.");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp Message
        const text = `
*New Appointment Request*
-------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Issue:* ${formData.message}
*Location:* ${location ? location : "Location not shared"}
    `.trim();

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedText}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            <MetaTags
                title="Contact Us | Schedule a Repair"
                description="Get in touch with Hyderabad Washing Machine Repair for fast service. Call us or book an appointment via WhatsApp."
            />

            <div className="bg-slate-900 text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-slate-300">We're here to help you 7 days a week.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-6xl py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
                        <p className="text-lg text-slate-600">
                            Have a question or need to book a service? Reach out to us using any of the methods below.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Phone</h3>
                                    <p className="text-slate-600 mb-1">Call {BUSINESS_INFO.contactPerson}</p>
                                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-600 font-bold text-xl hover:underline">
                                        {BUSINESS_INFO.phoneDisplay}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Email</h3>
                                    <p className="text-slate-600 mb-1">For general inquiries</p>
                                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-blue-600 font-medium hover:underline">
                                        {BUSINESS_INFO.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Office</h3>
                                    <p className="text-slate-600">
                                        {BUSINESS_INFO.address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Embedded Map */}
                        <div className="h-64 bg-slate-200 rounded-xl overflow-hidden mt-8">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.003666657967!2d78.5206!3d17.3986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xaebb80b4b4b4b4b4!2sRamanthapur%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">Book a Service</h2>
                        <p className="text-slate-500 mb-6">Fill the form below to send details directly to us via WhatsApp.</p>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Your Phone Number"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Share Location (Required for faster service)</label>
                                <button
                                    type="button"
                                    onClick={getLocation}
                                    disabled={loadingLocation || location}
                                    className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg border transition-all ${location
                                        ? 'bg-green-50 border-green-200 text-green-700'
                                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                        }`}
                                >
                                    <Map className={`w-5 h-5 ${location ? 'text-green-600' : 'text-slate-500'}`} />
                                    <span>
                                        {loadingLocation ? 'Getting Location...' : location ? 'Location Attached' : 'Share My Current Location'}
                                    </span>
                                </button>
                                {location && <p className="text-xs text-green-600 mt-1">Location will be sent with your message.</p>}
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Type</label>
                                <select
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                >
                                    <option value="Washing Machine Repair">Washing Machine Repair</option>
                                    <option value="Refrigerator Repair">Refrigerator Repair</option>
                                    <option value="Other Appliance">Other Appliance</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Issue Description</label>
                                <textarea
                                    id="message"
                                    rows="3"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Checking noises, cooling issue, etc..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-green-600/20"
                            >
                                <span>Book on WhatsApp</span>
                                <Send className="w-5 h-5" />
                            </button>
                            <p className="text-xs text-center text-slate-500 mt-2">
                                This will open WhatsApp to send your details.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
