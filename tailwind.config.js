/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "5xl": "20px 20px 50px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [require("daisyui")],
};
