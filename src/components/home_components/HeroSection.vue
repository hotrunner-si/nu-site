<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section class="hero-section">
    <div class="hero-container">
      <img
        src="/images/fedaia01.jpg"
        alt="trail running"
        class="hero-image"
      />

      <div class="hero-overlay" />

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
          <a
            href="#about"
            class="hero-button hero-button-primary"
          >
            {{ t('homePage.CTA.work') }}
          </a>

          <a
            href="#contacts"
            class="hero-button hero-button-secondary"
          >
            {{ t('homePage.CTA.contact') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 0;
  overflow: hidden;
}

.hero-container {
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0;
  overflow: hidden;
  border-radius: 0;
}

.hero-image {
  display: block;
  width: 100%;
  height: clamp(30rem, 72vh, 45rem);
  object-fit: cover;
  object-position: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgb(0 0 0 / 0.85),
    rgb(0 0 0 / 0.35),
    rgb(0 0 0 / 0.1)
  );
}

.hero-content {
  position: absolute;
  left: 50%;
  right: auto;
  bottom: clamp(2rem, 6vw, 4rem);

  width: 100%;
  max-width: 80rem;
  padding: 0 clamp(1rem, 4vw, 1.5rem);

  transform: translateX(-50%);
}

.hero-tag {
  margin: 0 0 clamp(0.75rem, 3vw, 1.5rem);
  font-size: clamp(0.7rem, 2.5vw, 0.875rem);
  text-transform: uppercase;
  letter-spacing: clamp(0.18em, 1vw, 0.4em);
  color: var(--color-secondary);
}

.hero-title {
  max-width: 56rem;
  margin: 0;
  font-size: clamp(2.25rem, 8vw, 4rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.025em;
  color: white;
}

.hero-subtitle {
  max-width: 42rem;
  margin-top: clamp(0.75rem, 3vw, 1rem);
  font-size: clamp(0.95rem, 3vw, 1.25rem);
  line-height: 1.6;
  color: rgb(255 255 255 / 0.82);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: clamp(1.25rem, 5vw, 2.25rem);
  align-items: center;
}

.hero-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  padding: clamp(0.85rem, 3vw, 1rem) clamp(1rem, 4vw, 1.75rem);
  font-size: clamp(0.85rem, 2.5vw, 0.9rem);
  border-radius: 1rem;

  font-weight: 600;
  text-decoration: none;
  transition:
    background-color 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
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

@media (max-width: 480px) {
  .hero-image {
    height: 78svh;
    min-height: 30rem;
  }

  .hero-content {
    bottom: 1.5rem;
  }

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
    max-width: 22rem;
  }

  .hero-button {
    width: 100%;
  }
}

@media (max-width: 360px) {
  .hero-title {
    font-size: 1.85rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }
}
</style>