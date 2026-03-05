"use client";

interface CollectionFiltersProps {
    categories: { key: string; label: string; icon: string }[];
    statuses: { key: string; label: string }[];
    activeCategory: string;
    activeStatus: string;
    searchQuery: string;
    onCategoryChange: (category: string) => void;
    onStatusChange: (status: string) => void;
    onSearchChange: (query: string) => void;
    onReset: () => void;
    translations: {
        search_placeholder: string;
        reset: string;
        all: string;
    };
}

export default function CollectionFilters({
    categories,
    statuses,
    activeCategory,
    activeStatus,
    searchQuery,
    onCategoryChange,
    onStatusChange,
    onSearchChange,
    onReset,
    translations,
}: CollectionFiltersProps) {
    return (
        <div className="space-y-4">
            {/* Search */}
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder={translations.search_placeholder}
                    className="w-full rounded-xl border border-purple-500/20 bg-purple-900/10 px-4 py-3 text-sm text-purple-100 placeholder-purple-400/50 backdrop-blur-sm transition-all duration-300 focus:border-blue-400/50 focus:shadow-[0_0_15px_rgba(59,130,246,0.2)] focus:outline-none dark:border-purple-400/20 dark:bg-purple-950/30"
                />
                {searchQuery && (
                    <button
                        onClick={() => onSearchChange("")}
                        className="absolute top-1/2 right-3 -translate-y-1/2 text-purple-400/50 hover:text-purple-300"
                    >
                        ✕
                    </button>
                )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
                <button
                    onClick={() => onCategoryChange("all")}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                        activeCategory === "all"
                            ? "border border-purple-400/50 bg-purple-600/30 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                            : "border border-purple-500/20 bg-purple-900/10 text-purple-300/80 hover:border-blue-500/40 hover:text-purple-200"
                    }`}
                >
                    {translations.all}
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => onCategoryChange(cat.key)}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                            activeCategory === cat.key
                                ? "border border-purple-400/50 bg-purple-600/30 text-white shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                                : "border border-purple-500/20 bg-purple-900/10 text-purple-300/80 hover:border-blue-500/40 hover:text-purple-200"
                        }`}
                    >
                        <span className="mr-1">{cat.icon}</span>
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Status Filter + Reset */}
            <div className="flex flex-wrap items-center gap-2">
                <button
                    onClick={() => onStatusChange("all")}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                        activeStatus === "all"
                            ? "border border-blue-400/50 bg-blue-600/20 text-blue-300"
                            : "border border-purple-500/15 bg-purple-900/5 text-purple-400/60 hover:text-purple-300"
                    }`}
                >
                    {translations.all}
                </button>
                {statuses.map((status) => (
                    <button
                        key={status.key}
                        onClick={() => onStatusChange(status.key)}
                        className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${
                            activeStatus === status.key
                                ? "border border-blue-400/50 bg-blue-600/20 text-blue-300"
                                : "border border-purple-500/15 bg-purple-900/5 text-purple-400/60 hover:text-purple-300"
                        }`}
                    >
                        {status.label}
                    </button>
                ))}
                {(activeCategory !== "all" ||
                    activeStatus !== "all" ||
                    searchQuery) && (
                    <button
                        onClick={onReset}
                        className="ml-auto text-xs text-purple-400/60 underline transition-colors hover:text-purple-300"
                    >
                        {translations.reset}
                    </button>
                )}
            </div>
        </div>
    );
}
