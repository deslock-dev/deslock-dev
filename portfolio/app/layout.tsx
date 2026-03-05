/**
 * File Name: layout.tsx
 * Author: Deslock
 * Creation Date: 2024
 * Description: layout.tsx
 * Copyright (c) 2024 Tux Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the 'Software'), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

"use client";

import "@/styles/globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import AnimatedBackground from "../components/layout/AnimatedBackground";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = localFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={[inter.variable, calSans.variable].join(" ")}
            suppressHydrationWarning
        >
            <head>
                <title>Deslock - Unlock Your Next Adventure</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=5"
                />
                <meta
                    name="description"
                    content="Deslock - Entertainment hub for Video Games, Anime, Manga, Series, and Films. Track, rate, and share your adventures."
                />
                <meta
                    name="keywords"
                    content="Deslock, Entertainment, Video Games, Anime, Manga, Series, Films, Reviews, Collections, Gaming, Otaku, Elden Ring, One Piece, Frieren, Attack on Titan, JRPG, Souls-like"
                />
                <meta name="author" content="Deslock" />
                <meta name="theme-color" content="#0a0a1a" />
                <meta name="format-detection" content="telephone=no" />

                {/* Robots */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow" />

                {/* OpenGraph */}
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="fr_FR" />
                <meta property="og:url" content="https://deslock.dev" />
                <meta property="og:site_name" content="Deslock" />
                <meta property="og:title" content="Deslock - Unlock Your Next Adventure" />
                <meta property="og:description" content="Entertainment hub for Video Games, Anime, Manga, Series, and Films. Track, rate, and share your adventures." />
                <meta property="og:image" content="https://deslock.dev/app/bio/deslock.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Deslock" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@deslock" />
                <meta name="twitter:creator" content="@deslock" />
                <meta name="twitter:title" content="Deslock - Unlock Your Next Adventure" />
                <meta name="twitter:description" content="Entertainment hub for Video Games, Anime, Manga, Series, and Films. Track, rate, and share your adventures." />
                <meta name="twitter:image" content="https://deslock.dev/app/bio/deslock.jpg" />

                {/* Links */}
                <link rel="canonical" href="https://deslock.dev" />
                <link rel="alternate" hrefLang="en" href="https://deslock.dev/en" />
                <link rel="alternate" hrefLang="fr" href="https://deslock.dev/fr" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/manifest.json" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Person",
                            "@id": "https://deslock.dev#person",
                            name: "Deslock",
                            url: "https://deslock.dev",
                            image: "https://deslock.dev/app/bio/deslock.jpg",
                            sameAs: [
                                "https://github.com/deslock-dev",
                                "https://x.com/deslock",
                                "https://myanimelist.net/profile/deslock",
                                "https://steamcommunity.com/id/deslock",
                            ],
                            knowsAbout: [
                                "Video Games",
                                "Anime",
                                "Manga",
                                "Series",
                                "Films",
                                "Entertainment",
                                "Gaming",
                            ],
                        }),
                    }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            "@id": "https://deslock.dev#website",
                            url: "https://deslock.dev",
                            name: "Deslock",
                            description: "Deslock - Entertainment Hub for Video Games, Anime, Manga, Series, and Films",
                            publisher: {
                                "@id": "https://deslock.dev#person",
                            },
                            inLanguage: ["en-US", "fr-FR"],
                        }),
                    }}
                />
            </head>
            <body suppressHydrationWarning>
                <HeroUIProvider>
                    <NextThemesProvider
                        attribute="class"
                        defaultTheme="dark"
                        enableSystem={true}
                        disableTransitionOnChange={false}
                    >
                        <AnimatedBackground>{children}</AnimatedBackground>
                    </NextThemesProvider>
                </HeroUIProvider>
            </body>
        </html>
    );
}
