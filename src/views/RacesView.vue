<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import {
  statsLinks,
  personalBests,
  achievements,
  upcomingRaces,
  completedRaces,
} from '../data/races'

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

<template>
  <main class="races-page">

    <!-- TOP -->
    <section class="top-grid">

      <!-- LEFT -->
      <div class="left-column">

        <!-- HERO -->
        <div class="hero">
          <img
            src="/images/verbier01.jpg"
            alt="trail running"
            class="hero-image"
          />

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

        <!-- UPCOMING -->
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

      </div>

      <!-- RIGHT -->
      <aside class="sidebar">

        <p class="sidebar-tag">
          {{ t('racePage.stats.title') }}
        </p>

        <!-- LINKS -->
        <div class="stats-links">
          <a
            :href="statsLinks.utmb.link"
            target="_blank"
            rel="noopener noreferrer"
            class="stats-btn-primary"
          >
            {{ t('racePage.stats.utmb') }} {{ statsLinks.utmb.index }}
          </a>

          <a
            :href="statsLinks.strava.link"
            target="_blank"
            rel="noopener noreferrer"
            class="stats-btn-secondary"
          >
            {{ statsLinks.strava.koms }} {{ t('racePage.stats.strava') }}
          </a>
        </div>

        <!-- PB -->
        <div class="block-section">
          <h3 class="block-title">
            {{ t('racePage.pb.title') }}
          </h3>

          <div class="list">
            <a
              v-for="pr in personalBests"
              :key="pr.label"
              :href="pr.link"
              class="list-item"
            >
              <p class="list-label">
                {{ t(pr.labelKey) }}
              </p>
              <p class="list-value">
                {{ pr.value }}
              </p>
            </a>
          </div>
        </div>

        <!-- ACHIEVEMENTS -->
        <div class="block-section">
          <h3 class="block-title">
            {{ t('racePage.achievements.title') }}
          </h3>

          <div class="list">
            <a
              v-for="achievement in achievements"
              :key="achievement.title"
              :href="achievement.link"
              class="achievement-item"
            >
              {{ t(achievement.titleKey) }}
            </a>
          </div>
        </div>

      </aside>
    </section>

    <!-- COMPLETED -->
    <section class="completed">
      <div class="completed-header">
        <p class="completed-tag">
          {{ t('racePage.completed.tag') }}
        </p>

        <h2 class="completed-title">
          {{ t('racePage.completed.title') }}
        </h2>
      </div>

      <div class="completed-list">
        <article
          v-for="race in completedRaces"
          :key="race.name"
          class="completed-card"
        >
          <img
            :src="race.image"
            :alt="t(race.imageAlt)"
            class="completed-image"
          />

          <div class="completed-content">
            <p class="completed-year">
              {{ race.year }}
            </p>

            <a
              :href="race.link"
              class="completed-name"
            >
              {{ t(race.nameKey) }}
            </a>

            <div class="completed-stats">
              <div>
                <p class="completed-label">
                  {{ t('racePage.completed.distance') }}
                </p>
                <p class="completed-value">
                  {{ race.distance }}
                </p>
              </div>

              <div>
                <p class="completed-label">
                  {{ t('racePage.completed.elevation') }}
                </p>
                <p class="completed-value">
                  {{ race.elevation }}
                </p>
              </div>

              <div>
                <p class="completed-label">
                  {{ t('racePage.completed.time') }}
                </p>
                <p class="completed-value">
                  {{ race.time }}
                </p>
              </div>
            </div>

            <p class="completed-note">
              {{ t(race.noteKey) }}
            </p>
          </div>
        </article>
      </div>
    </section>

  </main>
</template>

<style scoped>
.races-page {
  max-width: 80rem;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
}

/* GRID */
.top-grid {
  display: grid;
  gap: 1.5rem;
}

.left-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
}

/* HERO */
.hero {
  position: relative;
  height: 560px;
  border-radius: 2.5rem;
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

/* UPCOMING */
.upcoming {
  padding: 2rem;
  border-radius: 2.5rem;
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
  border-radius: 2rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
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
}

.upcoming-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
}

/* SIDEBAR */
.sidebar {
  padding: 2rem;
  border-radius: 2.5rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.sidebar-tag {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-primary);
}

/* BUTTONS */
.stats-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2.5rem;
}

.stats-btn-primary {
  padding: 1rem;
  border-radius: 1rem;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.stats-btn-secondary {
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

/* BLOCKS */
.block-section {
  margin-top: 3.5rem;
}

.block-title {
  font-size: 1.5rem;
  font-weight: 900;
}

.list {
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  text-decoration: none;
}

.achievement-item {
  display: block;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text-secondary);
}

/* COMPLETED */
.completed {
  margin-top: 6rem;
}

.completed-header {
  margin-bottom: 3rem;
}

.completed-tag {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-primary);
}

.completed-title {
  margin-top: 0.75rem;
  font-size: 3rem;
  font-weight: 900;
}

.completed-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* FIXED CARD LAYOUT (important change) */
.completed-card {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 2.5rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  align-items: center; /* prevents vertical stretching */
}

/* image becomes fixed block */
.completed-image {
  width: 100%;
  height: 100%;
  max-height: 220px;
  border-radius: 1.5rem;
  object-fit: cover;
}

/* content should NOT stretch layout */
.completed-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 220px;
}

.completed-year {
  font-size: 0.875rem;
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.completed-name {
  display: block;
  margin-top: 0.75rem;
  font-size: 2rem;
  font-weight: 900;
  text-decoration: none;
}

.completed-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.completed-note {
  margin-top: 1.5rem;
  color: var(--color-text-secondary);
  line-height: 1.75rem;
}

/* RESPONSIVE: stack like original mobile behavior */
@media (max-width: 768px) {
  .completed-card {
    grid-template-columns: 1fr;
  }

  .completed-content {
    min-height: auto;
  }

  .completed-image {
    max-height: 260px;
  }
}

/* RESPONSIVE */
@media (min-width: 1024px) {
  .top-grid {
    grid-template-columns: 2fr 1fr;
  }
}

div::-webkit-scrollbar {
  display: none;
}
</style>