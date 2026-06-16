<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
    <transition name="slide-down" mode="out-in" appear>
      <div v-if="route.name != 'Startup'" class="navbar-container">
        <navbar />
      </div>
    </transition>

    <div class="main-container">
      <router-view v-slot="{ Component, route }">
        <transition
          :name="(route.meta.transition as string) || 'slide-up'"
          mode="out-in"
          appear
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
</template>

<style lang="scss" scoped>
.navbar-container {
  position: absolute;
  max-width: 1280px;
  width: 100%;
  top: 0;
  z-index: 1;
}

.main-container {
  padding: 10px;
}
</style>
