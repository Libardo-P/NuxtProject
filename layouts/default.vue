<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />

    <!-- Compensar o header fixo com padding-top -->
    <main class="container flex-grow-1" style="padding-top: 100px;">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>
