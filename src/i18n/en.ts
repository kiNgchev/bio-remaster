import {convertToEn} from "@/utils/timeUtils.ts";
import type {Scheme} from "@/i18n/index.ts";

export const en: Scheme = {
  headers: {
    home: {
      kingchev: "kiNgchev",
        socials: "Socials",
        bio: "Bio",
        mastered: "What have I mastered?"
    },
    projects: {
      about: "About my projects",
        stats: "Project stats",
        projects: "Featured Projects"
    },
    music: {
      about: "About my favorite music",
        stats: "Yandex music stats"
    }
  },
  body: {
    home: {
      kingchev: {
        age: {
          header: "Age",
            field: ({ named }) =>
            convertToEn(named("age"))
              .toString()
              .split(" ")
              .map((word: any) => {
                return word[0].toUpperCase() + word.substring(1);
              })
              .join(" ")
        },
        nicknames: "Nicknames",
          location: {
          header: "Location",
            field: "Russian Federation, Moscow"
        }
      }
    },
    projects: {
      about:
        'Here are some of the projects I\'ve worked on. You can find more on my <a href="https://github.com/kiNgchev">Github</a> profile.',
      stats: {
        completed: "Projects Completed",
        years: "Years Experience",
        contributions: "Contributions",
        clients: "Happy Clients"
      },
      projects: {
        demo: "Live demo"
      }
    },
    music: {
      about:
        "Music is an integral part of my life. Without music, I only sleep. That is why I want to share my favorite tracks.",
          stats: {
        likes: "Likes",
          playlists: "Playlists",
          tracks: "Tracks",
          style: {
          header: "Cover version",
            description: "My favorite music style"
        }
      }
    }
  },
  projects: {
    sj: "Service that uses Tinder-like mechanism for job hunting.",
    hisoka: "Multifunctional Discord bot stylized as Hisoka Morrow from <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Hunter_×_Hunter\">Hunter x Hunter</a>. Bot was written on Kotlin.",
    akhs: "Collection of services for automation tasks, written on Kotlin with Spring Framework. All services linked with each other with the help of Apache Kafka.",
    reverse: "Rewrote version of my first project and my first Discord bot.",
    leetcode: "My owned <a target=\"_blank\" href=\"https://leetcode.com/u/kingchev/\">Leetcode</a> problems solves, written on Rust.",
    bio: "My own bio website, written on TypeScript and Vue.js."
  }
}