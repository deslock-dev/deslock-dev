"use client";

import { useTranslation } from "@/hooks/useTranslation";

export default function CurrentStatus() {
    const { t } = useTranslation();

    return (
        <div className="space-y-3">
            {t<any[]>("about.content.currently.items", {
                returnObjects: true,
            }).map((item: any, index: number) => (
                <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg border border-purple-500/20 bg-purple-900/10 p-3 transition-all duration-300 hover:border-blue-500/40 hover:bg-purple-900/20 dark:border-purple-400/20 dark:bg-purple-950/30"
                >
                    <span className="text-2xl" role="img" aria-label={item.type}>
                        {item.icon}
                    </span>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="font-semibold text-purple-100 dark:text-purple-200">
                                {item.title}
                            </span>
                            <span className="status-pulse inline-block h-2 w-2 rounded-full bg-green-400" />
                        </div>
                        <p className="text-sm text-purple-300/70 dark:text-purple-400/70">
                            {item.detail}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
