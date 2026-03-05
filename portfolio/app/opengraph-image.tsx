/**
 * File Name: opengraph-image.tsx
 * Author: Deslock
 * Creation Date: 2026
 * Description: Generates OpenGraph image for social media previews
 * Copyright (c) 2026 Deslock
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

import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Deslock - Unlock Your Next Adventure";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: "linear-gradient(to bottom right, #0a0a1a, #1e1033)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontFamily: "system-ui, sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "20px",
                    }}
                >
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: "bold",
                            background: "linear-gradient(90deg, #a855f7, #22d3ee)",
                            backgroundClip: "text",
                            color: "transparent",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Deslock
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            color: "#c084fc",
                        }}
                    >
                        Unlock Your Next Adventure
                    </div>
                    <div
                        style={{
                            fontSize: 24,
                            color: "#a78bfa",
                            marginTop: "20px",
                        }}
                    >
                        🎮 Video Games • 🎬 Anime • 📖 Manga • 📺 Series • 🎥 Films
                    </div>
                </div>
                <div
                    style={{
                        position: "absolute",
                        bottom: "40px",
                        fontSize: 28,
                        color: "#505050",
                    }}
                >
                    deslock.dev
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
