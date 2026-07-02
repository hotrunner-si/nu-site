<script setup>
defineProps({
  label: String,
  title: String,
})
</script>

<template>
  <div class="section-header">
    <p class="section-label">
      {{ label }}
    </p>

    <h2 class="section-title">
      {{ title }}
    </h2>
  </div>
</template>

<style scoped>
.section-header {
  margin-bottom: 2.5rem;
}

.section-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: var(--color-primary);
}

/* RESPONSIVE TITLE */
.section-title {
  margin-top: 0.75rem;

  font-weight: 900;
  letter-spacing: -0.03em;
  color: var(--color-text-primary);

  font-size: 2rem; /* mobile */
  line-height: 1.1;
}

/* tablet */
@media (min-width: 768px) {
  .section-title {
    font-size: 3rem;
  }
}

/* desktop */
@media (min-width: 1024px) {
  .section-title {
    font-size: 3.75rem;
  }
}
</style>