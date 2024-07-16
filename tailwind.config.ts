import type { Config } from 'tailwindcss';

import { screens, fontFamily } from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			xs: '475px',
			...screens
		},
		extend: {
			fontFamily: {
				sans: ['"Mulish Variable"', ...fontFamily.sans]
			},
			colors: {
				primary: {
					50: 'rgb(253 241 233)', // #fdf1e9
					100: 'rgb(255 237 213)', // #ffedd5
					200: 'rgb(250 203 159)', // #facb9f
					300: 'rgb(236 167 105)', // #eca769
					400: 'rgb(212 135 68)', // #d48744
					500: 'rgb(173 96 21)', // #ad6015
					600: 'rgb(130 71 6)', // #824706
					700: 'rgb(91 49 2)', // #5b3102
					800: 'rgb(64 33 0)', // #402100
					900: 'rgb(39 24 4)' // #271804
				},
				secondary: {
					50: 'rgb(254 242 245)', // #fef2f5
					100: 'rgb(255 232 233)', // #ffe8e9
					200: 'rgb(254 195 209)', // #fec3d1
					300: 'rgb(245 154 182)', // #f59ab6
					400: 'rgb(227 120 148)', // #e37894
					500: 'rgb(189 77 106)', // #bd4d6a
					600: 'rgb(148 50 70)', // #943246
					700: 'rgb(113 25 41)', // #711929
					800: 'rgb(80 19 26)', // #50131a
					900: 'rgb(49 15 17)' // #310f11
				},
				surface: {
					50: 'rgb(253 253 253)', // #fdfdfd
					100: 'rgb(247 249 250)', // #f7f9fa
					200: 'rgb(226 232 240)', // #d8dadf
					300: 'rgb(203 213 225)', // #aeb5c6
					400: 'rgb(88 110 171)', // #586eab
					500: 'rgb(46 69 133)', // #2e4585
					600: 'rgb(41 61 117)', // #293d75
					700: 'rgb(34 51 99)', // #223363
					800: 'rgb(26 39 75)', // #1a274b
					900: 'rgb(18 27 52)' // #121b34
				}
			},
			opacity: {
				1: '0.01',
				2.5: '0.025'
			}
		}
	},

	plugins: []
} as Config;
