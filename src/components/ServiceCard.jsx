import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, icon: Icon, image, link }) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl border border-slate-100">
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={`${title} Service`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-600 mb-4 line-clamp-3">{description}</p>
                <Link
                    to={link}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                    Explore More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
            </div>
        </div>
    );
}
