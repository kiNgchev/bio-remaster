import { createI18n } from "vue-i18n";
import {en as enMessages} from "./en.ts";
import {ru as ruMessages} from "./ru.ts";

export type Scheme = {
  headers: {
    home: {
      kingchev: string;
      socials: string;
      bio: string;
      mastered: string;
    };
    projects: {
      about: string;
      stats: string;
      projects: string;
    };
    music: {
      about: string;
      stats: string;
    };
  };
  body: {
    home: {
      kingchev: {
        age: {
          header: string;
          field: any;
        };
        nicknames: string;
        location: {
          header: string;
          field: string;
        };
      };
    };
    projects: {
      about: string;
      stats: {
        completed: string;
        years: string;
        contributions: string;
        clients: string;
      };
      projects: {
        demo: string
      };
    };
    music: {
      about: string;
      stats: {
        likes: string;
        playlists: string;
        tracks: string;
        style: {
          header: string;
          description: string;
        };
      };
    };
  };
  projects: {
    sj: string,
    hisoka: string,
    akhs: string,
    reverse: string,
    leetcode: string,
    bio: string
  }
};

const i18n = createI18n<[Scheme], "en" | "ru">({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: enMessages,
    ru: ruMessages
  }
});

const en =
  "Heeeeey... " +
  "Hello! " +
  'I\'m a <span style="color: #7567ff;font-weight: 500;">Kotlin</span>, <span style="color: #7567ff;font-weight: 500;">Go</span> &amp; <span style="color: #7567ff;font-weight: 500;">Rust</span> enjoyer.' +
  " For more than three years, I have been programming bots, server apps, scripts, and SPA " +
  'I aim to become proficient in both <span style="color: #7567ff;font-weight: 500;">backend</span> and <span style="color: #7567ff;font-weight: 500;">frontend</span> development.' +
  " Just a little DevOPS.<br>" +
  "I love chess and cats! " +
  'Und Ich lerne <span style="color: #7567ff;font-weight: 500;">Deutsch</span>!<br>' +
  'You can order the program on my Telegram channel <a style="color: #7567ff;font-weight: 500;" href="https://t.me/kingchev_works">\@kingchev\_works</a><br>' +
  "You may follow me in my socials, or send a message in DM. Good luck, reader :3";

const ru =
  "Хееееей... " +
  "Привет! " +
  'Я <span style="color: #7567ff;font-weight: 500;">Kotlin</span>, <span style="color: #7567ff;font-weight: 500;">Go</span> &amp; <span style="color: #7567ff;font-weight: 500;">Rust</span> любитель.' +
  " Более чем три года я пишу ботов, серверные приложения, скрипты и SPA. " +
  'Я нацелен стать лучше в <span style="color: #7567ff;font-weight: 500;">backend</span> и <span style="color: #7567ff;font-weight: 500;">frontend</span> разработке.' +
  " Чуть-чуть DevOps.<br>" +
  "Я люблю шахматы и котиков! " +
  'Und Ich lerne <span style="color: #7567ff;font-weight: 500;">Deutsch</span>!<br>' +
  'Вы можете заказать что-нибудь в моём Telegram канале <a style="color: #7567ff;font-weight: 500;" href="https://t.me/kingchev\_works">\@kingchev\_works</a><br>' +
  "Вы можете подписаться на мои соц. сети или написать мне в личные сообщения. Удачи, читатель :3";

export function getLocalizedBioText(l: string) {
  if (l === "en") return en;
  else if (l === "ru") return ru;
  else return "Unedfined";
}

export default i18n;
