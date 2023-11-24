<template>
    <div class="col-container" :class="{act:toggle}" @click="toggle = !toggle">
        <div class="flexx">
            <h1>배송지명</h1>
            {{ dynamicProps.deliveryName }}
        </div>
        <div class="flexx">
            <h1>받는사람</h1>
            {{ dynamicProps.receiverName }}
        </div>
        <div class="flexx">
            <h1>연락처</h1>
            {{ dynamicProps.receiverPhone }}
        </div>
        <div class="flexx">
            <h1>추가연락처</h1>
            {{ dynamicProps.additionalPhone }}
        </div>
        <div class="flexx">
            <h1>주소</h1>
            {{ dynamicProps.deliveryAddress1 }}
        </div>
        <div class="flexx">
            <h1>상세주소</h1>
            {{ dynamicProps.deliveryAddress2 }}
        </div>
        <div class="flexx">
            <h1>전달사항</h1>
            {{ dynamicProps.deliveryMemo }}
        </div>
        <div class="flexx">
            <h1>기본배송지여부</h1>
            {{ dynamicProps.defaultAddress }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const toggle = ref(false);

defineProps({
    dynamicProps: Object,
})
</script>

<style scoped>
.col-container {
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    border: 1px solid black;
    padding: 1em;
    border-radius: 10px;
    justify-content: space-between;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.col-container:hover {
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .16);
    cursor: pointer;
}  

.act {
    background-color: gray;
}


.flexx {
    display: flex;
    gap: 5px;
}
</style>