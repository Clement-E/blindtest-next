/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
	  './pages/**/*.{html,js}',
    //'./components/**/*.{html,js}',
	'./@/components/**/*.{ts,tsx}',
	  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	  './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './@/components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  }