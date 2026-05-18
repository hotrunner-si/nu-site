<template>
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
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n()

import { completedRaces } from '@/data/races'
</script>

<style scoped>
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

.completed-card {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  align-items: center; /* prevents vertical stretching */
}

.completed-image {
  width: 100%;
  height: 100%;
  max-height: 220px;
  border-radius: 1.5rem;
  object-fit: cover;
}

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
</style>