<script setup>
defineProps({
  label: String,
  title: String,
})
</script>

<template>
  <div class="mb-10">
    <p
      class="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]"
    >
      {{ label }}
    </p>

    <h2
      class="mt-3 text-5xl font-black tracking-tight text-[var(--color-text-primary)]"
    >
      {{ title }}
    </h2>
  </div>
</template>