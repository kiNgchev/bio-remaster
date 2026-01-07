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
@use "@style/_variables.scss";
@use "@style/_animations.scss";

.stat-item {
  text-align: center;
  padding: 15px;
  border-radius: variables.$border-radius;
  background-color: #e3e0ff;
  align-content: center;

  h3 {
    margin: 0;
    font-size: 1.8rem;
    color: variables.$primary-color;
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: color.adjust(variables.$primary-color, $lightness: 20%);
  }
}
</style>
