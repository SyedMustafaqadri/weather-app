/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import tailwindcssForms from "@tailwindcss/forms";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    tailwindcssForms,
    daisyui,
  ],
}