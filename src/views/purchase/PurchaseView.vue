<template>
    <div>
        <theBanner />
        <router-view v-slot="{ Component }">
            <transition name="slide" mode="out-in">
                <component :is="Component" :key="$route.path" />
            </transition>
        </router-view>
    </div>
</template>

<script setup>
import theBanner from '../../components/banner/PurchaseBanner.vue'

</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 1s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(-30%);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(30%);
}
</style>