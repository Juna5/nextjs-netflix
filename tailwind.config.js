/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        // container: {
        //   screens: {
        //     sm: '640px',
        //     md: '768px',
        //     lg: '1024px',
        //     xl: '1080px'
        //   }
        // },
        extend: {
            backgroundImage: {
                "gradient-to-b":
                    "linear-gradient(to bottom,rgba(20,20,20,0) 0,rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 29%,rgba(20,20,20,.58) 44%,#141414 68%,#141414 100%);",
            },
        },
    },
    plugins: [
        require("tailwindcss-textshadow"),
        require("tailwind-scrollbar-hide"),
        require("tailwind-scrollbar"),
    ],
    variants: {
        scrollbar: ["rounded"],
    },
};
