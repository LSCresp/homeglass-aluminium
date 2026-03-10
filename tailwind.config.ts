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
                celere: {
                    gold: "#D4AF37",
                    goldLight: "#F5DEB3",
                    black: "#000000",
                    dark: "#FAFAFA",
                    gray: "#555555",
                    white: "#FDFBF7",
                },
            },
            backgroundImage: {
                'gold-gradient': 'linear-gradient(135deg, #D4AF37, #F5DEB3)',
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
