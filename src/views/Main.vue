<script setup lang="ts">
import Avatar from "../components/Avatar.vue";
import { calculateAge } from "../utils/timeUtils.ts";
import { convert } from "../utils/timeUtils.ts";
import Card from "../components/Card.vue";
import Shield from "../components/Shield.vue";
import Typed from "typed.js";

// socials
import githubSvg from "@assets/socials/github.svg?url"
import discordSvg from "@assets/socials/discord.svg?url"
import xSvg from "@assets/socials/x.svg?url"
import twitchSvg from "@assets/socials/twitch.svg?url"
import telegramSvg from "@assets/socials/telegram.svg?url"
import youtubeSvg from "@assets/socials/youtube.svg?url"

// techs
import kotlinSvg from "@assets/technologies/kotlin.svg?url";
import goSvg from "@assets/technologies/go.svg?url";
import rustSvg from "@assets/technologies/rust.svg?url";
import gradleSvg from "@assets/technologies/gradle.svg?url";
import springSvg from "@assets/technologies/spring.svg?url";
import javaSvg from "@assets/technologies/java.svg?url";
import groovySvg from "@assets/technologies/groovy.svg?url";
import scalaSvg from "@assets/technologies/scala.svg?url";
import csharpSvg from "@assets/technologies/c-sharp.svg?url";
import jsSvg from "@assets/technologies/js.svg?url";
import tsSvg from "@assets/technologies/ts.svg?url";
import vueSvg from "@assets/technologies/vue.svg?url";
import dockerSvg from "@assets/technologies/docker.svg?url";
import gitSvg from "@assets/technologies/git.svg?url";

const age = calculateAge(7,6,2007)

document.addEventListener('DOMContentLoaded', () => {
  new Typed('#type', {
    strings: [
      'Heeeeey... ' +
      'Hello! ' +
      'I\'m a <span style="color: #7567ff;font-weight: 500;">Kotlin</span> &amp; <span style="color: #7567ff;font-weight: 500;">Go</span> &amp; <span style="color: #7567ff;font-weight: 500;">Rust</span> enjoyer.' +
      ' For more than three years I program bots, server apps, scripts, SPA. ' +
      'I wanna be cool at <span style="color: #7567ff;font-weight: 500;">backend</span> and <span style="color: #7567ff;font-weight: 500;">frontend</span> development.' +
      ' Just a little DevOPS.<br>' +
      'I love chess and cats! ' +
      'Und Ich lerne <span style="color: #7567ff;font-weight: 500;">Deutsch</span>!<br>' +
      'You may follow me in my socials, or send a message in DM. Good luck, reader :3'
    ],
    typeSpeed: 50,
    startDelay: 500,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'
  });
});
</script>

<template>
  <main class="main">
    <section class="column">
      <card>
        <h2>KiNgchev</h2>
        <Avatar />
        <div class="info-table">
          <table style="width: 80%; margin: auto">
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
                    convert(age).toString()
                        .split(' ')
                        .map((word: any) => { return word[0].toUpperCase() + word.substring(1) })
                        .join(' ')
                  }}, {{age}}
                </a>
              </td>
            </tr>
            <tr>
              <td class="table-ceil">
                <h3 class="table-header">Location:</h3>
              </td>
              <td class="table-ceil">
                <a href="https://yandex.ru/maps/geo/sarov/53082682/?ll=43.346066%2C54.911365&z=12.29" target="_blank">
                  Russian Federation, Sarov
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
          <a target="_blank" href="https://github.com/kiNgchev">
            <img :src="githubSvg" alt="kingchev github" class="social"/>
          </a>
          <a target="_blank" href="https://discord.com/users/743878110747033691">
            <img :src="discordSvg" alt="kingchev discord" class="social"/>
          </a>
          <a target="_blank" href="https://x.com/TheKiNgchev?t=XMZWxPmnL9kAAum9iMfBEQ&s=09">
            <img :src="xSvg" alt="kingchev x" class="social"/>
          </a>
          <a target="_blank" href="https://www.twitch.tv/k1ngchev">
            <img :src="twitchSvg" alt="kingchev twitch" class="social"/>
          </a>
          <a target="_blank" href="https://t.me/k1ngchev">
            <img :src="telegramSvg" alt="kingchev telegram channel" class="social"/>
          </a>
          <a target="_blank" href="https://www.youtube.com/@_k1ngchev">
            <img :src="youtubeSvg" alt="kingchev youtube" class="social"/>
          </a>
        </div>
      </card>
    </section>
    <section class="column">
      <card>
        <h2>Bio</h2>
        <p>
          <span id="type"></span>
        </p>
      </card>
      <card>
        <h2>What have I mastered?</h2>
        <div class="technologies">
          <shield :source="kotlinSvg" label="Kotlin" url="https://kotlinlang.org/"/>
          <shield :source="goSvg" label="Go" url="https://go.dev/"/>
          <shield :source="rustSvg" label="Rust" url="https://www.rust-lang.org/"/>
          <shield :source="gradleSvg" label="Gradle" url="https://gradle.org/"/>
          <shield :source="springSvg" label="Spring" url="https://spring.io/"/>
          <shield :source="javaSvg" label="Java" url="https://www.java.com/"/>
          <shield :source="groovySvg" label="Groovy" url="https://www.groovy-lang.org/"/>
          <shield :source="scalaSvg" label="Scala" url="https://scala-lang.org/"/>
          <shield :source="csharpSvg" label="C#" url="https://dotnet.microsoft.com/en-us/languages/csharp"/>
          <shield :source="jsSvg" label="JavaScript" url="https://nodejs.org/"/>
          <shield :source="tsSvg" label="TypeScript" url="https://www.typescriptlang.org/"/>
          <shield :source="vueSvg" label="Vue" url="https://vuejs.org/"/>
          <shield :source="dockerSvg" label="Docker" url="https://www.docker.com/"/>
          <shield :source="gitSvg" label="Git" url="https://git-scm.com/"/>
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
