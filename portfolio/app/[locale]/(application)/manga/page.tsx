import { Metadata } from "next";
import CategoryPageClient from "@/components/collections/CategoryPageClient";

export const metadata: Metadata = {
    title: "Manga",
    description: "Deslock's manga collection — reading, completed, and plan to read.",
};

export default function MangaPage() {
    return (
        <CategoryPageClient
            categoryKey="manga"
            icon="📖"
            relevantStatuses={["reading", "completed", "plan_to_read", "dropped"]}
        />
    );
}
