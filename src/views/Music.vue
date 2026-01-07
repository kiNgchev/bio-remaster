<script setup lang="ts">
import Card from "@components/Card.vue";
import Navbar from "@components/Navbar.vue";
import Player from "@components/Player.vue";
import music from "@assets/music/";
import StatsContainer from "@components/stats/StatsContainer.vue";
import StatsItem from "@components/stats/StatsItem.vue";
</script>

<template>
  <navbar />
  <main class="main">
    <section class="column">
      <card>
        <h2>{{ $t("headers.music.about") }}</h2>
        <p v-html="$t('body.music.about')"></p>
      </card>
      <card>
        <h2>{{ $t("headers.projects.stats") }}</h2>
        <stats-container>
          <stats-item header="32" :description="$t('body.music.stats.likes')" />
          <stats-item
            header="8"
            :description="$t('body.music.stats.playlists')"
          />
          <stats-item
            header="190"
            :description="$t('body.music.stats.tracks')"
          />
          <stats-item
            :header="$t('body.music.stats.style.header')"
            :description="$t('body.music.stats.style.description')"
          />
        </stats-container>
      </card>
    </section>

    <section class="column">
      <card>
        <player :playlist="music" />
      </card>
    </section>
  </main>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@style/_animations.scss";
@use "@style/_variables.scss";

.stats-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.stat-item {
  align-content: center;
  text-align: center;
  padding: 15px;
  border-radius: variables.$border-radius;
  background-color: #e3e0ff;

  h3 {
    margin: 0;
    font-size: 1.8rem;
    color: variables.$primary-color;
  }

  p {
    margin: 5px 0 0;
    font-size: 0.9rem;
  }

  &:hover {
    background-color: color.adjust(variables.$primary-color, $lightness: 20%);
  }
}
</style>
