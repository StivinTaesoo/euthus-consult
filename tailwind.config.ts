import type { Config } from "tailwindcss";

export default {
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
                transGrey:
                    "linear-gradient(to right, rgba(0, 4, 40, 0.9),rgba(1, 7, 59, 0.9))",
                // "linear-gradient(to bottom, transparent, 0.1%, #020c66,  #000428)",
            },
            backgroundColor: {
                bluePrimary: "#1F75FE",
                grey: "#9D9BA7",
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
} satisfies Config;
