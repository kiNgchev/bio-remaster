<script setup lang="ts">
import Card from "@components/Card.vue";
import Navbar from "@components/Navbar.vue";
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
        <div class="stats-container">
          <div class="stat-item">
            <h3>3</h3>
            <p>{{ $t("body.projects.stats.completed") }}</p>
          </div>
          <div class="stat-item">
            <h3>3+</h3>
            <p>{{ $t("body.projects.stats.years") }}</p>
          </div>
          <div class="stat-item">
            <h3>15+</h3>
            <p>{{ $t("body.projects.stats.contributions") }}</p>
          </div>
          <div class="stat-item">
            <h3>2</h3>
            <p>{{ $t("body.projects.stats.clients") }}</p>
          </div>
        </div>
      </card>
    </section>

    <section class="column">
      <card>
        <h2>{{ $t("headers.projects.projects") }}</h2>
        <div class="projects-list-container">
          <div class="projects-list">
            <div class="project-item">
              <h3>SJ</h3>
              <p v-html="$t('projects.sj')"></p>
              <div class="project-links">
                <a href="https://swapjob.ru" target="_blank">{{ $t("body.projects.projects.demo") }}</a>
              </div>
            </div>

            <div class="project-item">
              <h3>Hisoka Morrow Bot</h3>
              <p v-html="$t('projects.hisoka')"></p>
              <div class="project-links">
                <a href="https://github.com/kiNgchev/Hisoka" target="_blank"
                  >GitHub</a
                >
                |
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1271073974356279396&permissions=8&integration_type=0&scope=bot"
                  target="_blank"
                  >{{ $t("body.projects.projects.demo") }}</a
                >
              </div>
            </div>

            <div class="project-item">
              <h3>AKHS</h3>
              <p v-html="$t('projects.akhs')"></p>
              <div class="project-links">
                <a href="https://github.com/kiNgchev/AKHS" target="_blank"
                  >GitHub</a
                >
              </div>
            </div>

            <div class="project-item">
              <h3>Reverse Rewrite</h3>
              <p v-html="$t('projects.reverse')"></p>
              <div class="project-links">
                <a
                  href="https://github.com/kiNgchev/ReverseRewrite"
                  target="_blank"
                  >GitHub</a
                >
                |
                <a
                  href="https://discord.com/oauth2/authorize?client_id=1271073974356279396&permissions=8&integration_type=0&scope=bot"
                  target="_blank"
                  >{{ $t("body.projects.projects.demo") }}</a
                >
              </div>
            </div>

            <div class="project-item">
              <h3>Leetcode-rs</h3>
              <p v-html="$t('projects.leetcode')"></p>
              <div class="project-links">
                <a
                  href="https://github.com/kiNgchev/leetcode-rs"
                  target="_blank"
                  >GitHub</a
                >
              </div>
            </div>

            <div class="project-item">
              <h3>Bio</h3>
              <p v-html="$t('projects.bio')"></p>
              <div class="project-links">
                <a
                  href="https://github.com/kiNgchev/bio-remaster"
                  target="_blank"
                  >GitHub</a
                >
                |
                <a href="/">{{ $t("body.projects.projects.demo") }}</a>
              </div>
            </div>
          </div>
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
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      180deg,
      variables.$primary-color,
      color.adjust(variables.$primary-color, $lightness: -20%)
    );
    border-radius: 10px;
    border: 2px solid #f1f1f1;

    &:hover {
      background: linear-gradient(
        180deg,
        color.adjust(variables.$primary-color, $lightness: -10%),
        color.adjust(variables.$primary-color, $lightness: -30%)
      );
    }
  }
}

.projects-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.project-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
}

.project-links {
  margin-top: 10px;

  a {
    margin: 0 5px;
    font-weight: 500;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
}

.stat-item {
  text-align: center;
  padding: 15px;
  border-radius: variables.$border-radius;
  background-color: #e3e0ff;
  align-content: center;

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
