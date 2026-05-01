import { createI18n } from "vue-i18n";
import { en as enMessages } from "./en.ts";
import { ru as ruMessages } from "./ru.ts";

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
        timezone: {
          header: string;
          field: string;
        };
        bio: string;
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
        demo: string;
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
    sj: string;
    linaribot: string;
    hisoka: string;
    akhs: string;
    reverse: string;
    leetcode: string;
    bio: string;
    zenit: string;
  };
};

const i18n = createI18n<[Scheme], "en" | "ru">({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: enMessages,
    ru: ruMessages
  }
});

export default i18n;
