<script setup lang="ts">
import Avatar from "@components/Avatar.vue";
import { calculateAge } from "../utils/timeUtils.ts";
import { convert } from "../utils/timeUtils.ts";
import Card from "@components/Card.vue";
import Shield from "@components/Shield.vue";
import Typed from "typed.js";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

import socials from "@assets/socials";
import technologies from "@assets/technologies";

import Social from "@components/Social.vue";
import Navbar from "@components/Navbar.vue";

const route = useRoute();
const age = calculateAge(7, 6, 2007);
const typedElement = ref<HTMLElement | null>(null);
let typedInstance: Typed | null = null;

const initTyped = () => {
  if (typedElement.value) {
    if (typedInstance) {
      typedInstance.destroy();
    }

    typedInstance = new Typed(typedElement.value, {
      strings: [
        "Heeeeey... " +
          "Hello! " +
          'I\'m a <span style="color: #7567ff;font-weight: 500;">Kotlin</span>, <span style="color: #7567ff;font-weight: 500;">Go</span> &amp; <span style="color: #7567ff;font-weight: 500;">Rust</span> enjoyer.' +
          " For more than three years, I have been programming bots, server apps, scripts, and SPA " +
          'I aim to become proficient in both <span style="color: #7567ff;font-weight: 500;">backend</span> and <span style="color: #7567ff;font-weight: 500;">frontend</span> development.' +
          " Just a little DevOPS.<br>" +
          "I love chess and cats! " +
          'Und Ich lerne <span style="color: #7567ff;font-weight: 500;">Deutsch</span>!<br>' +
          'You can order the program on my Telegram channel <a style="color: #7567ff;font-weight: 500;" href="https://t.me/kingchev_works">@kingchev_works</a><br>' +
          "You may follow me in my socials, or send a message in DM. Good luck, reader :3"
      ],
      typeSpeed: 25,
      startDelay: 500,
      showCursor: true,
      cursorChar: "|",
      contentType: "html"
    });
  }
};

onMounted(() => {
  setTimeout(() => {
    initTyped();
  }, 100);
});

watch(
  () => route.path,
  (newPath) => {
    if (newPath === "/") {
      setTimeout(() => {
        initTyped();
      }, 100);
    }
  }
);
</script>

<template>
  <navbar />
  <main class="main">
    <section class="column">
      <card>
        <h2>KiNgchev</h2>
        <Avatar />
        <div class="info-table">
          <table class="w-4/5 m-auto">
            <tbody>
              <tr>
                <td class="table-ceil">
                  <h3 class="table-header">Nicknames:</h3>
                </td>
                <td class="table-ceil">
                  <a>kiNgchev, Hisoka Morrow</a>
                </td>
              </tr>
              <tr>
                <td class="table-ceil">
                  <h3 class="table-header">Age:</h3>
                </td>
                <td class="table-ceil">
                  <a>
                    {{
                      convert(age)
                        .toString()
                        .split(" ")
                        .map((word: any) => {
                          return word[0].toUpperCase() + word.substring(1);
                        })
                        .join(" ")
                    }}, {{ age }}
                  </a>
                </td>
              </tr>
              <tr>
                <td class="table-ceil">
                  <h3 class="table-header">Location:</h3>
                </td>
                <td class="table-ceil">
                  <a
                    href="https://yandex.ru/maps/geo/moskva/53166393/"
                    target="_blank"
                  >
                    Russian Federation, Moscow
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
      <card>
        <h2>Socials</h2>
        <div class="socials">
          <social
            v-for="value in socials"
            :source="value.icon"
            :url="value.link"
          />
        </div>
      </card>
    </section>
    <section class="column">
      <card>
        <h2>Bio</h2>
        <p>
          <span ref="typedElement" id="type"></span>
        </p>
      </card>
      <card>
        <h2>What have I mastered?</h2>
        <div class="technologies">
          <shield
            v-for="value in technologies"
            :source="value.icon"
            :label="value.name"
            :url="value.link"
          />
        </div>
      </card>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use "@style/_animations.scss";
@use "@style/_variables.scss";

.type {
  font-family: monospace;
  font-size: 1rem;
}

.typed-cursor {
  font-size: 1rem;
  color: variables.$text-secondary-color;
  animation: blinking 0.7s infinite steps(1);
}

.shield-logo {
  width: 30px;
  height: 30px;
}
</style>
