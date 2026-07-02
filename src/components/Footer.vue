<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <p class="footer-copyright">
        © 2026 Nejc Uršič
      </p>

      <div class="footer-tags">
        <span class="footer-tag footer-tag-tertiary">
          Websites
        </span>

        <span class="footer-tag footer-tag-secondary">
          Maps
        </span>

        <span class="footer-tag footer-tag-primary">
          Trails
        </span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 6rem; /* mt-24 */
  padding: 2.5rem 0; /* py-10 */
  border-top: 1px solid var(--color-border);
}

.footer-container {
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  padding: 0 1.5rem; /* px-6 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem; /* gap-4 */
  font-size: 0.875rem; /* text-sm */
  color: var(--color-text-secondary);
}

.footer-copyright {
  margin: 0;
}

.footer-tags {
  display: flex;
  gap: 1rem; /* gap-4 */
  text-transform: uppercase;
  letter-spacing: 0.2em;
}

.footer-tag-primary {
  color: var(--color-primary);
}

.footer-tag-secondary {
  color: var(--color-secondary);
}

.footer-tag-tertiary {
  color: var(--color-tertiary);
}

/* md:flex-row */
@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
  }
}
</style>