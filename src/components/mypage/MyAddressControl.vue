<template>
    <div class="cont-container">
        <list :dynamic-props="store.AddressList" />
        <add />
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAddressStore } from "@/stores/address";
import add from '../address/MyAddress.vue'
import list from '../address/AddressList.vue';

const store = useAddressStore();

onMounted(() => {
    store.getAddressList(localStorage.getItem('User'));
})

</script>

<style scoped>
.cont-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
</style>