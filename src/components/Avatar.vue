<template>
  <img src="@assets/avatar.jpg" alt="kingchev avatar" class="avatar" />
</template>

<style lang="scss" scoped>
@use "@style/_variables.scss";

.avatar {
  width: 200px;
  height: 200px;
  border-radius: variables.$border-radius;
  border: 3px solid #7567ff;
  margin: auto;

  -webkit-user-drag: none;
  user-select: none;
}

@media (hover: hover) {
  .avatar:hover {
    transition: variables.$scaling-time;
    transform: scale(variables.$scaling-percent-2);
  }

  .avatar:not(:hover) {
    transition: variables.$scaling-time;
    transform: scale(100%);
  }
}

@media (hover: none) {
  .avatar:active {
    transition: variables.$scaling-time;
    transform: scale(variables.$scaling-percent-2);
  }

  .avatar:not(:active) {
    transition: variables.$scaling-time;
    transform: scale(100%);
  }
}
</style>
