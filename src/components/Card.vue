<script setup lang="ts">

</script>

<template>
  <div class="card">
    <slot />
  </div>
</template>

<style lang="postcss" scoped>
@import "@style/_variables.pcss";

.card {
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  gap: 10px;
  height: 100%;
  padding: 10px;
  background: white;
  border-radius: $border-radius;
}
</style>