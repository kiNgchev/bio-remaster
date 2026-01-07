<script setup lang="ts"></script>

<template>
  <div class="stats-container">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.stats-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}
</style>
