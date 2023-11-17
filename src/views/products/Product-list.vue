<template>
    <div class="product-list">
        <List :dynamic-props="store.ProductList"/>
    </div>
</template>

<script setup>
import {useProductStore} from '@/stores/product';
import { ref,onMounted,watch } from 'vue';
import { useRoute } from 'vue-router';
import List from '../../components/Products/ProductsList.vue'

const route = useRoute();
const itemcode = route.params.itemcode ?? 1 ;
const store = useProductStore();

watch(() => route.params.itemcode, async (newItemcode) => {
  await store.getProductList(newItemcode);
});

onMounted(async ()=>{
    await store.getProductList(itemcode);
})

</script>

<style scoped>
.product-list{
    margin-top: 2em;
}
</style>