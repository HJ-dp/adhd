<template>
    <div class="wrapper">
        <mypagebanner />
        <div class="mypage-container">
            <!-- <mypagenav /> -->
            <div style="margin-bottom:2em"></div>
            <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <component :is="Component" :key="$route.path" />
                </transition>
            </router-view>
        </div>
    </div>
</template>

<script setup>
import mypagebanner from '../components/banner/LoginBanner.vue';
import mypagenav from '../components/mypage/MypageNav.vue'
</script>

<style scoped>
.mypage-container {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    gap: 2rem;
}

/* 트랜지션 */
/* .slide-enter-active,
.slide-leave-active
{
  transition: all 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to{
  opacity: 0;
  transform: translateX(-30%);
} */

.slide-enter-active,
.slide-leave-active
{
  transition: all 1s ease;
}

.slide-enter-from{
  opacity: 0;
  transform: translateX(-30%);
}

.slide-leave-to{
    opacity: 0;
    transform: translateX(30%);
}


</style>