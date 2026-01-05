import { createRouter, createWebHistory } from "vue-router";
import Home from "@views/Home.vue";
import Projects from "../views/Projects.vue";
import Music from "../views/Music.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/music",
    name: "Music",
    component: Music
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
