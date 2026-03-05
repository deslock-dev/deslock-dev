"use client";

interface StatusBadgeProps {
    status: string;
    statusLabels: Record<string, string>;
}

const statusColors: Record<string, string> = {
    playing:
        "border-green-500/40 bg-green-500/20 text-green-300",
    watching:
        "border-blue-500/40 bg-blue-500/20 text-blue-300",
    reading:
        "border-amber-500/40 bg-amber-500/20 text-amber-300",
    completed:
        "border-purple-500/40 bg-purple-500/20 text-purple-300",
    backlog:
        "border-gray-500/40 bg-gray-500/20 text-gray-300",
    plan_to_watch:
        "border-blue-500/40 bg-blue-500/20 text-blue-300",
    plan_to_read:
        "border-blue-500/40 bg-blue-500/20 text-blue-300",
    dropped:
        "border-red-500/40 bg-red-500/20 text-red-300",
    watched:
        "border-purple-500/40 bg-purple-500/20 text-purple-300",
};

const activeStatuses = ["playing", "watching", "reading"];

export default function StatusBadge({ status, statusLabels }: StatusBadgeProps) {
    const colorClass = statusColors[status] || statusColors.backlog;
    const isActive = activeStatuses.includes(status);

    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${colorClass}`}
        >
            {isActive && (
                <span className="status-pulse inline-block h-1.5 w-1.5 rounded-full bg-current" />
            )}
            {statusLabels[status] || status}
        </span>
    );
}
