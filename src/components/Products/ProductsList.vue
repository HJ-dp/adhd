<template>
    <div class="List-container">
        <card v-for="i in dynamicProps" :dynamic-props="i" :key="i.productId"/>
    </div>
</template>

<script setup>
import card from './ProductsCard.vue';


defineProps({
    dynamicProps: Object
})


</script>

<style scoped>

.List-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:2em;
    /* justify-content: center; 마진이 오토라서 옆에 붙음 */
}

</style>