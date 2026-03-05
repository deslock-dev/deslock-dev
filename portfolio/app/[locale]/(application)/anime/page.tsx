import { Metadata } from "next";
import CategoryPageClient from "@/components/collections/CategoryPageClient";

export const metadata: Metadata = {
    title: "Anime",
    description: "Deslock's anime collection — watching, completed, and plan to watch.",
};

export default function AnimePage() {
    return (
        <CategoryPageClient
            categoryKey="anime"
            icon="🎬"
            relevantStatuses={["watching", "completed", "plan_to_watch", "dropped"]}
        />
    );
}
