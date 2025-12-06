<script setup lang="ts">
import Card from "../components/Card.vue";
import { useRouter } from 'vue-router';
//@ts-ignore
import technologies from "@assets/technologies";

const router = useRouter();
</script>

<template>
  <main class="main">
    <section class="column">
      <card>
       <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on. You can find more on my GitHub profile.</p>
        <div class="navigation">
          <button @click="router.push('/')" class="nav-button">Back to Home</button>
       </div>
      </card>
      
      <card>
        <h2>Project Stats</h2>
        <div class="stats-container">
          <div class="stat-item">
            <h3>3</h3>
            <p>Projects Completed</p>
          </div>
          <div class="stat-item">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div class="stat-item">
            <h3>15+</h3>
            <p>Contributions</p>
          </div>
          <div class="stat-item">
            <h3>2</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </card>
    </section>
    
    <section class="column">
      <card>
        <h2>Featured Projects</h2>
        <div class="projects-list-container">
          <div class="projects-list">
            <div class="project-item">
              <h3>SJ</h3>
              <p>Service that uses Thinder-like mechanism for job hunting.</p>
              <div class="project-links">
                <a href="https://swapjob.ru" target="_blank">Live Demo</a>
              </div>
            </div>
            
            <div class="project-item">
              <h3>Hisoka Morrow Bot</h3>
              <p>Multifunctional Discord bot stylized as Hisoka Morrow from <a target="_blank" href="https://en.wikipedia.org/wiki/Hunter_×_Hunter">Hunter x Hunter</a>. Bot was written on Kotlin.</p>
              <div class="project-links">
                <a href="https://github.com/kiNgchev/Hisoka" target="_blank">GitHub</a> |
                <a href="https://discord.com/oauth2/authorize?client_id=1271073974356279396&permissions=8&integration_type=0&scope=bot" target="_blank">Live Demo</a>
              </div>
            </div>
            
            <div class="project-item">
              <h3>AKHS</h3>
              <p>Collection of services for automation tasks, written on Kotlin with Spring Framework. All services linked with each other with the help of Apache Kafka.</p>
              <div class="project-links">
                <a href="https://github.com/kiNgchev/AKHS" target="_blank">GitHub</a>
              </div>
            </div>

            <div class="project-item">
              <h3>Reverse Rewrite</h3>
              <p>Collection of services for automation tasks, written on Kotlin with Spring Framework. All services linked with each other with the help of Apache Kafka.</p>
              <div class="project-links">
                <a href="https://github.com/kiNgchev/ReverseRewrite" target="_blank">GitHub</a> |
                <a href="https://discord.com/oauth2/authorize?client_id=1271073974356279396&permissions=8&integration_type=0&scope=bot" target="_blank">Live Demo</a>
              </div>
            </div>

            <div class="project-item">
              <h3>Bio</h3>
              <p>My own bio website, written on TypeScript and Vue.js.</p>
              <div class="project-links">
                <a href="https://github.com/kiNgchev/bio-remaster" target="_blank">GitHub</a> |
                <a href="/">Live Demo</a>
              </div>
            </div>
          </div>
         </div>
      </card>
    </section>
  </main>
</template>

<style scoped lang="scss">
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
    background: linear-gradient(180deg, variables.$primary-color, adjust-color(variables.$primary-color, $lightness: -20%));
    border-radius: 10px;
    border: 2px solid #f1f1f1;

    &:hover {
      background: linear-gradient(
        180deg,
        adjust-color(variables.$primary-color, $lightness: -10%),
        adjust-color(variables.$primary-color, $lightness: -30%)
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
    background-color: adjust-color(variables.$primary-color, $lightness: 20%);
  }
}

.navigation {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.nav-button {
  padding: 10px 20px;
  background-color: variables.$primary-color;
  color: white;
  border: none;
  border-radius: variables.$border-radius;
  cursor: pointer;
  font-weight: 500;
  transition: variables.$scaling-time;
  
  &:hover {
    background-color: adjust-color(variables.$primary-color, $lightness: 10%);
  }
}
</style>