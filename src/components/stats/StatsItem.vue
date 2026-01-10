<script setup lang="ts">
defineProps<{ header: string; description: string }>();
</script>

<template>
  <div class="stat-item">
    <h3>{{ header }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@style/variables";
@use "@style/animations";

.stat-item {
  text-align: center;
  padding: 15px;
  border-radius: variables.$border-radius;
  background-color: variables.$accent;
  align-content: center;

  h3 {
    margin: 0;
    font-size: 1.8rem;
    color: variables.$primary;
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: color.adjust(variables.$secondary, $lightness: 15%);
  }
}
</style>
