<template>
    <div class="product-container">
        <theBanner />
        <div style="height: 444px;"></div>
        <localnav/>
        <router-view></router-view>
    </div>
</template>

<script setup>
import localnav from '../../components/Products/ProductsNav.vue'
import theBanner from '../../components/banner/MoreBanner.vue'
</script>

<style scoped>
.product-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    /* justify-content: center; */
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
}

</style>