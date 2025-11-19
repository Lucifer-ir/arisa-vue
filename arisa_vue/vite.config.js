import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    // این خط باعث میشه سرور از بیرون کانتینر در دسترس باشه
    host: true,
    // این بخش کلیدی برای حل مشکل لایو آپدیت در داکره
    watch: {
      usePolling: true, // فعال کردن حالت بررسی فعالانه
      interval: 100     // هر ۱۰۰ میلی‌ثانیه یکبار فایل‌ها رو چک کن
    }
  }
})