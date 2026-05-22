<template>
    <aside class="sidebar">

        <p class="sidebar-tag">
          {{ t('racePage.stats.title') }}
        </p>

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
            class="stats-btn-primary"
          >
            {{ statsLinks.strava.koms }} {{ t('racePage.stats.strava') }}
          </a>
        </div>

        <div class="block-section">
          <h3 class="block-title">
            {{ t('racePage.pb.title') }}
          </h3>

          <div class="list">
            <a
              v-for="pr in personalBests"
              :key="pr.label"
              :href="pr.link"
              class="pb-item"
            >
              <p class="pb-label">
                {{ t(pr.labelKey) }}
              </p>
              <p class="pb-value">
                {{ pr.value }}
              </p>
            </a>
          </div>
        </div>

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
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

import { statsLinks, personalBests, achievements } from '@/data/races'
</script>

<style scoped>
.sidebar {
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
}

.sidebar-tag {
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-primary);
}

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
.stats-btn-primary:hover {
  background: var(--color-primary-hover);
}

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

.pb-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  text-decoration: none;
}
.pb-item:hover {
  border-color: var(--color-primary)
}

.achievement-item {
  display: block;
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text-secondary);
}
.achievement-item:hover {
  border-color: var(--color-primary);
}
</style>