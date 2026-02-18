import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../utils/constants';

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">City<span className="text-blue-500">Fix</span></h3>
                        <p className="mb-4 text-slate-400">
                            Your trusted partner for washing machine and refrigerator repairs.
                            Fast, reliable, and affordable service at your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            {/* Dummy Social Icons */}
                            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {NAV_LINKS.map(link => (
                                <li key={link.path}>
                                    <Link to={link.path} className="hover:text-blue-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/washing-machine-repair" className="hover:text-blue-400 transition-colors">
                                    Washing Machine Repair
                                </Link>
                            </li>
                            <li>
                                <Link to="/fridge-repair" className="hover:text-blue-400 transition-colors">
                                    Refrigerator Repair
                                </Link>
                            </li>
                            <li>
                                <span className="text-slate-500">Microwave Repair (Coming Soon)</span>
                            </li>
                            <li>
                                <span className="text-slate-500">AC Repair (Coming Soon)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>{BUSINESS_INFO.address}</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white">{BUSINESS_INFO.phoneDisplay}</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-white">{BUSINESS_INFO.email}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Service Areas - SEO Optimization */}
                <div className="border-t border-slate-800 pt-8 pb-8 mb-8">
                    <h4 className="text-lg font-bold text-white mb-4">Areas We Serve in Hyderabad</h4>
                    <div className="flex flex-wrap gap-2">
                        {BUSINESS_INFO.serviceAreas.map((area, index) => (
                            <span key={index} className="text-slate-400 text-sm bg-slate-800 px-3 py-1 rounded-full border border-slate-700 hover:border-slate-500 hover:text-white transition-colors cursor-default">
                                {area}
                            </span>
                        ))}
                        <span className="text-slate-500 text-sm px-2 py-1">and nearby areas...</span>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
