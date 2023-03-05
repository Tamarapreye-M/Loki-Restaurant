/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"nav-white": "#fefefe",
				"dark-text": "#1B181D",
				"dark-green": "#475E58",
			},
		},
		fontFamily: {
			all: ["Montserrat", "sans-serif"],
			heading: ["Sawarabi Mincho", "sans-serif"],
		},
	},
	plugins: [],
};
