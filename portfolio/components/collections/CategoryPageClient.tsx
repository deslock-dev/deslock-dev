"use client";

import { useState, useMemo } from "react";
import { useTranslation } from "@/hooks/useTranslation";
import CollectionCard from "@/components/collections/CollectionCard";

type CollectionItem = {
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

interface CategoryPageClientProps {
    categoryKey: string;
    icon: string;
    /** Which statuses are relevant for this category */
    relevantStatuses: string[];
}

export default function CategoryPageClient({
    categoryKey,
    icon,
    relevantStatuses,
}: CategoryPageClientProps) {
    const { t, locale } = useTranslation();
    const [activeStatus, setActiveStatus] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState<"default" | "rating" | "title">("default");

    // Build status labels
    const statusLabels: Record<string, string> = {};
    relevantStatuses.forEach((key) => {
        statusLabels[key] = t(`collections.status.${key}` as any);
    });

    // Get items
    const items = useMemo(() => {
        const data = t<CollectionItem[]>(`collections.data.${categoryKey}` as any, {
            returnObjects: true,
        });
        return Array.isArray(data) ? data : [];
    }, [t, categoryKey]);

    // Filter + sort
    const filteredItems = useMemo(() => {
        let result = items.filter((item) => {
            if (activeStatus !== "all" && item.status !== activeStatus) return false;
            if (searchQuery) {
                const q = searchQuery.toLowerCase();
                const matchesTitle = item.title.toLowerCase().includes(q);
                const matchesGenre = item.genre.some((g) => g.toLowerCase().includes(q));
                const matchesNote = item.note?.toLowerCase().includes(q);
                if (!matchesTitle && !matchesGenre && !matchesNote) return false;
            }
            return true;
        });

        if (sortBy === "rating") {
            result = [...result].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
        } else if (sortBy === "title") {
            result = [...result].sort((a, b) => a.title.localeCompare(b.title));
        }

        return result;
    }, [items, activeStatus, searchQuery, sortBy]);

    // Count by status
    const statusCounts = useMemo(() => {
        const counts: Record<string, number> = {};
        items.forEach((item) => {
            counts[item.status] = (counts[item.status] || 0) + 1;
        });
        return counts;
    }, [items]);

    const categoryName = t(`collections.category.${categoryKey}` as any);

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center gap-4">
                <span className="text-5xl">{icon}</span>
                <div>
                    <h1 className="font-display bg-linear-to-r from-purple-300 via-purple-400 to-blue-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                        {categoryName}
                    </h1>
                    <p className="mt-1 text-sm text-purple-400/60">
                        {items.length} {items.length === 1 ? t("collections.item") : t("collections.items")}
                    </p>
                </div>
            </div>

            {/* Search + Sort Row */}
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={t("collections.filters.search_placeholder")}
                        className="w-full rounded-xl border border-purple-500/20 bg-purple-900/10 px-4 py-3 text-sm text-purple-100 placeholder-purple-400/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-400/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] focus:outline-none dark:border-purple-400/20 dark:bg-purple-950/30"
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute top-1/2 right-3 -translate-y-1/2 text-purple-400/50 hover:text-purple-300"
                        >
                            ✕
                        </button>
                    )}
                </div>
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="rounded-xl border border-purple-500/20 bg-purple-900/10 px-4 py-3 text-sm text-purple-300 backdrop-blur-sm transition-all duration-300 focus:border-purple-400/50 focus:outline-none dark:border-purple-400/20 dark:bg-purple-950/30"
                >
                    <option value="default">{t("collections.sort.default")}</option>
                    <option value="rating">{t("collections.sort.rating")}</option>
                    <option value="title">{t("collections.sort.title")}</option>
                </select>
            </div>

            {/* Status Tabs */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => setActiveStatus("all")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeStatus === "all"
                            ? "border border-purple-400/50 bg-purple-600/30 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                            : "border border-purple-500/20 bg-purple-900/10 text-purple-300/80 hover:border-blue-500/40 hover:text-purple-200"
                    }`}
                >
                    {t("collections.filters.all")} ({items.length})
                </button>
                {relevantStatuses.map((statusKey) => {
                    const count = statusCounts[statusKey] || 0;
                    if (count === 0) return null;
                    return (
                        <button
                            key={statusKey}
                            onClick={() => setActiveStatus(statusKey)}
                            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                activeStatus === statusKey
                                    ? "border border-blue-400/50 bg-blue-600/20 text-blue-300"
                                    : "border border-purple-500/15 bg-purple-900/5 text-purple-400/60 hover:text-purple-300"
                            }`}
                        >
                            {statusLabels[statusKey]} ({count})
                        </button>
                    );
                })}
                {(activeStatus !== "all" || searchQuery) && (
                    <button
                        onClick={() => {
                            setActiveStatus("all");
                            setSearchQuery("");
                        }}
                        className="ml-auto text-xs text-purple-400/60 underline transition-colors hover:text-purple-300"
                    >
                        {t("collections.filters.reset")}
                    </button>
                )}
            </div>

            {/* Results count */}
            <p className="text-sm text-purple-400/60">
                {filteredItems.length}{" "}
                {filteredItems.length === 1 ? t("collections.item") : t("collections.items")}
                {activeStatus !== "all" || searchQuery ? ` ${t("collections.filtered")}` : ""}
            </p>

            {/* Grid */}
            {filteredItems.length === 0 ? (
                <div className="py-20 text-center">
                    <p className="text-lg text-purple-400/50">{t("collections.no_items")}</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item, index) => (
                        <CollectionCard
                            key={`${categoryKey}-${index}`}
                            item={item}
                            statusLabels={statusLabels}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
