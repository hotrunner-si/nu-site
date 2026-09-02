<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue'
</script>
<template>
  <nav class="section-nav" aria-label="Navigacija po strani">
    <div class="section-links"><a href="#about">O meni</a><a href="#routes">Gpx</a><a href="#gallery">Galerija</a></div>
    <ThemeToggle />
  </nav>
</template>

<style scoped>
.section-nav { position: sticky; z-index: 5; top: 0; display: flex; align-items: center; justify-content: flex-end; gap: 1.4rem; padding: 1.25rem clamp(1.5rem, 4vw, 4.5rem); border-bottom: 1px solid var(--color-border); background: var(--color-nav-bg); backdrop-filter: blur(18px); }
.section-links { display: flex; align-items: center; gap: 1.4rem; }
a { color: var(--color-muted); font-size: .72rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
a:hover { color: var(--color-accent); }

@media (max-width: 980px) { .section-nav { justify-content: center; } }
@media (max-width: 680px) {
  .section-nav { justify-content: space-between; gap: .75rem; padding: .9rem .8rem; }
  .section-links { gap: .75rem; overflow-x: auto; }
  a { white-space: nowrap; }
}
</style>
