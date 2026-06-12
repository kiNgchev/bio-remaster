<template>
  <img src="@assets/avatar.jpg" alt="kingchev avatar" class="avatar" />
</template>

<style lang="scss" scoped>
@use "@style/vars";

.avatar {
  width: 200px;
  height: 200px;
  border-radius: vars.$border-radius;
  border: 3px solid vars.$quaternary;
  margin: auto;

  -webkit-user-drag: none;
  user-select: none;
}

@media (hover: hover) {
  .avatar:hover {
    transition: vars.$scaling-time;
    transform: scale(vars.$scaling-percent-2);
  }

  .avatar:not(:hover) {
    transition: vars.$scaling-time;
    transform: scale(100%);
  }
}

@media (hover: none) {
  .avatar:active {
    transition: vars.$scaling-time;
    transform: scale(vars.$scaling-percent-2);
  }

  .avatar:not(:active) {
    transition: vars.$scaling-time;
    transform: scale(100%);
  }
}
</style>
