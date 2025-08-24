/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // caso use Next.js App Router
  ],
  theme: {
    extend: {
      colors: {
        futurist: {
          blue: "#2979FF",      // Primária
          purple: "#5E35B1",    // Secundária
          neon: "#00E676",      // Acento
          graphite: "#121212",  // Fundo dark
          light: "#E0E0E0",     // Texto/claro
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
