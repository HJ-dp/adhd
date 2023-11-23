<template>
    <div class="cart-container">
        <div class="order-container">
            <div class="leftside">
                <cart/>
            </div>
            <div class="rightside">
                <div class="address card">
                    <div class="card-content">
                        배송지 설정
                    </div>
                </div>
                <button class="purchaseBtn card">구매</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import cart from './cartcart.vue'

const ok = ref();
ok.value = JSON.parse(localStorage.getItem('cart'));

</script>

<style scoped>
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
    margin: 2em;
    display: flex;
    flex-direction: column;
    gap:1em;
    align-items: center;
}


@media (max-width:768px) {
    .order-container {
        flex-direction: column;
        gap: 0;

    }
}
</style>