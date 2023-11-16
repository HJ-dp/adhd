<template>
    <div class="header-container">
        <nav class="global-nav">
            <router-link to="/" class="logo" title="클릭하면 메인페이지로 이동해요">
                <img src="/logo/Emblem_Away.png" alt="">
            </router-link>
            <div class="global-nav-items">
                <router-link to="/goods/1" class="global-nav-item" title="클릭하면 판매상품을 볼 수 있어요">판매상품</router-link>
                <a href="#" class="global-nav-item" title="클릭하면 팬들의 오픈마켓으로 이동해요">오픈마켓</a>
                <!-- <a href="" class="global-nav-item">로그인</a> -->
                <router-link to="/login" class="global-nav-item" v-if="isLogined" title="클릭하면 로그인 화면으로 이동해요">로그인</router-link>
                <a href="#" class="global-nav-item" v-if="isLogined" title="클릭하면 ADHD의 회원이 될 수 있어요">회원가입</a>
                <a href="#" class="global-nav-item" v-if="isLogined" title="클릭하면 마이페이지로 이동해요">마이페이지</a>
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