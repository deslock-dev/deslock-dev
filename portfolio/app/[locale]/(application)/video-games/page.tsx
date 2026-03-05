import { Metadata } from "next";
import CategoryPageClient from "@/components/collections/CategoryPageClient";

export const metadata: Metadata = {
    title: "Video Games",
    description: "Deslock's video game collection — games played, completed, and on the backlog.",
};

export default function VideoGamesPage() {
    return (
        <CategoryPageClient
            categoryKey="video_games"
            icon="🎮"
            relevantStatuses={["playing", "completed", "backlog", "dropped"]}
        />
    );
}
