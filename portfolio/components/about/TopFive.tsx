"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export default function TopFive() {
    const { t } = useTranslation();
    const categories = t<any[]>("about.content.top_five.categories", {
        returnObjects: true,
    });
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div>
            {/* Category Tabs */}
            <div className="mb-4 flex flex-wrap gap-2">
                {categories.map((cat: any, index: number) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                            activeTab === index
                                ? "border border-purple-400/50 bg-purple-600/30 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                                : "border border-purple-500/20 bg-purple-900/10 text-purple-300/80 hover:border-blue-500/40 hover:text-purple-200"
                        }`}
                    >
                        <span className="mr-1">{cat.icon}</span>
                        {cat.category}
                    </button>
                ))}
            </div>

            {/* Active Category List */}
            <div className="space-y-2">
                {categories[activeTab]?.items.map(
                    (item: string, index: number) => (
                        <div
                            key={index}
                            className="flex items-center gap-3 rounded-lg border border-purple-500/10 bg-purple-900/5 p-3 transition-all duration-300 hover:border-blue-500/30 hover:bg-purple-900/15 dark:border-purple-400/10 dark:bg-purple-950/20"
                        >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-purple-500/30 to-blue-500/30 text-sm font-bold text-purple-200">
                                {index + 1}
                            </span>
                            <span className="font-medium text-purple-100 dark:text-purple-200">
                                {item}
                            </span>
                            {index === 0 && (
                                <span className="ml-auto text-yellow-400" title="Top pick">
                                    👑
                                </span>
                            )}
                        </div>
                    ),
                )}
            </div>
        </div>
    );
}
