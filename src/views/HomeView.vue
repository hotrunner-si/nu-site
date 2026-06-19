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
            href="https://gorski-blog.netlify.app"
            class="contact-item contact-item-tertiary"
          >
            <p class="contact-label">
              {{ t('homePage.contacts.blog') }}
            </p>

            <p class="contact-value">
              Moj gorski blog
            </p>
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.cards-section {
  max-width: 80rem; 
  margin: 0 auto;
  padding: 6rem 1.5rem; 
}

.cards-grid {
  display: grid;
  gap: 1.5rem; 
}

.card-accent {
  width: 5rem;
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
  font-size: 1.875rem; 
  font-weight: 900; 
}

.card-description {
  margin-top: 1rem; 
  line-height: 2rem; 
  color: var(--color-text-secondary);
}

.contacts-section {
  max-width: 80rem; 
  margin: 0 auto;
  padding: 0 1.5rem 6rem;
}

.contacts-card {
  padding: 3rem 2rem; 
  border: 1px solid var(--color-border);
  border-radius: 1rem; 
  background-color: var(--color-surface);
  box-shadow:
    0 1px 2px rgb(0 0 0 / 0.05); 
}

.contacts-header {
  max-width: 48rem; 
}

.contacts-tag {
  margin: 0;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--color-primary);
}

.contacts-title {
  margin: 0.75rem 0 0;
  font-size: 2.25rem;
  font-weight: 900;
  letter-spacing: -0.025em; 
}

.contacts-description {
  margin-top: 1rem;
  max-width: 42rem;
  line-height: 2rem;
  color: var(--color-text-secondary);
}

.contacts-grid {
  display: grid;
  gap: 1rem; 
  margin-top: 2.5rem;
  grid-template-columns: 1fr;
}

.contact-item {
  display: block;
  padding: 1.25rem 1.5rem; 
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background-color: var(--color-surface-light);
  text-decoration: none;
  word-break: break-word;
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
  font-size: 0.75rem; 
  font-weight: 600; 
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-text-secondary);
}

.contact-value {
  margin: 0.5rem 0 0;
  font-weight: 600;
}

@media (min-width: 640px) {
  .contacts-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .contacts-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
