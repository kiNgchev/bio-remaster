<script setup lang="ts">
import Navbar from "@components/Navbar.vue";
</script>

<template>
  <div class="navbar-container">
    <navbar />
  </div>
  <div class="main-container">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition as string || 'fade'" mode="out-in">
        <component :is="Component"/>
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
}

.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active {
  transition: all .15s linear;
}

.slide-left-enter-from,
.slide-right-leave-to {
  transform: translateX(-150%);
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(150%);
}

.slide-right-enter-to,
.slide-left-enter-to {
  transform: translateX(0);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all .15s linear;
}

.slide-up-leave-to {
  transform: translateY(-150%);
}

.slide-up-enter-to {
  transform: translateY(0);
}
</style>
