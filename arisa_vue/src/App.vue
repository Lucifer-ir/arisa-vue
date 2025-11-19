<template>
  <div id="app">
    <!-- ۱. کامپوننت هدر رو اینجا استفاده می‌کنیم -->
    <Header />

    <main class="container mx-auto p-4">
      <h2>محتوای اصلی سایت</h2>
      <p>اینجا قراره مطالب و کامپوننت‌های دیگه رو قرار بدیم.</p>
    </main>
  </div>
</template>

<script setup>
// ۲. اول کامپوننت هدر رو وارد (import) می‌کنیم
import Header from './components/Header.vue';
</script>

<style scoped>
/* استایل‌های کلی برنامه */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>