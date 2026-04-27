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

const order = ['Home', 'Projects', 'Music']
function getRouteIndex(name:  string | symbol | undefined) {
  return order.indexOf(String(name ?? 'Home'))
}

router.beforeEach((to, from) => {
  const nextIndex = getRouteIndex(to.name)
  const previousIndex = getRouteIndex(from.name)
  
  if (nextIndex === -1 || previousIndex === -1 || nextIndex === previousIndex) {
    to.meta = { transition: 'slide-right' }
    from.meta = { transition: 'slide-right' }
    return
  }
  
  to.meta = { transition: nextIndex > previousIndex ? 'slide-right' : 'slide-left' }
  from.meta = { transition: nextIndex > previousIndex ? 'slide-right' : 'slide-left' }
})

export default router;
