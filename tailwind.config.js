/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Primary brand colors from your LMS
                primary: {
                    DEFAULT: '#6D28D9', // Vibrant Purple
                    50: '#FAF5FF',
                    100: '#F3E8FF',
                    200: '#E9D5FF',
                    300: '#D8B4FE',
                    400: '#C084FC',
                    500: '#A855F7',
                    600: '#9333EA',
                    700: '#7E22CE',
                    800: '#6B21A8',
                    900: '#581C87',
                },
                secondary: {
                    DEFAULT: '#5B21B6', // Deep Purple
                    light: '#7C3AED',
                    dark: '#4C1D95',
                },
                accent: {
                    purple: '#8B5CF6',
                    gold: '#F59E0B',
                    blue: '#3B82F6',
                },
                // Background colors
                dark: {
                    DEFAULT: '#0F172A',
                    light: '#1E293B',
                },
                // Text colors
                text: {
                    primary: '#0F172A',
                    secondary: '#64748B',
                    light: '#94A3B8',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Poppins', 'sans-serif'],
            },
            animation: {
                'marquee': 'marquee 30s linear infinite',
                'marquee-fast': 'marquee 20s linear infinite',
            },
            screens: {
                'xs': '480px',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
