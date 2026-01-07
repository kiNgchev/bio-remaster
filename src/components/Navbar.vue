<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();
const { locale, availableLocales } = useI18n();

const navigateTo = (path: string) => {
  if (route.path === path) return router.push("/");
  router.push(path);
};

let l = ref(locale.value);

const changeLocale = () => {
  let index = availableLocales.indexOf(l.value) + 1;

  if (index > availableLocales.length - 1) index = 0;

  l.value = availableLocales[index];
  locale.value = l.value;
};
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <a v-on:click="changeLocale" class="locale-btn">{{ l }}</a>
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
    justify-content: space-between;
    align-items: end;
    padding: 15px 10px;
    max-width: 1280px;
    margin: 0 auto;
    width: 100%;

    .locale-btn {
      position: relative;
      color: variables.$text-tertiary-color;
      text-decoration: none;
      font-weight: 500;
      font-size: 1.1rem;
      padding: 5px 10px;
      border-radius: 5px;
      transition: all 0.3s ease;
    }

    .navbar-nav {
      display: flex;
      gap: 2rem;

      @media (max-width: 750px) and (max-height: 940px) {
        & {
          gap: 1rem;
        }
      }

      @media (max-width: 350px) and (max-height: 940px) {
        & {
          gap: 0.3rem;
        }
      }

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
