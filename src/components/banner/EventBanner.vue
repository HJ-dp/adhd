<template>
    <div class="banner-container">
        <h1>오픈 기념 이벤트!</h1>
        <br>
        <p>11 / 24 금요일 단 하루!</p>
        <br>
        <p>주문 금액 상관없이 무조건 배송비 무료!</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
.banner-container {
    width: 2000px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    background: linear-gradient(to right, crimson, gold);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.banner-container h1 {
    font-size: 24px;
}
</style>