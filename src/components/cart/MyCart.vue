<template>
    <div class="cart-container">
        <div class="order-container">
            <div class="leftside">
                <div class="item-list card">
                    <div class="card-content">
                        <h1 class="title">장바구니</h1>
                        <itemm/>
                    </div>
                </div>
                <div class="total-price-box card">
                    <div class="card-contentrow row">
                        <h1 class="title">결제액</h1>
                        <div class="coll">
                            <h1 class="title">상품 금액</h1>
                            <h1>142{{ }}원</h1>
                        </div>
                        <h1> - </h1>
                        <div class="coll">
                            <h1 class="title">할인금액</h1>
                            <h1>12{{ }}원</h1>
                        </div>
                        <h1> = </h1>
                        <div class="coll">
                            <h1 class="title">결제할 금액</h1>
                            <h1>123{{ }}원</h1>
                        </div>
                    </div>
                </div>
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
import itemm from './Cartcol.vue'
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

.coll{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:1em;
}

.title {
    font-size:15px;
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

.row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.item-list {
    min-height: 300px;
    width: 100%;
    background-color: aqua;
}

.total-price-box {
    min-height: 100px;
    background-color: #eee;
    width: 100%;
}

.address {
    background-color: aquamarine;
    min-height: 300px;
    width: 100%;
}

.purchase {
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

.card-contentrow{
    margin:2em;
}


@media (max-width:768px) {
    .order-container {
        flex-direction: column;
        gap: 0;

    }
}
</style>