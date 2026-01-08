<script setup lang="ts">
import Card from "@components/Card.vue";
import Navbar from "@components/Navbar.vue";
import { projects } from "@/model/Projects.ts";
import Project from "@components/Project.vue";
import StatsContainer from "@components/stats/StatsContainer.vue";
import StatsItem from "@components/stats/StatsItem.vue";
</script>

<template>
  <navbar />
  <main class="main">
    <section class="column">
      <card>
        <h2>{{ $t("headers.projects.about") }}</h2>
        <p v-html="$t('body.projects.about')"></p>
      </card>

      <card>
        <h2>{{ $t("headers.projects.stats") }}</h2>
        <stats-container>
          <stats-item
            header="3"
            :description="$t('body.projects.stats.completed')"
          />
          <stats-item
            header="3+"
            :description="$t('body.projects.stats.years')"
          />
          <stats-item
            header="15+"
            :description="$t('body.projects.stats.contributions')"
          />
          <stats-item
            header="2"
            :description="$t('body.projects.stats.clients')"
          />
        </stats-container>
      </card>
    </section>

    <section class="column">
      <card>
        <h2>{{ $t("headers.projects.projects") }}</h2>
        <div class="projects-list-container">
          <project
            v-for="p in projects"
            :name="p.name"
            :description="p.description"
            :source="p.source"
            :demo="p.demo"
          />
        </div>
      </card>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@style/_variables.scss";
@use "@style/_animations.scss";

.projects-list-container {
  max-height: 400px;
  overflow-y: auto;
  padding: 5px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: variables.$primary-color;
    border-radius: 10px;
    border: 2px solid #f1f1f1;

    &:hover {
      background: color.adjust(variables.$primary-color, $lightness: -10%);
    }
  }

  @-moz-document url-prefix() {
    scrollbar-width: thin;
    scrollbar-color: variables.$primary-color white;
    scrollbar-arrow-color: white;
  }
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
