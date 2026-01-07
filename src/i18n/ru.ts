import type { Scheme } from "@/i18n/index.ts";
import { convertToRu } from "@/utils/timeUtils.ts";

export const ru: Scheme = {
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
      projects: "Проекты"
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
          field: ({ named }) =>
            convertToRu(named("age"))
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
          field: "Российская Федерация, Москва"
        },
        timezone: {
          header: "Часовой пояс",
          field: "UTC+3, Московский",
        }
      }
    },
    projects: {
      about:
        'Здесь представлены некоторые из проектов, над которыми я работал. Найти больше вы можете в моем <a href="https://github.com/kiNgchev">Github</a>-профиле.',
      stats: {
        completed: "Завершенных проекта",
        years: "Года опыта",
        contributions: "Контрибуций",
        clients: "Довольных клиента"
      },
      projects: {
        demo: "Демонстрация"
      }
    },
    music: {
      about:
        "Музыка — неотъемлемая часть моей жизни. Без музыки я, разве что, сплю. Именно поэтому я хочу поделиться своими любимыми треками",
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
  },
  projects: {
    sj: "Сервис, использующий механику Тиндера для поиска работы.",
    hisoka:
      'Мультифункциональный дискорд бот, стилизованный как Хисока Мороу из аниме <a target="_blank" href="https://en.wikipedia.org/wiki/Hunter_×_Hunter">Hunter x Hunter</a>. Бот написан на Kotlin.',
    akhs: "Совокупность сервисов для автоматизации различных задач, написана на Kotlin с использованием Spring Framework. Все сервисы связаны друг с другом с помощью Apache Kafka.",
    reverse:
      "Переписанная версия моего первого проекта и моего первого дискорд бота.",
    leetcode:
      'Мои решения задач с <a target="_blank" href="https://leetcode.com/u/kingchev/">Leetcode</a>, написанные на Rust.',
    bio: "Мой собственный сайт-визитка, написанный на TypeScript и Vue.js."
  }
};
