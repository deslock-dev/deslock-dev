/**
 * File Name: tailwind.config.ts
 * Author: Deslock
 * Creation Date: 2024
 * Description: tailwind.config.ts
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

import { heroui } from "@heroui/react";
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
        "./styles/**/*.css",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#faf5ff",
                    100: "#f3e8ff",
                    200: "#e9d5ff",
                    300: "#d8b4fe",
                    400: "#c084fc",
                    500: "#a855f7",
                    600: "#9333ea",
                    700: "#7c3aed",
                    800: "#6b21a8",
                    900: "#581c87",
                    950: "#3b0764",
                },
                accent: {
                    blue: "#3b82f6",
                    "blue-light": "#60a5fa",
                    purple: "rgb(var(--accent-purple))",
                    "purple-light": "rgb(var(--accent-purple-light))",
                },
                background: {
                    light: "rgb(var(--background-start-rgb))",
                    dark: "rgb(var(--background-end-rgb))",
                },
                foreground: {
                    DEFAULT: "rgb(var(--foreground-rgb))",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
                display: ["var(--font-calsans)"],
            },
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(50% 50% at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                "fade-in": "fade-in 3s ease-in-out forwards",
                title: "title 3s ease-out forwards",
                "fade-left": "fade-left 3s ease-in-out forwards",
                "fade-right": "fade-right 3s ease-in-out forwards",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                aurora: "aurora 15s ease infinite",
                floating: "floating 3s ease-in-out infinite",
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        opacity: "0%",
                    },
                    "75%": {
                        opacity: "0%",
                    },
                    "100%": {
                        opacity: "100%",
                    },
                },
                "fade-left": {
                    "0%": {
                        transform: "translateX(100%)",
                        opacity: "0%",
                    },

                    "30%": {
                        transform: "translateX(0%)",
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "0%",
                    },
                },
                "fade-right": {
                    "0%": {
                        transform: "translateX(-100%)",
                        opacity: "0%",
                    },

                    "30%": {
                        transform: "translateX(0%)",
                        opacity: "100%",
                    },
                    "100%": {
                        opacity: "0%",
                    },
                },
                title: {
                    "0%": {
                        "line-height": "0%",
                        "letter-spacing": "0.25em",
                        opacity: "0",
                    },
                    "25%": {
                        "line-height": "0%",
                        opacity: "0%",
                    },
                    "80%": {
                        opacity: "100%",
                    },

                    "100%": {
                        "line-height": "100%",
                        opacity: "100%",
                    },
                },
                aurora: {
                    "0%": {
                        transform: "rotate(0deg)",
                    },
                    "100%": {
                        transform: "rotate(360deg)",
                    },
                },
                floating: {
                    "0%": {
                        transform: "translateY(0px) scale(1)",
                        opacity: "0.3",
                    },
                    "50%": {
                        transform: "translateY(-20px) scale(1.1)",
                        opacity: "0.6",
                    },
                    "100%": {
                        transform: "translateY(0px) scale(1)",
                        opacity: "0.3",
                    },
                },
            },
        },
    },
    plugins: [
        heroui({
            themes: {
                light: {
                    colors: {
                        background: "#faf5ff",
                        foreground: "#1e1b2e",
                        primary: {
                            50: "#faf5ff",
                            100: "#f3e8ff",
                            200: "#e9d5ff",
                            300: "#d8b4fe",
                            400: "#c084fc",
                            500: "#a855f7",
                            600: "#9333ea",
                            700: "#7c3aed",
                            800: "#6b21a8",
                            900: "#581c87",
                            DEFAULT: "#7c3aed",
                            foreground: "#ffffff",
                        },
                        default: {
                            50: "#faf5ff",
                            100: "#f3e8ff",
                            200: "#e9d5ff",
                            300: "#d8b4fe",
                            400: "#c084fc",
                            500: "#a855f7",
                            600: "#9333ea",
                            700: "#7c3aed",
                            800: "#6b21a8",
                            900: "#581c87",
                            DEFAULT: "#e9d5ff",
                            foreground: "#1e1b2e",
                        },
                        secondary: {
                            50: "#eff6ff",
                            100: "#dbeafe",
                            200: "#bfdbfe",
                            300: "#93c5fd",
                            400: "#60a5fa",
                            500: "#3b82f6",
                            600: "#2563eb",
                            700: "#1d4ed8",
                            800: "#1e40af",
                            900: "#1e3a8a",
                            DEFAULT: "#3b82f6",
                            foreground: "#ffffff",
                        },
                    },
                },
                dark: {
                    colors: {
                        background: "#0a0a1a",
                        foreground: "#f0e6ff",
                        primary: {
                            50: "#faf5ff",
                            100: "#f3e8ff",
                            200: "#e9d5ff",
                            300: "#d8b4fe",
                            400: "#c084fc",
                            500: "#a855f7",
                            600: "#9333ea",
                            700: "#7c3aed",
                            800: "#6b21a8",
                            900: "#581c87",
                            DEFAULT: "#a855f7",
                            foreground: "#ffffff",
                        },
                        default: {
                            50: "#0a0a1a",
                            100: "#111128",
                            200: "#1a1a3e",
                            300: "#2d2b55",
                            400: "#4a4580",
                            500: "#6b63a0",
                            600: "#9690c0",
                            700: "#c4bfe0",
                            800: "#e2dff0",
                            900: "#f0eef8",
                            DEFAULT: "#1a1a3e",
                            foreground: "#f0e6ff",
                        },
                    },
                },
            },
        }),
    ],
};
export default config;
