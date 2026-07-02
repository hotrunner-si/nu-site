<script setup>
import AppNavbar from './components/AppNavbar.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen">
    <AppNavbar />

    <RouterView />

    <AppFooter />
  </div>
</template>