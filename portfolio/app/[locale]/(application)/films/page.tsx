import { Metadata } from "next";
import CategoryPageClient from "@/components/collections/CategoryPageClient";

export const metadata: Metadata = {
    title: "Films",
    description: "Deslock's film collection — watched, rated, and on the watchlist.",
};

export default function FilmsPage() {
    return (
        <CategoryPageClient
            categoryKey="films"
            icon="🎥"
            relevantStatuses={["watched", "completed", "plan_to_watch"]}
        />
    );
}
