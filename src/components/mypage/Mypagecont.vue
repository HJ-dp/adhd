<template>
    <div class="grid-container">
        <router-link :to="{name:'mylist'}" class="box title list">내가 찜한</router-link>
        <router-link :to="{name:'mycart'}" class="box title">장바구니</router-link>
        <myinfo />
        <router-link :to="{name:'myorder'}" class="box title order">주문내역</router-link>
        <router-link :to="{name:'myaddress'}" class="box title">나의 배송지</router-link>
        <router-link :to="{name:'myorder'}" class="box title">내 정보 수정</router-link>
        <router-link :to="{name:'myreview'}" class="box title">내가 남긴 리뷰</router-link>
        <router-link :to="{name:'myquestion'}" class="box title">내가 남긴 문의사항</router-link>
        <router-link :to="{name:'mynotice'}" class="box title notice">공지사항</router-link>
    </div>
</template>
<!-- <a href="https://kr.freepik.com/free-psd/megaphone-isolated-3d-render-icon-illustration_28788633.htm#query=3d&position=4&from_view=keyword&track=sph&uuid=8ee17b0d-502c-43bc-8730-b126a06c9ca2">작가 Xvect intern</a> 출처 Freepik -->
<script setup>
import myinfo from './MyInfo.vue'

</script>

<style scoped>
.grid-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}
.box {
    height: 200px;
    border-radius: 10px;
    padding: 1rem;
    margin:1rem;
    justify-content: space-between;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}
.box:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
}

.title {
    font-size: 24px;
    font-weight: 600;
}


/* 이미지 삽입 */
.notice {
    background-image: url('/megaphone.jpg');
    background-size: cover;
}

.order {
    background-image: url('/3drender.jpg');
    background-size: cover;
}

.list {
    background-image: url('/3dheart.jpg');
    background-size: cover;
    background-position: 0 40%;
}

@media (max-width:768px) {
    .grid-container{
        grid-template-columns: 1fr;
    }
}

@media (min-width:768px) and (max-width:1024px) {
    .grid-container{
        grid-template-columns: 1fr 1fr;
    }
}

</style>