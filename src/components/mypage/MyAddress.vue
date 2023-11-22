<template>
    <div class="address-container">
        <div>
        <input type="text" v-model="receiverName" readonly>
        <input type="text" v-model="receiverPhone" readonly>
        <input type="text" v-model="additionalPhone" readonly>
        <input type="text" v-model="deliveryMemo" readonly>
        <input type="text" v-model="deliveryName" readonly>
        <input type="text" v-model="deliveryAddress1" readonly>
        <input type="text" v-model="deliveryAddress2" readonly>
        <input type="text" v-model="defaultAddress" readonly>
    </div>
        <button @click="updated">dfsa</button>
        <button @click="clic()">눌러</button>
        <button @click="send()">보내기</button>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2/src/sweetalert2.js'
import { useAddressStore } from '@/stores/address';
import { ref } from 'vue';

const store = useAddressStore();

const receiverName = ref();
const receiverPhone = ref();
const additionalPhone = ref();
const deliveryMemo = ref();
const deliveryName = ref();
const deliveryAddress1 = ref();
const deliveryAddress2 = ref();
const defaultAddress = ref();

 //////////////////////////////////

const updated = (async () => {
    const { value: formValues } = await Swal.fire({
        title: "배송지 등록하기",
        html: `
    <div class="c">
      <label for="title">배송지명</label>
      <input id="title" placeholder="배송지명을 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="receiver">수신자명</label>
      <input id="receiver"  placeholder="수신자명을 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="phone">수신자연락처</label>
      <input id="phone"  placeholder="수신자연락처를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="addphone">추가연락처 (선택)</label>
      <input id="addphone"  placeholder="추가연락처를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="address">주소</label>
      <input id="address" value="${deliveryAddress1.value}" placeholder="버튼을 눌러 주소를 입력해주세요" class="swal2-input" readonly>
    </div>
    <div class="c">
        <button id="customButton">눌러</button>
    </div>
    <div class="c">
      <label for="detail">상세주소</label>
      <input id="detail"  placeholder="상세주소를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="memo">배송메모 (선택)</label>
      <input id="memo"  placeholder="배송메모를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="default">기본배송지여부(선택)</label>
      <input id="default"  placeholder="기본 배송지는 Y 아니라면 N 입력하셈" class="swal2-input">
    </div>
    `,
        width: '800px',
        grow: 'row',
        focusConfirm: false,
        confirmButtonColor: 'rgb(74,199,213)',
        didOpen: () => {
            const button = document.getElementById('customButton');
            button.addEventListener('click', () => {
                clic();
            });
        },
        preConfirm: () => {
            if (!document.getElementById("title").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 문의 제목을 작성해주세요')
            } else if (!document.getElementById("receiver").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 내용이 있어야져;')
            } else if (!document.getElementById("phone").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 내용이 있어야져;')
            } else if (!document.getElementById("detail").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 내용이 있어야져;')
            } 
            return {
                a : document.getElementById("title").value,
                b : document.getElementById("receiver").value,
                c : document.getElementById("phone").value,
                d : document.getElementById("detail").value,
                e : document.getElementById("addphone").value,
                f : document.getElementById("memo").value,
                g : document.getElementById("default").value,
            };
        }
    });
    if (formValues) {
        deliveryName.value = formValues.a;
        receiverName.value = formValues.b;
        receiverPhone.value =formValues.c;
        deliveryAddress2.value =formValues.d;
        additionalPhone.value =formValues.e;
        deliveryMemo.value =formValues.f;
        defaultAddress.value =formValues.g;
    }

})


///////////////////////////
// const t = document.getElementById("btn");
// t.addEventListener('click', ()=>{
//     new daum.Postcode({
//         oncomplete: function(data) {
//             deliveryAddress1.value = data.address;
//         }
//     }).open();
// })

////////////////////////////
function clic() {
    new daum.Postcode({
        oncomplete: function(data) {
            deliveryAddress1.value = data.address;
        }
    }).open();
}

function send(){
    let add = {
        receiverName : receiverName.value,
        receiverPhone : receiverPhone.value,
        additionalPhone : additionalPhone.value,
        deliveryMemo : deliveryMemo.value,
        deliveryName : deliveryName.value,
        deliveryAddress1 : deliveryAddress1.value,
        deliveryAddress2 : deliveryAddress2.value,
        defaultAddress : defaultAddress.value,
        userId : localStorage.getItem('User'),
    }
    store.addAddress(add);
}
    
</script>

<style scoped>
.address-container{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>