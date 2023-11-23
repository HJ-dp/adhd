<template>
  <div class="hello">
    <h1>주문서</h1>
    <div id="payment-method"></div>
    <button @click="clickPaymentButton">결제하기</button>
  </div>
</template>

<style>
  button{
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    background-color: rgb(74, 199, 213);
  }
  button:hover{
    border:2px solid black;
  }
</style>
  
<script>
import { generateRandomString } from "../utils/util";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const paymentWidget = PaymentWidget(clientKey, PaymentWidget.ANONYMOUS);

export default {
  mounted() {
    paymentWidget.renderPaymentMethods(
      "#payment-method",
      { value: 50000 },
      { variantKey: "DEFAULT" }
    );
  },
  methods: {
    clickPaymentButton() {
      paymentWidget
        .requestPayment({
          orderId: generateRandomString(),
          orderName: `${JSON.parse(localStorage.getItem('cart'))[0].productName} 등 ${JSON.parse(localStorage.getItem('cart')).length}건`,
          successUrl: window.location.origin + "/success",
          failUrl: window.location.origin + "/fail",
          // customerEmail: "customer123@gmail.com", // 고객 이메일 (선택)
          customerName: `${localStorage.getItem('User')}`, // 고객 이름 (선택)
        })
        .then((v) => console.log(v));
    },
  },
};
</script>