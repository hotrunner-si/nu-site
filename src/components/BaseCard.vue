<template>
  <div class="glass-card">
    <slot />
  </div>
</template>

<style scoped>
.glass-card {
  padding: 2rem; /* p-8 */
  border: 1px solid var(--color-border);
  border-radius: 1rem; /* rounded-[2rem] */
  background-color: var(--color-surface);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-0.25rem); /* hover:-translate-y-1 */
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1); /* hover:shadow-xl */
}
</style>