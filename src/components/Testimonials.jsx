import { useState } from 'react';
import { Star, MessageSquarePlus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useReviews } from '../context/ReviewContext';
import ReviewForm from './ReviewForm';

export default function Testimonials() {
    const { reviews } = useReviews();
    const [showReviewForm, setShowReviewForm] = useState(false);

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const reviewsPerPage = 3;

    // Calculate indexes
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(reviews.length / reviewsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
                    <p className="text-lg text-slate-600 mb-8">Don't just take our word for it. Here are reviews from our happy customers.</p>

                    <button
                        onClick={() => setShowReviewForm(true)}
                        className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition-transform transform hover:scale-105 shadow-md"
                    >
                        <MessageSquarePlus className="w-5 h-5" />
                        <span>Write a Review</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {currentReviews.map((review) => (
                        <div key={review.id} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative hover:shadow-md transition-shadow animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-slate-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-xs text-slate-400">{review.date}</span>
                            </div>
                            <p className="text-slate-700 mb-6 italic min-h-[80px]">"{review.content}"</p>
                            <div>
                                <div className="font-bold text-slate-900">{review.name}</div>
                                <div className="text-sm text-slate-500">{review.role || 'Customer'}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                {reviews.length > reviewsPerPage && (
                    <div className="flex justify-center items-center space-x-4">
                        <button
                            onClick={prevPage}
                            disabled={currentPage === 1}
                            className={`p-2 rounded-full border ${currentPage === 1 ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <span className="text-slate-600 font-medium">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            onClick={nextPage}
                            disabled={currentPage === totalPages}
                            className={`p-2 rounded-full border ${currentPage === totalPages ? 'border-slate-200 text-slate-300 cursor-not-allowed' : 'border-blue-200 text-blue-600 hover:bg-blue-50'}`}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                )}
            </div>

            {showReviewForm && <ReviewForm onClose={() => setShowReviewForm(false)} />}
        </section>
    );
}
