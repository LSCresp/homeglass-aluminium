import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                homeglass: {
                    silver: "#C0C5CE",
                    silverLight: "#E2E8F0",
                    black: "#050B14",
                    dark: "#0F172A",
                    gray: "#94A3B8",
                    white: "#F8FAFC",
                },
            },
            backgroundImage: {
                'silver-gradient': 'linear-gradient(135deg, #94A3B8, #E2E8F0)',
            },
            fontFamily: {
                serif: ['var(--font-playfair)'],
                sans: ['var(--font-montserrat)'],
                display: ['var(--font-monoton)'],
            },
            keyframes: {
                shine: {
                    "0%": { transform: "translateX(-150%) skewX(-30deg)" },
                    "100%": { transform: "translateX(150%) skewX(-30deg)" }
                }
            },
            animation: {
                shine: "shine 3s ease-in-out infinite"
            }
        },
    },
    plugins: [],
};
export default config;
