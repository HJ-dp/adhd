<template>
    <div class="detail-container">
        <content :dynamic-props="store.product"/>
        <info :dynamic-props="store.product?.productInfoImg"/>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useProductStore } from '@/stores/product';
import { useRoute } from 'vue-router';
import content from './ProductsContent.vue';
import info from './ProductsInfo.vue';

const store = useProductStore();
const route = useRoute();
const props = defineProps({
    id : String,
});

onMounted( async ()=>{
    await store.getProduct(route.params.productId);
})
onUnmounted(()=>{
    store.removeProduct();
})

</script>

<style scoped>
.detail-container{
    width: 100%;
}
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