import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"],
      },
      keyframes: {
        ping_logo: {
          "0%, 100%": { transform: "scale(1)" },
          "60%": { transform: "scale(0.9)", opacity: "0.8" },
        }
      },
      animation: {
        ping_logo: "ping_logo 2s"
      }
    }  
  },
  plugins: [],
}
export default config
