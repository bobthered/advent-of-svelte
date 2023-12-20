/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/sveltewind/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fff7f5',
					100: '#ffece5',
					200: '#ffd9cc',
					300: '#ffbaa3',
					400: '#ff7547',
					500: '#ff3e00',
					600: '#a82a00',
					700: '#7a1f00',
					800: '#471200',
					900: '#240900',
					950: '#140500'
				},
				slate: {
					50: '#f9fafa',
					100: '#f1f2f4',
					200: '#e3e5e8',
					300: '#ccd0d6',
					400: '#99a0ad',
					500: '#687182',
					600: '#4b515d',
					700: '#363b44',
					800: '#202328',
					900: '#101114',
					950: '#090a0b'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
