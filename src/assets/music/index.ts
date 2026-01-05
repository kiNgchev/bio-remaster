import type { Track } from "@/model/Track.ts";
import mws from "@assets/music/source/my_war.mp3";
import mwc from "@assets/music/covers/my_war.png";
import swss from "@assets/music/source/shinzou_wo_sasageyo.mp3";
import swsc from "@assets/music/covers/shinzou_wo_sasageyo.png";
import ds from "@assets/music/source/discord.mp3";
import dc from "@assets/music/covers/discord.png";

const music: Track[] = [
  {
    id: "1",
    title: "Shinzou wo Sasageyo!",
    artist: "Jackie-O",
    src: swss,
    cover: swsc,
    duration: 340
  },
  {
    id: "2",
    title: "My War",
    artist: "Jackie-O",
    src: mws,
    cover: mwc,
    duration: 273
  },
  {
    id: "3",
    title: "Discord",
    artist: "The Living Tombstone, Eurobeat Brony",

    src: ds,
    cover: dc,
    duration: 196
  }
];

export default music;
