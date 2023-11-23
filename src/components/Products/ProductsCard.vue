<template>
    <router-link class="card-container" :to="{name:'goods_Detail',params:{productId: dynamicProps.productId}}" title="클릭하면 상품을 자세히 볼 수 있어요.">
        <div class="card-img" :style="{ backgroundImage: `url(${dynamicProps.productImg})`}" alt="상품 사진"></div>
        <div class="card-info">
            <div class="card-info-badge" :class="{'hot':hot, 'new':isNew}"> NEW</div>
            <div class="card-info-title">{{ dynamicProps.productName }}</div>
            <div class="card-info-price">₩ {{ joinprice(dynamicProps.price) }}</div>
        </div>
    </router-link> 
</template>

<script setup>
import { ref, computed } from 'vue';
const hot = ref(false);
const isNew = ref(true);

defineProps({
    dynamicProps: Object
})

function joinprice(p){
    return p.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

// function goingto(Id){
    
// }

</script>

<style scoped>
.card-container{
    width: 250px; 
    height: 400px;
    border-radius: 10px;
    padding: 1em;
    justify-content: space-between;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}
.card-container:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
}

/* 뱃지 */

.card-info-badge{
    margin: auto 0 0 0;
    font-size: 12px;
}
.hot {
    color:crimson;
}

.new {
    color:gold;
    text-shadow: -1px -1px 0 rgb(29, 29, 31), 1px -1px 0 rgb(29, 29, 31), -1px 1px 0 rgb(29, 29, 31), 1px 1px 0 rgb(29, 29, 31);
}

/* 카드 */
.card-img{
    width:100%;
    border-radius: 10px;
    height: 325px;
    background-color: #e7e7e7;
    /* background-image: url('https://d29trs2nbedcfj.cloudfront.net/erp/shop/b096259a-3ed4-43e3-9adf-e979f1abc19c20230905.jpg'); */
    background-size: cover;
    background-position: 50% 50%;
}
/* 정보 */

.card-info{
    height: 75px;
    display: flex;
    flex-direction: column;
}

.card-info-title{
    /* height: 100%; */
    font-weight:600;
    font-size:17px;
    margin: auto 0 0 0;
}


.card-info-price{
    /* height: 100%; */
    font-size:17px;
    margin: auto 0 0 0;
}

</style>