<template>
  <component
    :is="href ? 'a' : 'article'"
    :href="href"
    class="glass-card"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  href: String
})
</script>

<style scoped>
.glass-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;

  padding: clamp(1.25rem, 3vw, 1.5rem);

  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background: var(--color-surface);

  overflow: hidden;

  text-decoration: none;
  color: inherit;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.glass-card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.glass-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}

/* Pod 800px kartica postane ležeča */
@media (max-width: 799px) {
  .glass-card {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: auto auto;
    column-gap: 1rem;
    row-gap: 0.35rem;

    padding: 1.25rem;
    align-items: start;
  }

  .glass-card:hover {
    transform: translateY(-2px);
  }

  .glass-card :slotted(.card-accent) {
    grid-column: 1;
    grid-row: 1 / 3;

    width: 0.75rem;
    height: auto;
    min-height: 100%;
    align-self: stretch;

    margin: 0;
    border-radius: 9999px;
  }

  .glass-card :slotted(.card-title) {
    grid-column: 2;
    grid-row: 1;
  }

  .glass-card :slotted(.card-description) {
    grid-column: 2;
    grid-row: 2;
  }
}

@media (max-width: 420px) {
  .glass-card {
    column-gap: 0.85rem;
    padding: 1rem;
  }

  .glass-card :slotted(.card-accent) {
    width: 0.6rem;
  }
}
</style>