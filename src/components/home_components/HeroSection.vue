<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <!-- IMAGE -->
      <img
        src="/images/fedaia01.jpg"
        alt="trail running"
        class="hero-image"
      />

      <!-- OVERLAY -->
      <div class="hero-overlay" />

      <!-- CONTENT -->
      <div class="hero-content">
        <p class="hero-tag">
          {{ t('homePage.tag') }}
        </p>

        <h1 class="hero-title">
          {{ t('homePage.title') }}
        </h1>

        <p class="hero-subtitle">
          {{ t('homePage.subtitle') }}
        </p>

        <div class="hero-actions">
          <RouterLink
            to="/projects"
            class="hero-button hero-button-primary"
          >
            {{ t('homePage.CTA.projects') }}
          </RouterLink>

          <RouterLink
            to="/races"
            class="hero-button hero-button-secondary"
          >
            {{ t('homePage.CTA.races') }}
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding: 2.5rem 1.5rem 0; /* pt-10 px-6 */
}

.hero-container {
  position: relative;
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem; /* rounded-[3rem] */
}

.hero-image {
  display: block;
  width: 100%;
  height: 720px;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgb(0 0 0 / 0.8),
    rgb(0 0 0 / 0.3),
    rgb(0 0 0 / 0.1)
  );
}

.hero-content {
  position: absolute;
  bottom: 3.5rem; /* bottom-14 */
  left: 3.5rem;   /* left-14 */
  max-width: 56rem; /* max-w-4xl */
}

.hero-tag {
  margin-bottom: 1.5rem; /* mb-6 */
  font-size: 0.875rem; /* text-sm */
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--color-secondary);
}

.hero-title {
  margin: 0;
  font-size: 3.75rem; /* text-6xl */
  font-weight: 900; /* font-black */
  line-height: 1;
  letter-spacing: -0.025em; /* tracking-tight */
  color: white;
}

.hero-subtitle {
  margin-top: 2rem; /* mt-8 */
  max-width: 42rem; /* max-w-2xl */
  font-size: 1.25rem; /* text-xl */
  line-height: 2.25rem; /* leading-9 */
  color: rgb(255 255 255 / 0.8);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* gap-4 */
  margin-top: 2.5rem; /* mt-10 */
}

.hero-button {
  display: inline-block;
  padding: 1rem 1.75rem; /* py-4 px-7 */
  border-radius: 1rem; /* rounded-2xl */
  font-weight: 600; /* font-semibold */
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;
}

.hero-button-primary {
  background-color: var(--color-primary);
  color: white;
}

.hero-button-primary:hover {
  background-color: var(--color-primary-hover);
}

.hero-button-secondary {
  border: 1px solid rgb(255 255 255 / 0.2);
  background-color: rgb(255 255 255 / 0.3);
  color: white;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.hero-button-secondary:hover {
  background-color: rgb(255 255 255 / 0.2);
}

/* md:text-8xl */
@media (min-width: 768px) {
  .hero-title {
    font-size: 6rem;
  }
}
</style>