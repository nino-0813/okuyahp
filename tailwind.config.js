/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
        serif: ['"Shippori Mincho"', 'serif'],
      },
      colors: {
        primary: '#333333',
        secondary: '#666666',
        accent: '#d23030',
        'paper-bg': '#f9f9f7',
        'dark-bg': '#1a1a1a'
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        'washi': "url('https://www.transparenttextures.com/patterns/rice-paper.png')"
      }
    },
  },
  plugins: [],
}

