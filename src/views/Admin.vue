<template>
    <div class="omg-container">
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
.omg-container {
    background-color: transparent;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

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

</style>