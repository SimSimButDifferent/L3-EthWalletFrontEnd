import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                fadeInOut: "fadeInOut 6s ease-in-out",
                fadeIn: "fadeIn 10s forwards",
                fadeOut: "fadeOut 20s backwards 1",
            },
            keyframes: {
                fadeInOut: {
                    "0%": { opacity: "0" },
                    "50%": { opacity: "1" },
                    "100%": { opacity: "0" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeOut: {
                    "100%": { opacity: "0" },
                    "0%": { opacity: "1" },
                },
                // transitionDelay: { 2000: "2000ms", 4000: "4000ms" },
            },
        },
        plugins: [],
    },
}
export default config
