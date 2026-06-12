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
@use "@style/vars";

.social {
  width: 3em;
  height: 3em;

  -webkit-user-drag: none;
  user-select: none;

  text-align: center;
  padding: 5px;
  border-radius: vars.$border-radius;
  background-color: vars.$primary-bg;
}

.social-logo {
  width: 75%;
  height: 75%;
}
</style>
