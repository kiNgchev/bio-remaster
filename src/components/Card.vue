<script setup lang="ts"></script>

<template>
  <div class="card glass">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use "@style/vars";

.card {
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  gap: 10px;
  height: 100%;
  padding: 10px;
  border-radius: vars.$border-radius;
}
</style>
