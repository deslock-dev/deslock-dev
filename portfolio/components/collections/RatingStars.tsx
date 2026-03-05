"use client";

interface RatingStarsProps {
    rating: number | null;
    max?: number;
}

export default function RatingStars({ rating, max = 10 }: RatingStarsProps) {
    if (rating === null || rating === undefined) {
        return (
            <span className="text-xs italic text-purple-400/50">
                Not rated
            </span>
        );
    }

    // Convert to 5-star scale
    const stars = (rating / max) * 5;
    const fullStars = Math.floor(stars);
    const hasHalf = stars - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

    return (
        <div className="flex items-center gap-1">
            <div className="flex">
                {Array.from({ length: fullStars }).map((_, i) => (
                    <span key={`full-${i}`} className="text-yellow-400">
                        ★
                    </span>
                ))}
                {hasHalf && <span className="text-yellow-400">★</span>}
                {Array.from({ length: emptyStars }).map((_, i) => (
                    <span key={`empty-${i}`} className="text-purple-700/40">
                        ★
                    </span>
                ))}
            </div>
            <span className="ml-1 text-xs text-purple-300/70">
                {rating}/{max}
            </span>
        </div>
    );
}
