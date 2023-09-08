module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{js,jsx,ts,tsx}', './src/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			display: ['dark'],
		},
		backgroundSize: ['hover'],
	},
	plugins: [],
	safelist: [
		'hover:bg-[#cc3534]',
		'hover:bg-[#00a547]',
		'hover:bg-[#0d51ae]',
		'hover:bg-[#f76659]',
		'bg-[#cc3534A0]',
		'bg-[#00a547A0]',
		'bg-[#0d51aeA0]',
		'bg-[#f76659A0]',
	],
};
