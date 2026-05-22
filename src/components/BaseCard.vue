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
  padding: 1.5rem;

  border: 1px solid var(--color-border);
  border-radius: 1rem;
  background: var(--color-surface);

  overflow: hidden;

  text-decoration: none;
  color: inherit;

  transition: transform 0.25s ease, box-shadow 0.25s ease;
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
</style>