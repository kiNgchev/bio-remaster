<script setup lang="ts">
defineProps<{ src: string, label: string, url: string }>();
</script>

<template>
  <a :href="url" target="_blank" class="shield flex wrap-normal justify-evenly content-center">
    <img :src="src" alt="kingchev" class="shield-logo m-auto"/>
    <p class="shield-label self-center">{{ label }}</p>
  </a>
</template>

<style lang="postcss" scoped>
@import "@style/_variables.pcss";

.shield {
  padding: 5px;
  border-radius: 5px;
  background-color: $primary-color;
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