<template>
    <div class="cartitem-container">
        <div class="item-content">
            <div class="card-img" :style="{ backgroundImage: `url(${dynamicProps.productImg})` }" alt="상품 사진"></div>
            <div>{{ dynamicProps.productName }}</div>
            <div>{{ dynamicProps.quentity }}개</div>
            <div class="nowrap">{{ joinprice(dynamicProps.price * dynamicProps.quentity) }}원</div>
            <button>삭제</button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

defineProps({
    dynamicProps: Object,
})
const emit = defineEmits(["dynamic-value"]);

const pp = ref();

function joinprice(p) {
    pp.value = p;
    return p.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

watch(
    () => pp.value, (n) => {
        emit('dynamic-value', n);
    });

</script>

<style scoped>
.nowrap {
    white-space: nowrap;
}

.card-img {
    width: 50px;
    border-radius: 10px;
    height: 50px;
    background-color: #e7e7e7;
    /* background-image: url('https://d29trs2nbedcfj.cloudfront.net/erp/shop/b096259a-3ed4-43e3-9adf-e979f1abc19c20230905.jpg'); */
    background-size: cover;
    background-position: 50% 50%;
}

.cartitem-container {
    width: 100%;
    background-color: transparent;
    padding: 10px;
    border-radius: 5px;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.item-content {
    display: grid;
    grid-template-columns: 1fr 2.5fr 1fr 1fr 1fr;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
}

button {
    border: none;
    background-color: rgba(206, 51, 51, 0.2);
    border-radius: 10px;
    padding: 0.5em;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
    cursor: pointer;
}
</style>