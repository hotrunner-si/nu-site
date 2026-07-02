<script setup>
import Card from '@/components/home_components/Card.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="cards-section">
    <div class="cards-grid">
      <Card collapsible>
        <div class="card-accent card-accent-tertiary" />

        <h3 class="card-title">
          {{ t('homePage.cards.development.title') }}
        </h3>

        <p class="card-description">
          {{ t('homePage.cards.development.description') }}
        </p>
      </Card>

      <Card collapsible>
        <div class="card-accent card-accent-secondary" />

        <h3 class="card-title">
          {{ t('homePage.cards.maths.title') }}
        </h3>

        <p class="card-description">
          {{ t('homePage.cards.maths.description') }}
        </p>
      </Card>

      <Card collapsible>
        <div class="card-accent card-accent-primary" />

        <h3 class="card-title">
          {{ t('homePage.cards.trailRunning.title') }}
        </h3>

        <p class="card-description">
          {{ t('homePage.cards.trailRunning.description') }}
        </p>
      </Card>
    </div>
  </section>
</template>

<style scoped>
.cards-section {
  scroll-margin-top: 2rem;
}

.cards-section {
  max-width: 80rem;
  margin: 0 auto;
  padding: clamp(3rem, 8vw, 6rem) clamp(1rem, 4vw, 1.5rem);
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: clamp(1rem, 3vw, 1.5rem);
}

.cards-grid>* {
  min-width: 0;
}

/* Od 800px naprej so vedno 3 kartice v eni vrsti */
@media (min-width: 800px) {
  .cards-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.card-accent {
  width: clamp(3.5rem, 12vw, 5rem);
  height: 0.75rem;
  margin-bottom: 1.25rem;
  border-radius: 9999px;
}

.card-accent-primary {
  background-color: var(--color-primary);
}

.card-accent-secondary {
  background-color: var(--color-secondary);
}

.card-accent-tertiary {
  background-color: var(--color-tertiary);
}

.card-title {
  margin: 0;
  font-size: clamp(1.4rem, 5vw, 1.875rem);
  line-height: 1.15;
  font-weight: 900;
}

.card-description {
  margin-top: 1rem;
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
}
</style>