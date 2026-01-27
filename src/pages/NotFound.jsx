import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import MetaTags from '../seo/MetaTags';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
            <MetaTags
                title="Page Not Found"
                description="The page you are looking for does not exist."
            />

            <h1 className="text-9xl font-bold text-slate-200">404</h1>
            <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-2">Page Not Found</h2>
            <p className="text-slate-600 mb-8 max-w-md">
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
                <Home className="w-5 h-5" />
                <span>Back to Home</span>
            </Link>
        </div>
    );
}
