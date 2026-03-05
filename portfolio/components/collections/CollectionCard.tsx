"use client";

import StatusBadge from "./StatusBadge";
import RatingStars from "./RatingStars";

interface CollectionCardProps {
    item: {
        title: string;
        genre: string[];
        status: string;
        rating: number | null;
        note: string;
        platform?: string;
        episodes?: number | null;
        chapters?: number | null;
        seasons?: number | null;
    };
    statusLabels: Record<string, string>;
}

export default function CollectionCard({
    item,
    statusLabels,
}: CollectionCardProps) {
    // Determine the meta info based on available fields
    const metaInfo = item.platform
        ? item.platform
        : item.episodes
          ? `${item.episodes} ep.`
          : item.chapters
            ? `${item.chapters} ch.`
            : item.seasons
              ? `${item.seasons} S.`
              : null;

    return (
        <div className="group relative overflow-hidden rounded-xl border border-purple-500/15 bg-purple-900/5 p-5 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/30 hover:bg-purple-900/15 hover:shadow-[0_0_30px_rgba(99,102,241,0.12)] dark:border-purple-400/10 dark:bg-purple-950/20">
            {/* Header */}
            <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                    <h3 className="truncate text-lg font-semibold text-purple-100 transition-colors group-hover:text-white dark:text-purple-200">
                        {item.title}
                    </h3>
                    {metaInfo && (
                        <span className="text-xs text-purple-400/60">
                            {metaInfo}
                        </span>
                    )}
                </div>
                <StatusBadge status={item.status} statusLabels={statusLabels} />
            </div>

            {/* Rating */}
            <div className="mt-2">
                <RatingStars rating={item.rating} />
            </div>

            {/* Genre Tags */}
            <div className="mt-3 flex flex-wrap gap-1.5">
                {item.genre.map((g, i) => (
                    <span
                        key={i}
                        className="rounded-md bg-purple-800/20 px-2 py-0.5 text-xs text-purple-300/70 dark:bg-purple-900/30 dark:text-purple-400/70"
                    >
                        {g}
                    </span>
                ))}
            </div>

            {/* Note */}
            {item.note && (
                <p className="mt-3 text-sm leading-relaxed text-purple-300/60 italic dark:text-purple-400/50">
                    &ldquo;{item.note}&rdquo;
                </p>
            )}

            {/* Subtle glow on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-blue-500/5" />
            </div>
        </div>
    );
}
