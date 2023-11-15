<template>
    <div class="List-container">
        <card/>
        <card/>
        <card/>
        <card/>
    </div>
</template>

<script setup>
import { useProductStore }from '@/stores/product';
import card from './ProductsCard.vue';
</script>

<style scoped>

.List-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap:2em;
}

</style>