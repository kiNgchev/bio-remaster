<script setup lang="ts">
import Avatar from "@components/Avatar.vue";
import { calculateAge } from "../utils/timeUtils.ts";
import Card from "@components/Card.vue";
import Shield from "@components/Shield.vue";
import Typed from "typed.js";
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";

import socials from "@assets/socials";
import technologies from "@assets/technologies";

import Social from "@components/Social.vue";
import { useI18n } from "vue-i18n";

const route = useRoute();
const { t, locale } = useI18n();
const age = calculateAge(7, 6, 2007);
let typedInstances: Typed[] = [];

const initTyped = () => {
  if (typedInstances.length !== 0) {
    for (const typedInstance of typedInstances)
      typedInstance.destroy();
  }

  typedInstances.push(new Typed('#ageTyped', {
    strings: [`${t("body.home.kingchev.age.field", { age: age })}, ${age}`],
    typeSpeed: 10,
    startDelay: 500,
    showCursor: true,
    cursorChar: "|",
    contentType: "html"
  }))

  typedInstances.push(new Typed('#locationTyped', {
    strings: [t("body.home.kingchev.location.field")],
    typeSpeed: 10,
    startDelay: 500,
    showCursor: true,
    cursorChar: "|",
    contentType: "html"
  }))

  typedInstances.push(new Typed('#timezoneTyped', {
    strings: [t("body.home.kingchev.timezone.field")],
    typeSpeed: 10,
    startDelay: 500,
    showCursor: true,
    cursorChar: "|",
    contentType: "html"
  }))
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

watch(
  () => locale.value,
  (_) => {
    setTimeout(() => {
      initTyped();
    }, 100);
  }
);
</script>

<template>
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
                  <h3 class="table-header">
                    {{ $t("body.home.kingchev.nicknames") }}:
                  </h3>
                </td>
                <td class="table-ceil">
                  <a>kiNgchev, Hisoka Morrow</a>
                </td>
              </tr>
              <tr>
                <td class="table-ceil">
                  <h3 class="table-header">
                    {{ $t("body.home.kingchev.age.header") }}:
                  </h3>
                </td>
                <td class="table-ceil">
                  <a>
                    <span id="ageTyped"></span>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="table-ceil">
                  <h3 class="table-header">
                    {{ $t("body.home.kingchev.location.header") }}:
                  </h3>
                </td>
                <td class="table-ceil">
                  <a
                    href="https://yandex.ru/maps/geo/moskva/53166393/"
                    target="_blank"
                  >
                    <span id="locationTyped"></span>
                  </a>
                </td>
              </tr>
              <tr>
                <td class="table-ceil">
                  <h3 class="table-header">
                    {{ $t("body.home.kingchev.timezone.header") }}:
                  </h3>
                </td>
                <td class="table-ceil">
                  <a>
                    <span id="timezoneTyped"></span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
      <card>
        <h2>{{ $t("headers.home.socials") }}</h2>
        <div class="socials">
          <social
            v-for="value in socials"
            :source="value.icon"
            :name="value.name"
            :url="value.link"
          />
        </div>
      </card>
    </section>
    <section class="column">
      <card class="bio-container">
        <h2>{{ $t("headers.home.bio") }}</h2>
        <p v-html="$t('body.home.kingchev.bio')"></p>
      </card>
      <card>
        <h2>{{ $t("headers.home.mastered") }}</h2>
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
@use "@style/animations";
@use "@style/vars";
.table-info {
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-evenly;
}

.table-header {
  margin: 0;
}

.table-ceil:nth-child(odd) {
  width: 30%;
  text-align: start;
  vertical-align: top;
}

.table-ceil a {
  font-weight: 500;
}

.socials {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-evenly;
  gap: 10px;
}

.technologies {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-evenly;
  justify-content: space-evenly;
  gap: 5px
}

.typed-cursor {
  font-size: 1rem;
  color: vars.$secondary-text;
  animation: blinking 0.7s infinite steps(1);
}
</style>
