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
@use "@style/_animations.scss";
@use "@style/_variables.scss";
</style>
