<template>
    <div class="success-container">
        <div class="success-content">
            <h1>주문 번호 : {{ $route.query.orderId }}</h1>
            <h1>{{ $route.query.amount }}원</h1>
            <h1>결제 성공</h1>
            <router-link :to="{ name: 'mypage' }" class="bt" title="클릭하면 재시도 가넝 ㅎ"> 주문 내역 확인</router-link>
        </div>
    </div>
</template>

<script setup>
localStorage.removeItem('cart')
tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 300,
        }
    },
    preset: "confetti",
});


</script>

<style scoped>
.success-container {
    padding-top: 400px;
    width: 100%;
}

.success-content {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:1em;
}

.success-content h1{
    font-size:24px;
}

.bt {
    margin: 1em;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    height: 30px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(74, 199, 213);
}

</style>