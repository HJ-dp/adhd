<template>
    <div class="detail-container">
        {{ store.product }}
        <div class="card-img" :style="{ backgroundImage: `url(${store.product.productInfoImg})`}" alt="상품 사진"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import {useProductStore} from '@/stores/product';
import { useRoute } from 'vue-router';
const store = useProductStore();
const route = useRoute();
const pro = ref();
const props = defineProps({
    id : String,
});

onMounted( async ()=>{
    pro.value = await store.getProduct(route.params.productId);
})


</script>

<style scoped>
.card-img{
    width:100%;
    border-radius: 10px;
    height: 325px;
    background-color: #e7e7e7;
    /* background-image: url('https://d29trs2nbedcfj.cloudfront.net/erp/shop/b096259a-3ed4-43e3-9adf-e979f1abc19c20230905.jpg'); */
    background-size: cover;
    background-position: 50% 50%;
}
</style>