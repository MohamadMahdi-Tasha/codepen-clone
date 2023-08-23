// COdes By Mahdi Tasha
// Importing Part
import type { Config } from 'tailwindcss'

// Defining TailwindCSS Config
const config: Config = {
  content: [
      './app/*.{tsx,ts,js,jsx}',
      './app/**/*.{tsx,ts,js,jsx}',
      './app/**/**/*.{tsx,ts,js,jsx}',
      './components/*.{tsx,ts,js,jsx}',
      './components/**/*.{tsx,ts,js,jsx}',
      './chunks/*.{tsx,ts,js,jsx}',
      './chunks/**/*.{tsx,ts,js,jsx}',
  ],
  theme: {
      colors: {
          headerBg: 'hsl(232.5deg 11.76% 13.33%)',
          dropdownBg: 'hsl(226.15deg 12.04% 40.65%)',
          mainBg: 'hsl(225deg 9.52% 8.24%)',
          white: '#ffffff',
          black: '#000000',
          green: 'hsl(139.41deg 58.62% 54.51%)',
          purple: 'hsl(274.88deg 70.49% 64.12%)',
          yellow: 'hsl(49.32deg 100% 62.55%)',
          blue: 'hsl(196.18deg 100% 52.75%)',
      }
  },
  plugins: [],
}

// Exporting Configs
export default config;