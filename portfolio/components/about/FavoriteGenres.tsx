"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function FavoriteGenres() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-wrap gap-2">
            {t<string[]>("about.content.favorite_genres.items", {
                returnObjects: true,
            }).map((genre: string, index: number) => (
                <span
                    key={index}
                    className="neon-glow rounded-full border border-purple-500/30 bg-purple-900/20 px-3 py-1 text-sm text-purple-200 transition-all duration-300 hover:border-blue-400/50 hover:text-blue-300 dark:border-purple-400/30 dark:bg-purple-950/40 dark:text-purple-300"
                >
                    {genre}
                </span>
            ))}
        </div>
    );
}
