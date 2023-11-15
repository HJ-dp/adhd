<template>
    <div class="header-container">
        <nav class="global-nav">
            <div class="logo">
                <img src="/logo/Emblem_Away.png" alt="">
            </div>
            <div class="global-nav-items">
                <a href="" class="global-nav-item">판매상품</a>
                <a href="" class="global-nav-item">오픈마켓</a>
                <!-- <a href="" class="global-nav-item">로그인</a> -->
                <router-link to="/login" class="global-nav-item" v-if="isLogined">로그인</router-link>
                <a href="" class="global-nav-item" v-if="isLogined">회원가입</a>
                <a href="" class="global-nav-item" v-if="isLogined">마이페이지</a>
            </div>
        </nav>
        <div class="title-banner-container">
        </div>
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
    /* position: relative; */
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

.global-nav-item:hover{
    transform: scale(1.1);
    transition: 0.2s;
}

.logo {
    background-image: url(/logo/Emblem_Away.png);
    height: 2em;
    width: 3em;
}

.logo:hover{
    transform: scale(1.1);
    transition: 0.2s;
    cursor: pointer;
}

.logo>img {
    width: 100%;
    height: 100%;
}


/* 헤더 배너 */
.title-banner-container {
    background-image: url(/banner/titlebanner.jpg);
    background-size: cover;
    background-position: 50% 72%;
    background-color: gray;
    height: 400px;
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    z-index: -1;
}

</style>