"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function Stats() {
    const { t } = useTranslation();

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {t<any[]>("about.content.stats.items", {
                returnObjects: true,
            }).map((stat: any, index: number) => (
                <div
                    key={index}
                    className="neon-glow flex flex-col items-center gap-2 rounded-xl border border-purple-500/20 bg-purple-900/10 p-4 text-center transition-all duration-300 hover:border-blue-400/40 hover:bg-purple-900/20 dark:border-purple-400/20 dark:bg-purple-950/30"
                >
                    <span className="text-3xl" role="img" aria-label={stat.label}>
                        {stat.icon}
                    </span>
                    <span className="bg-linear-to-r from-purple-300 to-blue-300 bg-clip-text text-2xl font-bold text-transparent">
                        {stat.value}
                    </span>
                    <span className="text-xs text-purple-400/80 dark:text-purple-300/60">
                        {stat.label}
                    </span>
                </div>
            ))}
        </div>
    );
}
