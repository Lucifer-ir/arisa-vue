/** @type {import('tailwindcss').Config} */
export default {
  // این بخش خیلی مهمه! به Tailwind میگه که کدوم فایل‌ها رو اسکن کنه
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}