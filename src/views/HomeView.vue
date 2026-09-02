<script setup>
import AboutSection from '@/components/home/AboutSection.vue'
import GallerySection from '@/components/home/GallerySection.vue'
import HomeFooter from '@/components/home/HomeFooter.vue'
import IdentityPanel from '@/components/home/IdentityPanel.vue'
import RoutesSection from '@/components/home/RoutesSection.vue'
import SectionNav from '@/components/home/SectionNav.vue'
</script>

<template>
  <main class="portfolio-shell">
    <IdentityPanel />
    <div class="story-panel">
      <SectionNav />
      <AboutSection />
      <RoutesSection />
      <GallerySection />
      <HomeFooter />
    </div>
  </main>
</template>

<style scoped>
.portfolio-shell { --section-nav-height: 5rem; display: grid; grid-template-columns: minmax(390px, 42vw) 1fr; height: 100vh; min-height: 640px; }
.story-panel { position: relative; overflow-y: auto; overscroll-behavior: contain; scrollbar-width: thin; scrollbar-color: var(--color-accent) transparent; background: radial-gradient(circle at 100% 0, rgba(82,111,85,.18), transparent 26rem), var(--color-bg); }

@media (max-width: 980px) {
  .portfolio-shell { display: block; height: auto; min-height: 0; }
  .story-panel { overflow: visible; }
}

@media (max-width: 680px) {
  .portfolio-shell { --section-nav-height: 4.35rem; }
}
</style>
