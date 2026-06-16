<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main class="startup-container">
    <section class="column">
      <button class="start-btn" @click="router.push('/home')">
        <h1>LET'S GOOOO!</h1>
      </button>
    </section>
  </main>
</template>

<style lang="scss">
.start-btn {
  animation: pulse 6s ease-in-out infinite;
}
</style>