<script setup lang="ts">
defineProps<{ label: string, url: string }>();
</script>

<template>
  <a :href="url" target="_blank" class="shield flex wrap-normal justify-evenly content-center">
    <slot />
    <p class="shield-label self-center">{{ label }}</p>
  </a>
</template>

<style lang="scss" scoped>
@use "@style/_variables.scss";

.shield {
  padding: 5px;
  border-radius: 5px;
  background-color: variables.$primary-color;
}

.shield-logo {
  width: 30px;
  height: 30px;
}

.shield-label {
  margin-left: 5px;
  margin-right: 5px;
}
</style>