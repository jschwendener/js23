const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./public/index.html"],
    theme: {
        extend: {
            colors: {
                gray: colors.zinc,
            },

            fontFamily: {
                sans: ["aktiv-grotesk", "sans-serif"],
            },
        },
    },
    plugins: [],
};
