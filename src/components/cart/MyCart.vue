<template>
    <div class="cart-container">
        <div class="order-container">
            <div class="leftside">
                <cart />
            </div>
            <div class="rightside">
                <div class="address card">
                    <div class="card-content">
                        배송지 설정
                        <where :dynamic-props="store.AddressList" />
                    </div>
                </div>
                <router-link v-if="ok" :to="{ name: 'order' }" class="purchaseBtn card" title="클릭하면 주문페이지로 이동해요">구매</router-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import cart from './cartcart.vue'
import where from '../address/AddressList.vue'
import { useAddressStore } from '@/stores/address'

const ok = ref();
ok.value = JSON.parse(localStorage.getItem('cart'));

const store = useAddressStore();

onMounted(async ()=>{
    await store.getAddressList(localStorage.getItem('User'));
})

</script>

<style scoped>
a {
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(74, 199, 213);
}

a:hover {
    border: 2px solid black;
}

.cart-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
}

.order-container {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    gap: 1em;
}

.card {
    border-radius: 10px;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.leftside,
.rightside {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    margin: 1em;
    gap: 1em;
}


.address {
    /* background-color: aquamarine; */
    min-height: 300px;
    width: 100%;
}

.purchaseBtn {
    width: 90%;
    height: 50px;
    border: none;
    cursor: pointer;
}

.card-content {
    margin: 1em;
    display: flex;
    max-width: 500px;
    flex-direction: column;
    gap: 1em;
    align-items: center;
}


@media (max-width:768px) {
    .order-container {
        flex-direction: column;
        gap: 0;

    }
}
</style>