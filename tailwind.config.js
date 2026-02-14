/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                // Vibrant Spring Palette
                brand: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981', // Emerald 500 - Vivid Primary
                    600: '#059669', // Emerald 600
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                },
                spring: {
                    tulip: {
                        DEFAULT: '#db2777', // Pink 600
                        50: '#fdf2f8',
                        100: '#fce7f3',
                        200: '#fbcfe8',
                        300: '#f9a8d4',
                        400: '#f472b6',
                        500: '#ec4899',
                        600: '#db2777',
                        700: '#be185d',
                        800: '#9d174d',
                        900: '#831843',
                        950: '#500724',
                    },
                    sun: {
                        DEFAULT: '#eab308', // Yellow 500
                        50: '#fefce8',
                        100: '#fef9c3',
                        200: '#fef08a',
                        300: '#fde047',
                        400: '#facc15',
                        500: '#eab308',
                        600: '#ca8a04',
                        700: '#a16207',
                        800: '#854d0e',
                        900: '#713f12',
                        950: '#422006',
                    },
                    iris: {
                        DEFAULT: '#7c3aed', // Violet 600
                        50: '#f5f3ff',
                        100: '#ede9fe',
                        200: '#ddd6fe',
                        300: '#c4b5fd',
                        400: '#a78bfa',
                        500: '#8b5cf6',
                        600: '#7c3aed',
                        700: '#6d28d9',
                        800: '#5b21b6',
                        900: '#4c1d95',
                        950: '#2e1065',
                    },
                    poppy: {
                        DEFAULT: '#ea580c', // Orange 600
                        50: '#fff7ed',
                        100: '#ffedd5',
                        200: '#fed7aa',
                        300: '#fdba74',
                        400: '#fb923c',
                        500: '#f97316',
                        600: '#ea580c',
                        700: '#c2410c',
                        800: '#9a3412',
                        900: '#7c2d12',
                        950: '#431407',
                    },
                    sky: {
                        DEFAULT: '#0ea5e9', // Sky 500
                        50: '#f0f9ff',
                        100: '#e0f2fe',
                        200: '#bae6fd',
                        300: '#7dd3fc',
                        400: '#38bdf8',
                        500: '#0ea5e9',
                        600: '#0284c7',
                        700: '#0369a1',
                        800: '#075985',
                        900: '#0c4a6e',
                        950: '#082f49',
                    },
                    leaf: {
                        DEFAULT: '#65a30d', // Lime 600
                        50: '#f7fee7',
                        100: '#ecfccb',
                        200: '#d9f99d',
                        300: '#bef264',
                        400: '#a3e635',
                        500: '#84cc16',
                        600: '#65a30d',
                        700: '#4d7c0f',
                        800: '#3f6212',
                        900: '#365314',
                        950: '#1a2e05',
                    },
                },
                paper: '#fefce8', // Very light warm yellow/cream background (Yellow 50)
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'slideUp': 'slideUp 0.8s ease-out forwards',
                'morph': 'morph 8s ease-in-out infinite',
                'morph-slow': 'morph 12s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-15px)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                morph: {
                    '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                    '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
                    '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
                }
            }
        },
    },
    plugins: [],
}
