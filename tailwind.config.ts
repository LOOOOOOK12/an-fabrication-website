import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				text: {
					'50': 'var(--text-50)',
					'100': 'var(--text-100)',
					'200': 'var(--text-200)',
					'300': 'var(--text-300)',
					'400': 'var(--text-400)',
					'500': 'var(--text-500)',
					'600': 'var(--text-600)',
					'700': 'var(--text-700)',
					'800': 'var(--text-800)',
					'900': 'var(--text-900)',
					'950': 'var(--text-950)',
				},
				background: 'hsl(var(--background))',
				primary: {
					'50': 'var(--primary-50)',
					'100': 'var(--primary-100)',
					'200': 'var(--primary-200)',
					'300': 'var(--primary-300)',
					'400': 'var(--primary-400)',
					'500': 'var(--primary-500)',
					'600': 'var(--primary-600)',
					'700': 'var(--primary-700)',
					'800': 'var(--primary-800)',
					'900': 'var(--primary-900)',
					'950': 'var(--primary-950)',
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					'50': 'var(--secondary-50)',
					'100': 'var(--secondary-100)',
					'200': 'var(--secondary-200)',
					'300': 'var(--secondary-300)',
					'400': 'var(--secondary-400)',
					'500': 'var(--secondary-500)',
					'600': 'var(--secondary-600)',
					'700': 'var(--secondary-700)',
					'800': 'var(--secondary-800)',
					'900': 'var(--secondary-900)',
					'950': 'var(--secondary-950)',
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					'50': 'var(--accent-50)',
					'100': 'var(--accent-100)',
					'200': 'var(--accent-200)',
					'300': 'var(--accent-300)',
					'400': 'var(--accent-400)',
					'500': 'var(--accent-500)',
					'600': 'var(--accent-600)',
					'700': 'var(--accent-700)',
					'800': 'var(--accent-800)',
					'900': 'var(--accent-900)',
					'950': 'var(--accent-950)',
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
