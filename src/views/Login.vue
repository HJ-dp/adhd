<template>
  <div class="login-container">
    <video class="promotion-video" autoplay="autoplay" loop="loop" src="/banner/back.mp4">
    </video>
    <div class="logo"></div>
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* 트랜지션 */
.slide-enter-active,
.slide-leave-active
{
  transition: all 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
}

/* 비디오 */
.promotion-video {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
  z-index: -3;
}

/* 로고 */
.logo {
  background-image: url(/logo/Emblem_Home.png);
  /* width: 315px; */
  width: 100%;
  max-width: 350px;
  max-height: 240px;
  /* height: 215px; */
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 10vh;
  z-index: -1;
}


.login-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  z-index: 1;
  background: linear-gradient(to right, rgb(92, 142, 187), rgb(29, 70, 125));
}
</style>