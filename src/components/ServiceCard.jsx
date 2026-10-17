import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard(props) {
    const { title, description, icon: IconComponent, image, link } = props;
    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 border border-slate-100 flex flex-col justify-between">
            <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                    src={image}
                    alt={`${title} Service in Hyderabad`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-blue-700 shadow-sm">
                    Doorstep in 60-90m
                </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 shadow-sm">
                        {IconComponent && <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
                    <p className="text-slate-600 mb-5 text-sm leading-relaxed">{description}</p>
                </div>
                <Link
                    to={link}
                    className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors pt-2 border-t border-slate-100"
                    aria-label={`Learn more about ${title}`}
                >
                    <span>View Service Details & Pricing</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
