<template>
  <div class="hero">
    <img src="/images/verbier01.jpg" alt="trail running" class="hero-image" />

        <div class="hero-overlay" />

        <div class="hero-content">
            <p class="hero-tag">
                {{ t('racePage.hero.tag') }}
            </p>

            <h1 class="hero-title">
                {{ t('racePage.hero.title') }}
            </h1>
        </div>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.hero {
  position: relative;
  height: 560px;
  border-radius: 1rem;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
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
  bottom: 3rem;
  left: 3rem;
}

.hero-tag {
  margin: 0 0 1rem;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.4em;
  color: var(--color-secondary);
}

.hero-title {
  margin: 0;
  font-size: 3.75rem;
  font-weight: 900;
  color: white;
}
</style>