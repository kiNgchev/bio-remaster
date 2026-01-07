export default interface Project {
  id: number;
  name: string;
  description: string;
  source: string | null;
  demo: string | null;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "SJ",
    description: "projects.sj",
    source: null,
    demo: "https://swapjob.ru"
  },
  {
    id: 2,
    name: "Hisoka Morrow Bot",
    description: "projects.hisoka",
    source: "https://github.com/kiNgchev/Hisoka",
    demo: "https://discord.com/oauth2/authorize?client_id=1271073974356279396&permissions=8&integration_type=0&scope=bot"
  },
  {
    id: 3,
    name: "AKHS",
    description: "projects.akhs",
    source: "https://github.com/kiNgchev/AKHS",
    demo: null
  },
  {
    id: 4,
    name: "Reverse Rewrite",
    description: "projects.reverse",
    source: "https://github.com/kiNgchev/ReverseRewrite",
    demo: "https://discord.com/oauth2/authorize?client_id=979745072843206686&permissions=8&integration_type=0&scope=bot"
  },
  {
    id: 5,
    name: "Leetcode-rs",
    description: "projects.leetcode",
    source: "https://github.com/kiNgchev/leetcode-rs",
    demo: null
  },
  {
    id: 6,
    name: "Bio",
    description: "projects.bio",
    source: "https://github.com/kiNgchev/bio-remaster",
    demo: "/"
  }
];
