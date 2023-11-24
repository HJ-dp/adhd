<template>
    <div class="list-container">
        <h1>내 배송지</h1>
        <div class="nothing" v-if="dynamicProps?.length == 0">등록한 배송지가 없어요</div>
        <column v-else v-for="i in dynamicProps" :dynamic-props="i" :key="dynamicProps.deliveryAddressId" />
    </div>
</template>

<script setup>
import column from './Addresscol.vue'

defineProps({
    dynamicProps: Object
})

</script>

<style scoped>
.nothing {
    border-radius: 10px;
    padding: 1em;
    text-align: center;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.list-container {
    margin: 2em 0 0 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 2em;
    width: 90%;
    max-width: 1024px;
    min-height: 100px;
    border-radius: 10px;
    padding: 1em;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

h1 {
    font-size: 17px;

}
</style>