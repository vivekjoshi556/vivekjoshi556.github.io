module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {
            display: ['dark']
        },
        backgroundSize: ['hover']
    },
    plugins: [],
}
