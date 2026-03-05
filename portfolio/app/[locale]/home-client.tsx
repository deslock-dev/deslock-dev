"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";

export default function HomeClient() {
    const { locale } = useTranslation();

    const navigation = [
        { name: "About", href: `/${locale}/about` },
        { name: "🎮 Games", href: `/${locale}/video-games` },
        { name: "🎬 Anime", href: `/${locale}/anime` },
        { name: "📖 Manga", href: `/${locale}/manga` },
        { name: "📺 Series", href: `/${locale}/series` },
        { name: "🎥 Films", href: `/${locale}/films` },
        { name: "Blog", href: `/${locale}/blog` },
        { name: "Contact", href: `/${locale}/contact` },
    ];

    return (
        <main className="flex h-screen flex-col items-center justify-center">
            {/* Skip to main content link for screen readers */}
            <a
                href="#main-content"
                className="bg-primary sr-only z-50 rounded-md px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-4 focus:left-4"
                aria-label="Skip to main content"
            >
                Skip to main content
            </a>

            {/* Navigation */}
            <nav
                className="animate-fade-in my-16"
                role="navigation"
                aria-label="Main navigation"
            >
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="rounded-md px-3 py-2 text-sm text-purple-300/80 transition-all duration-500 hover:scale-110 hover:text-white focus:text-white focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-gray-950 focus:outline-none dark:text-purple-200/80"
                                aria-label={`Navigate to ${item.name} page`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Decorative lines */}
            <div
                className="animate-fade-left hidden h-px w-screen bg-linear-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 md:block"
                aria-hidden="true"
            />

            {/* Main title */}
            <div id="main-content">
                <h1 className="font-display animate-title z-10 cursor-default bg-linear-to-b from-purple-200 via-purple-400 to-blue-400 bg-clip-text text-4xl whitespace-nowrap text-transparent duration-1000 sm:text-6xl md:text-9xl">
                    Deslock
                </h1>
            </div>

            <div
                className="animate-fade-right hidden h-px w-screen bg-linear-to-r from-blue-500/0 via-purple-500/50 to-blue-500/0 md:block"
                aria-hidden="true"
            />

            {/* Subtitle */}
            <div className="animate-fade-in my-16 text-center">
                <h2 className="neon-text text-sm text-purple-300/80 dark:text-purple-200/80">
                    Unlock Your Next Adventure{" "}
                    <span role="img" aria-label="sparkle emoji">
                        ✨
                    </span>
                </h2>
                <p className="mt-4 flex items-center justify-center gap-3 text-xs text-purple-400/60">
                    <span>🎮 Games</span>
                    <span className="text-blue-400/40">|</span>
                    <span>🎬 Anime</span>
                    <span className="text-blue-400/40">|</span>
                    <span>📖 Manga</span>
                    <span className="text-blue-400/40">|</span>
                    <span>📺 Series</span>
                    <span className="text-blue-400/40">|</span>
                    <span>🎥 Films</span>
                </p>
            </div>
        </main>
    );
}
