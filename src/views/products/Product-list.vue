<template>
    <div class="product-list">
        <List :dynamic-props="store.ProductList"/>
    </div>
</template>

<script setup>
import { useHeartStore } from '../../stores/mylist';
import { useProductStore } from '@/stores/product';
import { ref,onMounted,watch } from 'vue';
import { useRoute } from 'vue-router';
import List from '../../components/Products/ProductsList.vue'

const hstore = useHeartStore();
const route = useRoute();
const itemcode = route.params.itemcode ?? 1 ;
const store = useProductStore();

watch(() => route.params.itemcode, async (newItemcode) => {
    newItemcode = newItemcode ?? 1;
    await store.getProductList(newItemcode);
});

watch(()=>localStorage.getItem('User'), async(n)=>{
    await hstore.getFavList(n);
})

onMounted(async ()=>{
    await store.getProductList(itemcode);
    await hstore.getFavList(localStorage.getItem('User'));
})

</script>

<style scoped>
.product-list{
    margin-top: 2em;
}
</style>