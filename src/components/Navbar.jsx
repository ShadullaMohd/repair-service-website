import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS } from '../utils/constants';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            {/* Top Bar - Desktop only */}
            <div className="bg-slate-900 text-white py-2 text-sm hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center max-w-7xl">
                    <div className="flex space-x-6">
                        <span>{BUSINESS_INFO.workingHours}</span>
                        <span>{BUSINESS_INFO.email}</span>
                    </div>
                    <div className="font-semibold text-amber-400">
                        Expert Appliance Repair in Your Area
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 group" onClick={() => setIsOpen(false)}>
                        <div className="bg-gradient-to-tr from-blue-700 to-blue-500 p-2 rounded-xl shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                            <Wrench className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-black tracking-tight text-slate-900 leading-none">
                                City<span className="text-blue-600">Fix</span>
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">
                                Hyderabad Doorstep Repair
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-7 items-center">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-semibold transition-all relative py-1 hover:text-blue-600 ${isActive ? 'text-blue-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 after:rounded-full' : 'text-slate-600'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center space-x-3">
                        <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md shadow-blue-600/25 transition-all transform hover:-translate-y-0.5"
                        >
                            <Phone className="w-4 h-4 animate-bounce" />
                            <span>{BUSINESS_INFO.phoneDisplay}</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-slate-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg h-screen">
                    <div className="flex flex-col p-4 space-y-4">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-lg font-medium py-2 border-b border-slate-50 ${isActive ? 'text-blue-600' : 'text-slate-700'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <a
                            href={`tel:${BUSINESS_INFO.phone}`}
                            className="mt-4 flex justify-center items-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-bold"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
