<script setup lang="ts">
defineProps<{ header: string; description: string }>();
</script>

<template>
  <div class="stat-item glass">
    <h3>{{ header }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@style/vars";
@use "@style/animations";

.stat-item {
  text-align: center;
  padding: 15px;
  border-radius: vars.$border-radius;
  background-color: vars.$tertiary-bg;
  align-content: center;

  h3 {
    margin: 0;
    font-size: 1.8rem;
    color: vars.$secondary-text;
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: color.adjust(vars.$secondary, $lightness: 15%);
  }
}
</style>
