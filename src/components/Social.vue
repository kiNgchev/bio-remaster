<script setup lang="ts">
defineProps<{ source: string; name: string; url: string }>();
</script>

<template>
  <a
    :href="url"
    target="_blank"
    class="social flex wrap-normal justify-evenly content-center"
  >
    <img :src="source" :alt="`kingchev ${name}`" class="social-logo m-auto" />
  </a>
</template>

<style lang="scss" scoped>
@use "@style/variables";

.social {
  width: 7vh;
  height: 7vh;

  -webkit-user-drag: none;
  user-select: none;

  text-align: center;
  padding: 5px;
  border-radius: variables.$border-radius;
  background-color: variables.$primary-bg;
}

.social-logo {
  width: 75%;
  height: 75%;
}
</style>
