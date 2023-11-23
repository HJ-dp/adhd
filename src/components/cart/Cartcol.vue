<template>
    <div class="cartitem-container">
        <div class="item-content">
            <div>사진이면</div>
            <div>1개</div>
            <div>100원</div>
            <div class="item-content">
                <div>나는버튼?</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.cartitem-container{
    width: 100%;
    background-color: wheat;
    padding:10px;
    border-radius: 5px;
}

.item-content{
    display: flex;
    justify-content: space-between;
    gap:1em;
}
</style>