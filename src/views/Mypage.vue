<template>
    <div class="wrapper">
        <mypagebanner />
        <div class="mypage-container">
            <mypagenav />
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
}
</style>