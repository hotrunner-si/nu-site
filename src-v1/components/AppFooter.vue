<template>
  <footer class="site-footer">
    <div class="footer-container">
      <p class="footer-copyright">
        © 2026 Nejc Uršič
      </p>

      <div class="footer-tags">
        <RouterLink to="/maps" class="footer-tag footer-tag-primary">
          Maps & GPX
        </RouterLink>

        <RouterLink to="/websites" class="footer-tag footer-tag-secondary">
          Websites
        </RouterLink>

        <a href="mailto:ursic.office@gmail.com" class="footer-tag footer-tag-tertiary">
          Kontakt
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: 6rem;
  padding: 2.5rem 0;
  border-top: 1px solid var(--color-border);
}

.footer-container {
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--color-text-secondary);
}

.footer-copyright {
  margin: 0;
}

.footer-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 750;
}

.footer-tag-primary { color: var(--color-primary); }
.footer-tag-secondary { color: var(--color-secondary-hover); }
.footer-tag-tertiary { color: var(--color-tertiary-hover); }

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
  }
}
</style>
