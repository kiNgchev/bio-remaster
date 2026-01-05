<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const navigateTo = (path: string) => {
  if (route.path === path) return router.push("/");
  router.push(path);
};
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <nav class="navbar-nav">
        <a
          @click="navigateTo('/')"
          :class="{ active: route.path === '/' }"
          class="nav-link"
          >Home</a
        >
        <a
          @click="navigateTo('/projects')"
          :class="{ active: route.path === '/projects' }"
          class="nav-link"
          >Projects</a
        >
        <a
          @click="navigateTo('/music')"
          :class="{ active: route.path === '/music' }"
          class="nav-link"
          >Music</a
        >
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@style/_variables.scss";

.navbar {
  top: 0;
  z-index: 100;

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: end;
    padding: 15px 10px;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;

    .navbar-nav {
      display: flex;
      gap: 2rem;

      a {
        color: variables.$text-tertiary-color;
        text-decoration: none;
        font-weight: 500;
        padding: 5px 10px;
        border-radius: 5px;
        transition: all 0.3s ease;

        &:hover {
          transition: variables.$scaling-time;
          transform: scale(110%);
        }

        &:active {
          transition: variables.$scaling-time;
          transform: scale(110%);
        }

        &.active {
          transition: variables.$scaling-time;
          transform: scale(115%);

          &:hover {
            transition: variables.$scaling-time;
            transform: scale(100%);
          }

          &:active {
            transition: variables.$scaling-time;
            transform: scale(100%);
          }
        }
      }
    }
  }
}
</style>
