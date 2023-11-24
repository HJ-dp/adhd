<template>
    <div class="cont">
        <!-- <div style="margin-top:400px; padding-top:700px;"></div> -->
        <div>
            <h1>결제실패하긴 했는데 돈은 빼가겠습니다</h1>
        </div>
        <br>
        <div>{{ $route.query.message }}</div>
        <router-link :to="{ name: 'mycart' }" class="bt" title="클릭하면 재시도 가넝 ㅎ">다시 시도</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
.cont {
    margin-top: 600px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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