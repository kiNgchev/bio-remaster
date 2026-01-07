<script setup lang="ts">
defineProps<{
  name: string;
  description: string;
  source: string | null;
  demo: string | null;
}>();
</script>

<template>
  <div class="project-item">
    <h3>{{ name }}</h3>
    <p v-html="$t(description)"></p>
    <div class="project-links">
      <a v-if="source" target="_blank" :href="source">GitHub</a>
      |
      <a v-if="demo" target="_blank" :href="demo">{{
        $t("body.projects.projects.demo")
      }}</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-item {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;

  h3 {
    font-weight: bold;
  }

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
</style>
