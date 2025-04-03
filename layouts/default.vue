<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />

    <main class="container py-5 flex-grow-1">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
