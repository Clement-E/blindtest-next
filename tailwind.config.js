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
    		colors: {
				myplaylist :"hsl(var(--myplaylist))",
				"myplaylist-foreground": "hsl(var(--myplaylist-foreground))",
				myspotify :"hsl(var(--myspotify))",
				"myspotify-foreground": "hsl(var(--myspotify-foreground))",
				myplayer :"hsl(var(--myplayer))",
				"myplayer-foreground": "hsl(var(--myplayer-foreground))",
				myscoreboard :"hsl(var(--myscoreboard))",
				"myscoreboard-foreground": "hsl(var(--myscoreboard-foreground))",
				myrank :"hsl(var(--myrank))",
				"myrank-foreground": "hsl(var(--myrank-foreground))",
				mymedia :"hsl(var(--mymedia))",
				"mymedia-foreground": "hsl(var(--mymedia-foreground))",
			}
    	}
    },
	plugins: [require("tailwindcss-animate")],
  }