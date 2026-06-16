<script setup lang="ts">
defineProps<{ source: string; label: string; url: string }>();
</script>

<template>
  <a
    :href="url"
    target="_blank"
  >
    <div class="shield glass flex wrap-normal justify-evenly content-center">
      <img :src="source" alt="kingchev" class="shield-logo m-auto" />
      <p class="shield-label self-center">{{ label }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
@use "@style/vars";

.shield {
  padding: 5px;
  border-radius: 5px;
  background: vars.$tertiary-bg;
}

.shield-logo {
  width: 30px;
  height: 30px;
}

.shield-label {
  margin-left: 5px;
  margin-right: 5px;
  color: vars.$text-tertiary-color;
}
</style>
