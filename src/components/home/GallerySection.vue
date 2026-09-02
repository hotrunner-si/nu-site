<script setup>
const gallery = [
  { src: '/images/giau01.jpg', alt: 'Gorska cesta na prelazu Giau', label: 'Dolomiti' }, { src: '/images/verbier05.jpg', alt: 'Gorski tek v Verbierju', label: 'Verbier' }, { src: '/images/soca01.jpg', alt: 'Tek po dolini Soče', label: 'Soča' }, { src: '/images/monaco02.jpg', alt: 'Tekma v Monaku', label: 'Monako' }, { src: '/images/sorapis01.jpg', alt: 'Jezero Sorapis v gorah', label: 'Sorapis' },
]
</script>
<template>
  <section id="gallery" class="section gallery-section">
    <h2>Utrinki in <em>spominki.</em></h2>
    <div class="gallery-grid">
      <figure v-for="(image, index) in gallery" :key="image.src" :class="`gallery-item gallery-item--${index + 1}`"><img
          :src="image.src" :alt="image.alt" loading="lazy" />
        <figcaption><span>0{{ index + 1 }}</span>{{ image.label }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.section {
  scroll-margin-top: var(--section-nav-height);
  padding: clamp(3.75rem, 6vw, 6rem) clamp(1.5rem, 4vw, 4.5rem);
  border-bottom: 1px solid var(--color-border);
}

h2 {
  max-width: 700px;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.3rem, 5vw, 4.3rem);
  font-weight: 400;
  letter-spacing: -.04em;
  line-height: 1;
}

h2 em {
  color: var(--color-accent);
  font-weight: 400;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 8rem;
  gap: .7rem;
  margin-top: 2.5rem;
}

.gallery-item {
  position: relative;
  grid-column: span 6;
  grid-row: span 2;
  margin: 0;
  overflow: hidden;
  border-radius: var(--radius-md);
  background: var(--color-surface-soft);
}

.gallery-item--2,
.gallery-item--4 {
  grid-column: span 6;
  grid-row: span 3;
}

.gallery-item--5 {
  grid-column: span 12;
  grid-row: span 2;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .65s cubic-bezier(.2, .7, .2, 1);
}

.gallery-item:hover img {
  transform: scale(1.04);
}

.gallery-item figcaption {
  position: absolute;
  bottom: .8rem;
  left: .8rem;
  display: flex;
  gap: .7rem;
  padding: .65rem .8rem;
  border-radius: 999px;
  background: rgba(23, 32, 25, .78);
  color: #fffaf0;
  font-size: .72rem;
  backdrop-filter: blur(10px);
}

.gallery-item figcaption span {
  color: #e69a5d;
}

@media (max-width: 680px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: clamp(11rem, 38vw, 16rem);
  }

  .gallery-item,
  .gallery-item--2,
  .gallery-item--4,
  .gallery-item--5 {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
