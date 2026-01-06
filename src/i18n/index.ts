import {createI18n} from "vue-i18n";
import {convertToEn, convertToRu} from "@/utils/timeUtils.ts";

type Scheme = {
  headers: {
    home: {
      kingchev: string,
      socials: string,
      bio: string,
      mastered: string
    },
    projects: {
      about: string,
      stats: string,
      projects: string,
    },
    music: {
      about: string,
      stats: string
    }
  },
  body: {
    home: {
      kingchev: {
        age: {
          header: string,
          field: any
        },
        nicknames: string,
        location: {
          header: string,
          field: string
        }
      },
    }
    projects: {
      about: string,
      stats: {
        completed: string,
        years: string,
        contributions: string,
        clients: string
      },
    },
    music: {
      about: string,
      stats: {
        likes: string,
        playlists: string,
        tracks: string,
        style: {
          header: string,
          description: string
        }
      }
    }
  },
}

const i18n = createI18n<[Scheme], "en" | "ru">({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
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
          projects: "Featured Projects",
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
              field: ({ named }) => convertToEn(named("age"))
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
              field: "Russian Federation, Moscow",
            }
          },
        },
        projects: {
          about: "Here are some of the projects I've worked on. You can find more on my <a href=\"https://github.com/kiNgchev\">Github</a> profile.",
          stats: {
            completed: "Projects Completed",
            years: "Years Experience",
            contributions: "Contributions",
            clients: "Happy Clients"
          },
        },
        music: {
          about: "Music is an integral part of my life. Without music, I only sleep. That is why I want to share my favorite tracks.",
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
      }
    },
    ru: {
      headers: {
        home: {
          kingchev: "kiNgchev",
          socials: "Соцсети",
          bio: "Биография",
          mastered: "Что я изучил?"
        },
        projects: {
          about: "О моих проектах",
          stats: "Статистика проектов",
          projects: "Проекты",
        },
        music: {
          about: "О моей любимой музыке",
          stats: "Статистика Яндекс музыки"
        }
      },
      body: {
        home: {
          kingchev: {
            age: {
              header: "Возраст",
              field: ({ named }) => convertToRu(named("age"))
                .toString()
                .split(" ")
                .map((word: any) => {
                  return word[0].toUpperCase() + word.substring(1);
                })
                .join(" ")
            },
            nicknames: "Ники",
            location: {
              header: "Локация",
              field: "Российская Федерация, Москва",
            }
          }
        },
        projects: {
          about: "Здесь представлены некоторые из проектов, над которыми я работал. Найти больше вы можете в моем <a href=\"https://github.com/kiNgchev\">Github</a>-профиле.",
          stats: {
            completed: "Завершенных проекта",
            years: "Года опыта",
            contributions: "Контрибуций",
            clients: "Довольных клиента"
          },
        },
        music: {
          about: "Музыка — неотъемлемая часть моей жизни. Без музыки я, разве что, сплю. Именно поэтому я хочу поделиться своими любимыми треками",
          stats: {
            likes: "Понравившихся",
            playlists: "Плейлистов",
            tracks: "Треков",
            style: {
              header: "Кавер",
              description: "Мой любимый музыкальный жанр"
            }
          }
        }
      }
    }
  }
})

const en = "Heeeeey... " +
  "Hello! " +
  'I\'m a <span style="color: #7567ff;font-weight: 500;">Kotlin</span>, <span style="color: #7567ff;font-weight: 500;">Go</span> &amp; <span style="color: #7567ff;font-weight: 500;">Rust</span> enjoyer.' +
  " For more than three years, I have been programming bots, server apps, scripts, and SPA " +
  'I aim to become proficient in both <span style="color: #7567ff;font-weight: 500;">backend</span> and <span style="color: #7567ff;font-weight: 500;">frontend</span> development.' +
  " Just a little DevOPS.<br>" +
  "I love chess and cats! " +
  'Und Ich lerne <span style="color: #7567ff;font-weight: 500;">Deutsch</span>!<br>' +
  'You can order the program on my Telegram channel <a style="color: #7567ff;font-weight: 500;" href="https://t.me/kingchev_works">\@kingchev\_works</a><br>' +
  "You may follow me in my socials, or send a message in DM. Good luck, reader :3"

const ru = "Хееееей... " +
  "Привет " +
  'Я <span style="color: #7567ff;font-weight: 500;">Kotlin</span>, <span style="color: #7567ff;font-weight: 500;">Go</span> &amp; <span style="color: #7567ff;font-weight: 500;">Rust</span> любитель.' +
  " Более чем три года я пишу ботов, серверные приложения, скрипты и SPA" +
  'Я нацелен стать лучше в <span style="color: #7567ff;font-weight: 500;">backend</span> и <span style="color: #7567ff;font-weight: 500;">frontend</span> разработке.' +
  " Чуть-чуть DevOps.<br>" +
  "Я люблю шахматы и котиков! " +
  'Und Ich lerne <span style="color: #7567ff;font-weight: 500;">Deutsch</span>!<br>' +
  'Вы можете заказать что-нибудь в моём Telegram канале <a style="color: #7567ff;font-weight: 500;" href="https://t.me/kingchev\_works">\@kingchev\_works</a><br>' +
  "Вы можете подписаться на мои соц. сети или написать мне в личные сообщения. Удачи, читатель :3"

export function getLocalizedBioText(l: string) {
  if (l === "en")
    return en
  else if (l === "ru")
    return ru
  else return "Unedfined"
}

export default i18n;