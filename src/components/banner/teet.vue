<template>
    <div class="sub-banner-container">
        <h1>NC다이노스의 큰 꿈,</h1>
        <h1>당신과 함께</h1>
    </div>
</template>

<script setup>

</script>

<style scoped>
.sub-banner-container {
    background-image: url(/banner/webanner.jpeg);
    /* background-size:contain; */
    background-repeat: no-repeat;
    background-position: 50% 32%;
    background-color: gray;
    width: 2000px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.sub-banner-container h1{
    font-size: 48px;
    /* text-shadow: 1px 1px; */
    transition: 0.2s;
}

.sub-banner-container h1:hover{
    font-size: 48px;
    text-shadow: 10px 10px 3px black;
}
</style>