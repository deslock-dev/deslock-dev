import { Metadata } from "next";
import CategoryPageClient from "@/components/collections/CategoryPageClient";

export const metadata: Metadata = {
    title: "Series",
    description: "Deslock's series collection — watching, completed, and plan to watch.",
};

export default function SeriesPage() {
    return (
        <CategoryPageClient
            categoryKey="series"
            icon="📺"
            relevantStatuses={["watching", "completed", "plan_to_watch", "dropped"]}
        />
    );
}
