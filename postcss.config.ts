/** @type { import('postcss-load-config').Config } */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    'postcss-simple-vars': {},
  }
}