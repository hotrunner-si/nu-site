<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="contacts" class="contacts-section">
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
          class="contact-item contact-item-tertiary"
        >
          <p class="contact-label">
            {{ t('homePage.contacts.email') }}:
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
            {{ t('homePage.contacts.strava') }}:
          </p>

          <p class="contact-value">
            Hot Runner
          </p>
        </a>

        <a
          href="https://gorski-blog.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-item contact-item-primary"
        >
          <p class="contact-label">
            {{ t('homePage.contacts.blog') }}:
          </p>

          <p class="contact-value">
            Moj gorski blog
          </p>
        </a>
      </div>

      <div class="contacts-mobile-list">
        <a href="mailto:ursic.office@gmail.com" class="contacts-mobile-link">
          <span>{{ t('homePage.contacts.email') }}:</span>
          ursic.office@gmail.com
        </a>

        <a
          href="https://www.strava.com/athletes/65016800"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts-mobile-link"
        >
          <span>{{ t('homePage.contacts.strava') }}:</span>
          Hot Runner
        </a>

        <a
          href="https://gorski-blog.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          class="contacts-mobile-link"
        >
          <span>{{ t('homePage.contacts.blog') }}:</span>
          Moj gorski blog
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contacts-section {
  scroll-margin-top: 2rem;
}

.contacts-section {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 1.5rem) clamp(3rem, 8vw, 6rem);
}

.contacts-card {
  padding: clamp(1.5rem, 5vw, 3rem) clamp(1rem, 4vw, 2rem);
  border: 1px solid var(--color-border);
  border-radius: clamp(1rem, 3vw, 1.5rem);
  background-color: var(--color-surface);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.05);
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
  font-size: clamp(1.75rem, 7vw, 2.25rem);
  line-height: 1.1;
  font-weight: 900;
  letter-spacing: -0.025em;
}

.contacts-description {
  margin-top: 1rem;
  max-width: 42rem;
  font-size: clamp(0.95rem, 2.5vw, 1rem);
  line-height: 1.7;
  color: var(--color-text-secondary);
}

/* Kartice so nad 700px vedno ena zraven druge */
.contacts-grid {
  display: grid;
  gap: 1rem;
  margin-top: clamp(1.5rem, 5vw, 2.5rem);
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.contact-item {
  display: block;
  min-width: 0;
  padding: clamp(1rem, 4vw, 1.25rem) clamp(1rem, 4vw, 1.5rem);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background-color: var(--color-surface-light);
  text-decoration: none;
  word-break: break-word;
  color: inherit;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    transform 0.2s ease;
}

.contact-item:hover {
  background-color: var(--color-background);
  transform: translateY(-2px);
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
  font-size: clamp(0.9rem, 1.8vw, 1rem);
  font-weight: 600;
}

/* Mobile seznam je na večjih zaslonih skrit */
.contacts-mobile-list {
  display: none;
}

/* Pod 700px kartice izginejo in pokaže se preprost seznam */
@media (max-width: 699px) {
  .contacts-card {
    padding: 1.5rem 1.25rem;
  }

  .contacts-grid {
    display: none;
  }

  .contacts-mobile-list {
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    margin-top: 1.75rem;
  }

  .contacts-mobile-link {
    display: block;
    color: inherit;
    text-decoration: none;
    font-size: 0.95rem;
    line-height: 1.5;
    word-break: break-word;
    font-weight: 600;
  }

  .contacts-mobile-link span {
    font-weight: 600;
    color: var(--color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.2em;
  }

  .contacts-mobile-link:hover {
    color: var(--color-primary);
  }
}

@media (max-width: 420px) {
  .contacts-section {
    padding-bottom: 3rem;
  }

  .contacts-title {
    font-size: 1.6rem;
  }

  .contacts-description {
    font-size: 0.92rem;
  }
}
</style>