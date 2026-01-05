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

const technologies = {
  kotlin: {
    id: 1,
    name: "Kotlin",
    link: "https://kotlinlang.org/",
    icon: kotlinSvg
  },
  go: {
    id: 2,
    name: "Go",
    link: "https://go.dev/",
    icon: goSvg
  },
  rust: {
    id: 3,
    name: "Rust",
    link: "https://www.rust-lang.org/",
    icon: rustSvg
  },
  gradle: {
    id: 4,
    name: "Gradle",
    link: "https://gradle.org/",
    icon: gradleSvg
  },
  spring: {
    id: 5,
    name: "Spring",
    link: "https://spring.io/",
    icon: springSvg
  },
  java: {
    id: 6,
    name: "Java",
    link: "https://www.java.com/",
    icon: javaSvg
  },
  groovy: {
    id: 7,
    name: "Groovy",
    link: "https://www.groovy-lang.org/",
    icon: groovySvg
  },
  scala: {
    id: 8,
    name: "Scala",
    link: "https://www.scala-lang.org/",
    icon: scalaSvg
  },
  csharp: {
    id: 9,
    name: "C#",
    link: "https://dotnet.microsoft.com/en-us/languages/csharp",
    icon: csharpSvg
  },
  js: {
    id: 10,
    name: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: jsSvg
  },
  ts: {
    id: 11,
    name: "TypeScript",
    link: "https://www.typescriptlang.org",
    icon: tsSvg
  },
  vue: {
    id: 12,
    name: "Vue",
    link: "https://vuejs.org/",
    icon: vueSvg
  },
  docker: {
    id: 13,
    name: "Docker",
    link: "https://www.docker.com/",
    icon: dockerSvg
  },
  git: {
    id: 14,
    name: "Git",
    link: "https://git-scm.com/",
    icon: gitSvg
  }
};

export default technologies;
