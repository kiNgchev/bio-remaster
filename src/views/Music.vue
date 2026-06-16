<script setup lang="ts">
import Card from "@components/Card.vue";
import Player from "@components/Player.vue";
import music from "@assets/music/";
</script>

<template>
  <main class="main">
    <section class="column">
      <card>
        <h2>Wtf, music??</h2>
        <player :playlist="music" />
      </card>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use "@style/animations";
@use "@style/vars";
</style>
