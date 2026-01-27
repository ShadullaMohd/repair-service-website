import { createContext, useContext, useState, useEffect } from 'react';

const ReviewContext = createContext();

const INITIAL_REVIEWS = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Homeowner",
        content: "My washing machine broke down on a Sunday. Mosin came within 2 hours and fixed it. Excellent service!",
        rating: 5,
        date: "2023-10-15"
    },
    {
        id: 2,
        name: "Rahul Mehta",
        role: "Local Resident",
        content: "Very professional technician. He explained the issue with my fridge and the cost was reasonable. Highly recommended.",
        rating: 5,
        date: "2023-11-02"
    },
    {
        id: 3,
        name: "Priya Sharma",
        role: "Homeowner",
        content: "Professional, clean, and fast. They fixed the leaking issue in my washing machine perfectly.",
        rating: 5,
        date: "2023-12-10"
    }
];

export function ReviewProvider({ children }) {
    const [reviews, setReviews] = useState(() => {
        const saved = localStorage.getItem('customer_reviews');
        return saved ? JSON.parse(saved) : INITIAL_REVIEWS;
    });

    useEffect(() => {
        localStorage.setItem('customer_reviews', JSON.stringify(reviews));
    }, [reviews]);

    const addReview = (review) => {
        const newReview = {
            ...review,
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            role: "Verified Customer"
        };
        setReviews([newReview, ...reviews]);
    };

    return (
        <ReviewContext.Provider value={{ reviews, addReview }}>
            {children}
        </ReviewContext.Provider>
    );
}

export function useReviews() {
    return useContext(ReviewContext);
}
