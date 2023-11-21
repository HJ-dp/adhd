<template>
    <div class="products-nav-container">
        <nav class="product-nav">
            <router-link :to="{name:'goods_List',params:{itemcode:'1'}}" class="product-nav-item" title="클릭하면 유니폼들을 모아볼 수 있어요">회원 유니폼</router-link>
            <router-link :to="{name:'goods_List',params:{itemcode:'2'}}" class="product-nav-item" title="클릭하면 모자들을 모아볼 수 있어요">모자</router-link>
            <router-link :to="{name:'goods_List',params:{itemcode:'3'}}" class="product-nav-item" title="클릭하면 의류들을 모아볼 수 있어요">의류</router-link>
            <router-link :to="{name:'goods_List',params:{itemcode:'4'}}" class="product-nav-item" title="클릭하면 팬상품들을 모아볼 수 있어요">팬상품</router-link>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.products-nav-container{
    width: 100%;
    color:white;
}

.product-nav{
    background-color:rgb(29, 29, 31);
    display: flex;
    width: 100%;
    border-radius: 5px;
}

.product-nav-item {
    width: 100%;
    text-align: center;
    padding: 1em;
    border-radius: 5px;
    transition:0.2s;
}

.product-nav-item:hover{
    transform: scale(1.05);
    cursor: pointer;
    color: black;
    /* font-size: 17px; */
    background-color: rgb(74,199,213);
}



</style>