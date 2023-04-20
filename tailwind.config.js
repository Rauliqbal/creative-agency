/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}", "./app.vue"],
   theme: {
      extend: {
         fontFamily: {
            inter: ["Inter", "sans-serif"],
         },
         container: {
            center: "auto",
            padding: {
               sm: "1rem",
            },
            screens: {
               md: "720px",
               lg: "1024px",
               xl: "1060px",
               1440: "1280px",
            },
         },
         backgroundImage: {
            "hero-pattern": "url('/assets/images/Ornament Box.svg')",
         },
      },
   },
   plugins: [],
};
