<template>
  <img src="@assets/avatar.jpg" alt="kingchev avatar" class="avatar"/>
</template>

<style lang="postcss" scoped>
@import "@style/_variables.scss";

.avatar {
  width: 200px;
  height: 200px;
  border-radius: $border-radius;
  border: 3px solid #7567ff;
  margin: auto;

  -webkit-user-drag: none;
  user-select: none;
}

@media (hover: hover) {
  .avatar:hover {
    transition: $scaling-time;
    transform: scale($scaling-percent-2);
  }

  .avatar:not(:hover) {
    transition: $scaling-time;
    transform: scale(100%);
  }
}

@media (hover: none) {
  .avatar:active {
    transition: $scaling-time;
    transform: scale($scaling-percent-2);
  }

  .avatar:not(:active) {
    transition: $scaling-time;
    transform: scale(100%);
  }
}
</style>