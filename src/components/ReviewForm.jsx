import { useState } from 'react';
import { Star, X, CheckCircle } from 'lucide-react';
import { useReviews } from '../context/ReviewContext';

export default function ReviewForm({ onClose }) {
    const { addReview } = useReviews();
    const [rating, setRating] = useState(5);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        content: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addReview({
            name: formData.name,
            content: formData.content,
            rating
        });
        setSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 1800);
    };

    return (
        <div className="fixed inset-0 bg-slate-900/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 relative border border-slate-100">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 rounded-full hover:bg-slate-100 transition-colors"
                    aria-label="Close modal"
                >
                    <X className="w-5 h-5" />
                </button>

                {submitted ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                            <CheckCircle className="w-9 h-9" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Review Submitted!</h3>
                        <p className="text-slate-600 text-sm">Thank you for sharing your experience. Your feedback helps our Hyderabad community.</p>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                                Verified Feedback
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 mt-2">Rate Your Experience</h3>
                            <p className="text-slate-500 text-xs">Help other homeowners in Hyderabad find reliable service</p>
                        </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Star Rating */}
                    <div className="flex flex-col items-center space-y-2">
                        <div className="flex space-x-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    type="button"
                                    onClick={() => setRating(star)}
                                    onMouseEnter={() => setHoveredRating(star)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                    className="focus:outline-none transition-transform hover:scale-110"
                                >
                                    <Star
                                        className={`w-8 h-8 ${star <= (hoveredRating || rating)
                                                ? 'fill-amber-400 text-amber-400'
                                                : 'text-slate-300'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 font-medium">
                            {rating === 5 ? "Excellent!" : rating === 4 ? "Good" : rating === 3 ? "Average" : "Could be better"}
                        </p>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                        <input
                            type="text"
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Feedback</label>
                        <textarea
                            required
                            rows="3"
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Tell us about your service experience..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                    >
                        Submit Review
                    </button>
                </form>
                    </>
                )}
            </div>
        </div>
    );
}
