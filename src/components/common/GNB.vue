<template>
    <div class="header-container">
        <nav class="global-nav">
            <router-link to="/" class="logo">
                <img src="/logo/Emblem_Away.png" alt="">
            </router-link>
            <div class="global-nav-items">
                <router-link to="/goods/1" class="global-nav-item">판매상품</router-link>
                <a href="#" class="global-nav-item">오픈마켓</a>
                <!-- <a href="" class="global-nav-item">로그인</a> -->
                <router-link to="/login" class="global-nav-item" v-if="isLogined">로그인</router-link>
                <a href="#" class="global-nav-item" v-if="isLogined">회원가입</a>
                <a href="#" class="global-nav-item" v-if="isLogined">마이페이지</a>
            </div>
        </nav>

    </div>
</template>

<script setup>
import { ref } from 'vue';
const isLogined = ref(true);

</script>

<style scoped>
/* 전체 */
.header-container {
    width: 100%;
    height: 44px;
    position: sticky;
    top:0;
}

/* 상단 네비 */
.global-nav {
    margin: 0 auto;
    max-width: 1024px;
    width: 80%;
    height: 100%;
    background-color: rgb(29, 29, 31);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0 3em;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.global-nav-items {
    display: flex;
    gap: 1em;
}

.global-nav-item:hover {
    transform: scale(1.05);
    transition: 0.2s;
}

.logo {
    background-image: url(/logo/Emblem_Away.png);
    height: 2em;
    width: 3em;
}

.logo:hover {
    transform: scale(1.1);
    transition: 0.2s;
    cursor: pointer;
}

.logo>img {
    width: 100%;
    height: 100%;
}



</style>