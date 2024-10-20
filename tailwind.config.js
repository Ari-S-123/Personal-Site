/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './.svelte-kit/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#000000',
				secondary: '#ffffff',
				accent: '#f96743',
				background: '#000000',
				text: '#ffffff'
			}
		}
	},
	plugins: []
};
