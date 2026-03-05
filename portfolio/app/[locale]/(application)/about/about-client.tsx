"use client";

import { Card, CardBody } from "@heroui/react";
import { useTranslation } from "@/hooks/useTranslation";
import Stats from "@/components/about/Stats";
import TopFive from "@/components/about/TopFive";
import FavoriteGenres from "@/components/about/FavoriteGenres";
import CurrentStatus from "@/components/about/CurrentStatus";

export default function AboutClient() {
    const { t } = useTranslation();

    return (
        <div className="space-y-6">
            {/* Hero Section */}
            <div className="text-center">
                <h1 className="font-display bg-linear-to-r from-purple-300 via-purple-400 to-blue-400 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                    {t("about.content.personnal_info.myname")}
                </h1>
                <p className="neon-text mt-2 text-lg text-purple-300/80 dark:text-purple-200/80">
                    {t("about.content.personnal_info.mydesc")}
                </p>
            </div>

            {/* Stats Dashboard */}
            <Stats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* Left Column - Profile */}
                <Card className="border border-purple-500/20 bg-black/10 p-4 backdrop-blur-sm">
                    <CardBody>
                        {/* Bio */}
                        <h2 className="mb-4 text-xl font-semibold text-purple-200">
                            {t("about.content.bio.title")}
                        </h2>
                        <div className="space-y-3 px-2">
                            {t<string[]>("about.content.bio.items", {
                                returnObjects: true,
                            }).map((text: string, index: number) => (
                                <p
                                    key={index}
                                    className="text-default-400 leading-relaxed"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>

                        {/* Favorite Genres */}
                        <h2 className="my-4 text-xl font-semibold text-purple-200">
                            {t("about.content.favorite_genres.title")}
                        </h2>
                        <div className="px-2">
                            <FavoriteGenres />
                        </div>

                        {/* Currently Experiencing */}
                        <h2 className="my-4 text-xl font-semibold text-purple-200">
                            {t("about.content.currently.title")}
                        </h2>
                        <div className="px-2">
                            <CurrentStatus />
                        </div>

                        {/* Gaming Platforms */}
                        <h2 className="my-4 text-xl font-semibold text-purple-200">
                            {t("about.content.platforms.title")}
                        </h2>
                        <div className="flex flex-wrap gap-2 px-2">
                            {t<string[]>("about.content.platforms.items", {
                                returnObjects: true,
                            }).map((platform: string, index: number) => (
                                <span
                                    key={index}
                                    className="rounded-lg border border-blue-500/20 bg-blue-900/10 px-3 py-1.5 text-sm text-blue-300 dark:border-blue-400/20 dark:bg-blue-950/30 dark:text-blue-400"
                                >
                                    {platform}
                                </span>
                            ))}
                        </div>
                    </CardBody>
                </Card>

                {/* Right Column - Top 5 */}
                <Card className="border border-purple-500/20 bg-black/10 p-4 backdrop-blur-sm">
                    <CardBody>
                        <h2 className="mb-4 text-xl font-semibold text-purple-200">
                            {t("about.content.top_five.title")}
                        </h2>
                        <TopFive />
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
