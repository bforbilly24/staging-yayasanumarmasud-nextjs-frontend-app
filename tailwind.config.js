/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
	darkMode: ['class'],
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		container: {
			padding: '2.5rem',
			screens: {
				'2xl': '1440px',
			},
		},
		extend: {
			colors: {
				'cit-bg': '#F9F9F9',
				'cit-main': '#017D2B',
				'cit-primary': '#0F4631',
				'cit-secondary': '#289129',
				'cit-tertiary': '#50A528',
				'cit-quaternary': '#78B926',
				'cit-quinary': '#9FCC24',
				'cit-senary': '#C7E023',
				'cit-skeleton': '#D3D3D3',
				'cit-content': '#6B6B6B',
				'cit-black': '#0C0C0C',
				'cit-hover': '#D1FFD1',
				'cit-white': '#FDFDFD',
				'cit-card-1': '#F0F6EF',
				'cit-divider': '#E3E6EA',
				'cit-white-opacity-90': 'rgba(255, 255, 255, 0.9)',
				'cit-dark-mode-bg': '#333333',
				'cit-dark-mode-text': '#ffffff',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					1: 'hsl(var(--chart-1))',
					2: 'hsl(var(--chart-2))',
					3: 'hsl(var(--chart-3))',
					4: 'hsl(var(--chart-4))',
					5: 'hsl(var(--chart-5))',
				},
			},
			transitionProperty: {
				'bg-opacity': 'background-color',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				marquee: {
					from: {
						transform: 'translateX(0)',
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))',
					},
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)',
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))',
					},
				},
			},
			animation: {
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({});
		}),

		require('tailwindcss-animate'),
		require('tailwind-scrollbar-hide'),
	],
};
