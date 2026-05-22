<template>
    <div class="upcoming">
        <div class="upcoming-header">
        <div>
            <p class="upcoming-tag">
            {{ t('racePage.upcoming.tag') }}
            </p>

            <h2 class="upcoming-title">
            {{ t('racePage.upcoming.title') }}
            </h2>
        </div>

        <div class="slider-controls">
            <button @click="scrollLeft" class="slider-btn">
            ←
            </button>

            <button @click="scrollRight" class="slider-btn">
            →
            </button>
        </div>
        </div>

        <!-- SLIDER -->
        <div ref="slider" class="slider">
        <article
            v-for="race in upcomingRaces"
            :key="race.name"
            class="upcoming-card"
        >
            <img
            :src="race.image"
            :alt="t(race.imageAlt)"
            class="upcoming-image"
            />

            <p class="upcoming-date">
            {{ race.date }}
            </p>

            <a
            :href="race.link"
            target="_blank"
            rel="noopener noreferrer"
            class="upcoming-name"
            >
            {{ t(race.nameKey) }}
            </a>

            <div class="upcoming-stats">
            <div>
                <p class="upcoming-label">
                {{ t('racePage.upcoming.distance') }}
                </p>
                <p class="upcoming-value">
                {{ race.distance }}
                </p>
            </div>

            <div>
                <p class="upcoming-label">
                {{ t('racePage.upcoming.elevation') }}
                </p>
                <p class="upcoming-value">
                {{ race.elevation }}
                </p>
            </div>
            </div>
        </article>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { upcomingRaces } from '@/data/races'

const { t } = useI18n()

const slider = ref(null)

function scrollLeft() {
  slider.value.scrollBy({
    left: -320,
    behavior: 'smooth',
  })
}

function scrollRight() {
  slider.value.scrollBy({
    left: 320,
    behavior: 'smooth',
  })
}
</script>

<style scoped>
div::-webkit-scrollbar {
  display: none;
}

.upcoming {
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.upcoming-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.upcoming-tag {
  margin: 0;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-primary);
}

.upcoming-title {
  margin: 0.75rem 0 0;
  font-size: 2.25rem;
  font-weight: 900;
}

.slider-controls {
  display: flex;
  gap: 0.75rem;
}

.slider-btn {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  cursor: pointer;
}

/* SLIDER */
.slider {
  display: flex;
  gap: 1.25rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 0.5rem;
}

.upcoming-card {
  min-width: 280px;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.upcoming-card:hover {
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1); /* hover:shadow-xl */
}

.upcoming-image {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
}

.upcoming-date {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.upcoming-name {
  display: block;
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: 900;
  text-decoration: none;
  transition: color 0.2s ease
}
.upcoming-name:hover {
  color: var(--color-secondary-hover)
}

.upcoming-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}
</style>