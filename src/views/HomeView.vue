<script setup>
import HeroSection from '@/components/home_components/HeroSection.vue'
import BaseCard from '@/components/BaseCard.vue'

import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <main>
    <HeroSection />

    <!-- CARDS -->
    <section class="cards-section">
      <div class="cards-grid">
        <BaseCard>
          <div class="card-accent card-accent-primary" />

          <h3 class="card-title">
            {{ t('homePage.cards.trailRunning.title') }}
          </h3>

          <p class="card-description">
            {{ t('homePage.cards.trailRunning.description') }}
          </p>
        </BaseCard>

        <BaseCard>
          <div class="card-accent card-accent-secondary" />

          <h3 class="card-title">
            {{ t('homePage.cards.maths.title') }}
          </h3>

          <p class="card-description">
            {{ t('homePage.cards.maths.description') }}
          </p>
        </BaseCard>

        <BaseCard>
          <div class="card-accent card-accent-tertiary" />

          <h3 class="card-title">
            {{ t('homePage.cards.development.title') }}
          </h3>

          <p class="card-description">
            {{ t('homePage.cards.development.description') }}
          </p>
        </BaseCard>
      </div>
    </section>

    <!-- CONTACTS -->
    <section class="contacts-section">
      <div class="contacts-card">
        <div class="contacts-header">
          <p class="contacts-tag">
            {{ t('homePage.contacts.tag') }}
          </p>

          <h2 class="contacts-title">
            {{ t('homePage.contacts.title') }}
          </h2>

          <p class="contacts-description">
            {{ t('homePage.contacts.description') }}
          </p>
        </div>

        <div class="contacts-grid">
          <a
            href="mailto:ursic.office@gmail.com"
            class="contact-item contact-item-primary"
          >
            <p class="contact-label">
              {{ t('homePage.contacts.email') }}
            </p>

            <p class="contact-value">
              ursic.office@gmail.com
            </p>
          </a>

          <a
            href="https://www.strava.com/athletes/65016800"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-item contact-item-secondary"
          >
            <p class="contact-label">
              {{ t('homePage.contacts.strava') }}
            </p>

            <p class="contact-value">
              Hot Runner
            </p>
          </a>

          <a
            href="tel:+38651209965"
            class="contact-item contact-item-tertiary"
          >
            <p class="contact-label">
              {{ t('homePage.contacts.phone') }}
            </p>

            <p class="contact-value">
              +386 00 000 000
            </p>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* CARDS SECTION */
.cards-section {
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 6rem 1.5rem; /* py-24 px-6 */
}

.cards-grid {
  display: grid;
  gap: 1.5rem; /* gap-6 */
}

.card-accent {
  width: 5rem; /* w-20 */
  height: 0.75rem; /* h-3 */
  margin-bottom: 1.25rem; /* mb-5 */
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
  font-size: 1.875rem; /* text-3xl */
  font-weight: 900; /* font-black */
}

.card-description {
  margin-top: 1rem; /* mt-4 */
  line-height: 2rem; /* leading-8 */
  color: var(--color-text-secondary);
}

/* CONTACTS SECTION */
.contacts-section {
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1.5rem 6rem; /* px-6 pb-24 */
}

.contacts-card {
  padding: 3rem 2rem; /* py-12 px-8 */
  border: 1px solid var(--color-border);
  border-radius: 1rem; /* rounded-3xl */
  background-color: var(--color-surface);
  box-shadow:
    0 1px 2px rgb(0 0 0 / 0.05); /* shadow-sm */
}

.contacts-header {
  max-width: 48rem; /* max-w-3xl */
}

.contacts-tag {
  margin: 0;
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
}

.contacts-title {
  margin: 0.75rem 0 0;
  font-size: 2.25rem; /* text-4xl */
  font-weight: 900; /* font-black */
  letter-spacing: -0.025em; /* tracking-tight */
}

.contacts-description {
  margin-top: 1rem; /* mt-4 */
  max-width: 42rem; /* max-w-2xl */
  line-height: 2rem; /* leading-8 */
  color: var(--color-text-secondary);
}

.contacts-grid {
  display: grid;
  gap: 1rem; /* gap-4 */
  margin-top: 2.5rem; /* mt-10 */
}

.contact-item {
  display: block;
  padding: 1.25rem 1.5rem; /* py-5 px-6 */
  border: 1px solid var(--color-border);
  border-radius: 1rem; /* rounded-2xl */
  background-color: var(--color-surface-light);
  text-decoration: none;
  color: inherit;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.contact-item:hover {
  background-color: var(--color-background);
}

.contact-item-primary:hover {
  border-color: var(--color-primary);
}

.contact-item-secondary:hover {
  border-color: var(--color-secondary);
}

.contact-item-tertiary:hover {
  border-color: var(--color-tertiary);
}

.contact-label {
  margin: 0;
  font-size: 0.75rem; /* text-xs */
  font-weight: 600; /* font-semibold */
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-secondary);
}

.contact-value {
  margin: 0.5rem 0 0; /* mt-2 */
  font-weight: 600; /* font-semibold */
}

/* RESPONSIVE */
@media (min-width: 640px) {
  .contacts-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
