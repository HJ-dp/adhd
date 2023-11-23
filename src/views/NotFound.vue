<template>
    <div class="cont-404">
        <div class="grid-con">
            <div></div>
            <div class="four">404</div>
            <div></div>
            <h1>아니 <span style="text-decoration: line-through;">그딴</span> 그런 페이지는 없어요</h1>
            <div></div>
            <h2>하지만 괜찮아요 다시 돈을 쓰러 가볼까요?</h2>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.cont-404{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-image: url(banner/webanner.jpeg);
    background-position: 50% 0%;
}
.grid-con{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color:white;
    justify-items: end;
    gap:2em;
    background-color: rgb(0,0,0,0.5);
    padding: 3em 20em 3em 3em;
    white-space: nowrap;
}

.four{
    font-size:100px;
    color:crimson;
}

.grid-con h1, span{
    font-size:24px;
    font-weight: 600;
}

</style>