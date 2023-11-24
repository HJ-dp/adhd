<template>
    <div class="mypage-nav-container">
        <nav class="mypage-nav">
            <router-link :to="{ name: 'myinfo' }" class="mypage-nav-item" title="클릭하면 나의 정보를 수정할 수 있어요">회원 정보</router-link>
            <router-link :to="{ name: 'myorder' }" class="mypage-nav-item" title="클릭하면 내 주문을 모아볼 수 있어요">주문 정보</router-link>
            <router-link :to="{ name: 'mycart' }" class="mypage-nav-item" title="클릭하면 내 장바구니를 볼 수 있어요">장바구니</router-link>
            <router-link :to="{ name: 'myaddress' }" class="mypage-nav-item" title="클릭하면 내 배송지를 관리할 수 있어요">배송지 관리</router-link>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.mypage-nav-container {
    width: 100%;
    color: white;
}

.mypage-nav {
    background-color: rgb(29, 29, 31);
    display: flex;
    width: 100%;
    border-radius: 5px;
}

.mypage-nav-item {
    width: 100%;
    text-align: center;
    padding: 1em;
    border-radius: 5px;
    transition: 0.2s;
}

.mypage-nav-item:hover {
    transform: scale(1.05);
    cursor: pointer;
    color: black;
    /* font-size: 17px; */
    background-color: rgb(74, 199, 213);
}
</style>