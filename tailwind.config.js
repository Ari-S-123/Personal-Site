/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './.svelte-kit/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			primary: '#000000',
			secondary: '#ffffff',
			accent: '#f96743',
			background: '#000000',
			text: '#ffffff'
		},
		fontFamily: {
			svelte: ['Overpass', '"Segoe UI"', 'Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			body: [
				'Geist',
				'Inter',
				'"Segoe UI"',
				'"Open Sans"',
				'Arial',
				'ui-sans-serif',
				'system-ui',
				'sans-serif'
			]
		}
	},
	plugins: []
};
