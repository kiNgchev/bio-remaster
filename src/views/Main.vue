<script setup lang="ts">
import Avatar from "../components/Avatar.vue";
import { calculateAge } from "../utils/timeUtils.ts";
import { convert } from "../utils/timeUtils.ts";
import Card from "../components/Card.vue";
import Shield from "../components/Shield.vue";
import Typed from "typed.js";

// socials
//@ts-ignore
import socials from "@assets/socials";

// techs
//@ts-ignore
import technologies from "@assets/technologies";

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
            <img :src="socials.githubSvg" alt="kingchev github" class="social"/>
          </a>
          <a target="_blank" href="https://discord.com/users/743878110747033691">
            <img :src="socials.discordSvg" alt="kingchev discord" class="social"/>
          </a>
          <a target="_blank" href="https://x.com/TheKiNgchev?t=XMZWxPmnL9kAAum9iMfBEQ&s=09">
            <img :src="socials.xSvg" alt="kingchev x" class="social"/>
          </a>
          <a target="_blank" href="https://www.twitch.tv/k1ngchev">
            <img :src="socials.twitchSvg" alt="kingchev twitch" class="social"/>
          </a>
          <a target="_blank" href="https://t.me/k1ngchev">
            <img :src="socials.telegramSvg" alt="kingchev telegram channel" class="social"/>
          </a>
          <a target="_blank" href="https://www.youtube.com/@_k1ngchev">
            <img :src="socials.youtubeSvg" alt="kingchev youtube" class="social"/>
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
          <shield :source="technologies.kotlinSvg" label="Kotlin" url="https://kotlinlang.org/"/>
          <shield :source="technologies.goSvg" label="Go" url="https://go.dev/"/>
          <shield :source="technologies.rustSvg" label="Rust" url="https://www.rust-lang.org/"/>
          <shield :source="technologies.gradleSvg" label="Gradle" url="https://gradle.org/"/>
          <shield :source="technologies.springSvg" label="Spring" url="https://spring.io/"/>
          <shield :source="technologies.javaSvg" label="Java" url="https://www.java.com/"/>
          <shield :source="technologies.groovySvg" label="Groovy" url="https://www.groovy-lang.org/"/>
          <shield :source="technologies.scalaSvg" label="Scala" url="https://scala-lang.org/"/>
          <shield :source="technologies.csharpSvg" label="C#" url="https://dotnet.microsoft.com/en-us/languages/csharp"/>
          <shield :source="technologies.jsSvg" label="JavaScript" url="https://nodejs.org/"/>
          <shield :source="technologies.tsSvg" label="TypeScript" url="https://www.typescriptlang.org/"/>
          <shield :source="technologies.vueSvg" label="Vue" url="https://vuejs.org/"/>
          <shield :source="technologies.dockerSvg" label="Docker" url="https://www.docker.com/"/>
          <shield :source="technologies.gitSvg" label="Git" url="https://git-scm.com/"/>
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
