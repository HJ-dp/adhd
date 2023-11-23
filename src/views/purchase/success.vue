<template>
    <div class="success-container">
        <div class="success-content">
            <h1>주문 번호 : {{ $route.query.orderId }}</h1>
            <h1>{{ $route.query.amount }}원</h1>
            <h1>결제 성공</h1>
        </div>
    </div>
</template>

<script setup>

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

</style>