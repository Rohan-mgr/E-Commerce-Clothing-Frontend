/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '649px',
            md: '768px',
            md2: '992px',
            lg: '1024px',
            xl: '1280',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                cursive: ['Cookie', 'cursive'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            keyframes: {
                animateWidth: {
                    from: {
                        width: '0%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                    },
                    to: {
                        width: '100%',
                        left: '0',
                        transform: 'translateX(0)',
                    },
                },
            },
            animation: {
                animateWidth: 'animateWidth .4s ease-in-out 0s forwards',
                animateWidthReverse:
                    'animateWidth .4s ease-in-out 0s forwards reverse',
            },
        },
    },
    plugins: [],
};
