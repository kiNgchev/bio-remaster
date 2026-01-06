<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import type { Track } from "@/model/Track.ts";

const props = defineProps<{ playlist: Track[] }>();

const audio = new Audio();
const currentTrackIndex = ref(0);
const isPlaying = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const isLoading = ref(false);

const currentTrack = computed(() => {
  if (props.playlist && props.playlist.length > 0)
    return props.playlist[currentTrackIndex.value];

  return null;
});

const progress = computed(() => {
  return currentTime.value;
});

const togglePlay = () => {
  if (currentTrack.value) {
    if (isPlaying.value) {
      audio.pause();
    } else {
      if (audio.src !== currentTrack.value.src) {
        isLoading.value = true;
        audio.src = currentTrack.value.src;
      }
      audio.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};

const nextTrack = () => {
  if (props.playlist.length > 0) {
    currentTrackIndex.value =
      (currentTrackIndex.value + 1) % props.playlist.length;
    playCurrentTrack();
  }
};

const previousTrack = () => {
  if (props.playlist.length > 0) {
    currentTrackIndex.value =
      (currentTrackIndex.value - 1 + props.playlist.length) %
      props.playlist.length;
    playCurrentTrack();
  }
};

const selectTrack = (index: number) => {
  currentTrackIndex.value = index;
  playCurrentTrack();
};

const playCurrentTrack = () => {
  if (currentTrack.value) {
    isLoading.value = true;
    audio.src = currentTrack.value.src;
    audio.play();
    isPlaying.value = true;
  }
};

const onProgressChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  audio.currentTime = parseFloat(target.value);
  currentTime.value = audio.currentTime;
};

const formatTime = (seconds: number) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.round(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

const updateCurrentTime = () => {
  currentTime.value = audio.currentTime;
  duration.value = audio.duration || 0;
};

const handleEnded = () => {
  isPlaying.value = false;
  nextTrack();
};

const handleLoadStart = () => {
  isLoading.value = true;
};

const handleCanPlay = () => {
  isLoading.value = false;
};

const handleWaiting = () => {
  isLoading.value = true;
};

const handlePlaying = () => {
  isLoading.value = false;
};

onMounted(() => {
  audio.addEventListener("timeupdate", updateCurrentTime);
  audio.addEventListener("ended", handleEnded);
  audio.addEventListener("loadstart", handleLoadStart);
  audio.addEventListener("canplay", handleCanPlay);
  audio.addEventListener("waiting", handleWaiting);
  audio.addEventListener("playing", handlePlaying);
});

onUnmounted(() => {
  audio.removeEventListener("timeupdate", updateCurrentTime);
  audio.removeEventListener("ended", handleEnded);
  audio.removeEventListener("loadstart", handleLoadStart);
  audio.removeEventListener("canplay", handleCanPlay);
  audio.removeEventListener("waiting", handleWaiting);
  audio.removeEventListener("playing", handlePlaying);
  audio.pause();
});
</script>

<template>
  <div class="music-player">
    <div class="player-controls">
      <div class="track-info">
        <img
          :src="currentTrack?.cover"
          :alt="currentTrack?.title"
          class="cover"
        />
        <div class="track-details">
          <h3 class="track-title">{{ currentTrack?.title }}</h3>
          <p class="track-artist">{{ currentTrack?.artist }}</p>
        </div>
      </div>

      <div class="player-controls-main">
        <button @click="previousTrack" class="control-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>

        <button @click="togglePlay" class="play-btn" :disabled="isLoading">
          <div v-if="isLoading" class="ring-loader">
            <svg class="ring-loader-svg" viewBox="0 0 38 38">
              <circle
                class="ring-loader-path"
                cx="19"
                cy="19"
                r="15"
                fill="none"
                stroke-width="4"
              />
            </svg>
          </div>
          <svg
            v-else-if="!isPlaying"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg
            v-else
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </button>

        <button @click="nextTrack" class="control-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
      </div>

      <div class="progress-container">
        <span class="time">{{ formatTime(currentTime) }}</span>
        <input
          type="range"
          class="progress-bar"
          :value="progress"
          @input="onProgressChange"
          :max="duration"
          :disabled="isLoading"
        />
        <span class="time">{{ formatTime(duration) }}</span>
      </div>
    </div>

    <div class="playlist">
      <div
        v-for="(track, index) in playlist"
        :key="index"
        class="playlist-item"
        :class="{ active: index === currentTrackIndex }"
        @click="selectTrack(index)"
      >
        <span class="playlist-item-position">{{ track.id }}</span>
        <div class="playlist-item-info">
          <p class="playlist-item-title">{{ track.title }}</p>
          <p class="playlist-item-artist">{{ track.artist }}</p>
        </div>
        <span class="playlist-item-duration">{{
          formatTime(track.duration)
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "sass:color";
@use "@style/_variables.scss";

.music-player {
  background: white;
  border-radius: variables.$border-radius;
  padding: 20px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.track-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  .cover {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    margin-right: 15px;
    object-fit: cover;
    -webkit-user-drag: none;
    user-select: none;

    @media (hover: hover) {
      &:hover {
        transition: variables.$scaling-time;
        transform: scale(variables.$scaling-percent-1);
      }

      &:not(:hover) {
        transition: variables.$scaling-time;
        transform: scale(100%);
      }
    }

    @media (hover: none) {
      &:active {
        transition: variables.$scaling-time;
        transform: scale(variables.$scaling-percent-1);
      }

      &:not(:active) {
        transition: variables.$scaling-time;
        transform: scale(100%);
      }
    }
  }

  .track-details {
    justify-content: start;
    justify-items: start;

    .track-title {
      font-size: 1.2rem;
      color: variables.$text-primary-color;
    }

    .track-artist {
      color: #666;
      font-size: 0.9rem;
    }
  }
}

.player-controls-main {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  .control-btn {
    background: none;
    border: none;
    color: variables.$text-primary-color;
    cursor: pointer;
    padding: 8px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .play-btn {
    background: variables.$primary-color;
    border: none;
    color: white;
    cursor: pointer;
    padding: 12px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    position: relative;

    &:hover {
      background-color: color.adjust(
        variables.$primary-color,
        $lightness: -10%
      );
    }

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}

.ring-loader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &-svg {
    width: 24px;
    height: 24px;
    transform: rotate(-90deg);
  }

  &-path {
    stroke: white;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
}

.progress-container {
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  .time {
    font-size: 0.8rem;
    color: #666;
    min-width: 40px;
  }

  .progress-bar {
    flex: 1;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
    outline: none;
    -webkit-appearance: none;

    &[disabled] {
      opacity: 0.6;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: variables.$primary-color;
      cursor: pointer;
    }
  }
}

.playlist {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;

  .playlist-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      background-color: #e6e6ff;

      .playlist-item-title {
        color: variables.$primary-color;
      }
    }

    .playlist-item-info {
      flex: 1;

      .playlist-item-title {
        margin: 0 0 3px 0;
        font-weight: 500;
        color: variables.$text-primary-color;
      }

      .playlist-item-artist {
        margin: 0;
        font-size: 0.8rem;
        color: #666;
      }
    }

    .playlist-item-position {
      font-size: 1rem;
      color: #666;
    }

    .playlist-item-duration {
      font-size: 0.8rem;
      color: #666;
    }
  }
}
</style>
