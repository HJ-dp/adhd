<template>
    <div class="grid-container">
        <router-link :to="{name:'mylist'}" class="box title">내가 찜한</router-link>
        <router-link :to="{name:'mycart'}" class="box title">장바구니</router-link>
        <myinfo />
        <router-link :to="{name:'myorder'}" class="box title">주문내역</router-link>
        <router-link :to="{name:'myaddress'}" class="box title">나의 배송지</router-link>
        <router-link :to="{name:'myorder'}" class="box title">내 정보 수정</router-link>
        <router-link :to="{name:'myreview'}" class="box title">내가 남긴 리뷰</router-link>
        <router-link :to="{name:'myquestion'}" class="box title">내가 남긴 문의사항</router-link>
    </div>
</template>

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