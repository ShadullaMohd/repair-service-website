import MetaTags from '../seo/MetaTags';
import { Users, Target, Heart } from 'lucide-react';

export default function About() {
    return (
        <div className="bg-white min-h-screen">
            <MetaTags
                title="About Us | Trusted Appliance Repair Experts"
                description="Learn about CityFix, your local experts in home appliance repair. Dedicated to quality, transparency, and customer satisfaction."
            />

            <div className="bg-slate-900 text-white py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">About CityFix</h1>
                    <p className="text-xl text-slate-300">Dedicated to keeping your home running smooth.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 max-w-5xl py-16">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
                    <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                        Founded in 2015, CityFix started with a simple mission: to provide reliable, high-quality appliance repair services to our local community. We noticed that customers often struggled to find trustworthy technicians who could fix issues promptly.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Over the years, we have grown into a team of certified professionals, having served thousands of satisfied households. We pride ourselves on our technical expertise and our commitment to customer service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
                        <p className="text-slate-600">Our technicians are rigorously trained and background-checked for your peace of mind.</p>
                    </div>
                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Target className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Our Mission</h3>
                        <p className="text-slate-600">To deliver the fastest, most reliable repair service at a fair price.</p>
                    </div>
                    <div className="text-center p-6 bg-slate-50 rounded-xl">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Customer First</h3>
                        <p className="text-slate-600">We prioritize your convenience and offer a 90-day warranty on all repairs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
