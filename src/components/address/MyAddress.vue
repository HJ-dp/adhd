<template>
    <div class="row-wrapper">
        <kakaomap />
        <div class="address-container">
            <h1>배송지 등록하기</h1>
            <div class="input-box" @click="updated()" title="클릭하면 배송지 정보를 작성하거나 수정할 수 있어요">
                <div class="input-box">
                    <label for="deliveryName">배송지명</label>
                    <input type="text" id="deliveryName" v-model="deliveryName" readonly>
                </div>
                <div class="input-box">
                    <label for="receiverName">수신자명</label>
                    <input type="text" id="receiverName" v-model="receiverName" readonly>
                </div>
                <div class="input-box">
                    <label for="receiverPhone">수신자연락처</label>
                    <input type="text" id="receiverPhone" v-model="receiverPhone" readonly>
                </div>
                <div class="input-box">
                    <label for="additionalPhone">추가연락처(선택)</label>
                    <input type="text" id="additionalPhone" v-model="additionalPhone" readonly>
                </div>
                <div class="input-box">
                    <label for="deliveryAddress1">주소</label>
                    <input type="text" id="deliveryAddress1" v-model="deliveryAddress1" readonly>
                    <button class="updatebtn" @click.stop="clic()">주소찾기</button>
                </div>
                <div class="input-box">
                    <label for="deliveryAddress2">상세주소</label>
                    <input type="text" id="deliveryAddress2" v-model="deliveryAddress2" readonly>
                </div>
                <div class="input-box">
                    <label for="deliveryMemo">배송메모(선택)</label>
                    <input type="text" id="deliveryMemo" v-model="deliveryMemo" readonly>
                </div>
                <div class="input-box">
                    <label for="defaultAddress">기본배송지여부(선택)</label>
                    <input type="text" id="defaultAddress" v-model="defaultAddress" readonly>
                </div>
            </div>
            <div class="btn-box">
                <button @click.stop="updated" title="클릭하면 배송지 정보를 작성하거나 수정할 수 있어요">작성/수정</button>
                <button @click.stop="send()" title="클릭하면 작성한 정보를 토대로 등록해요">등록</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Swal from 'sweetalert2/src/sweetalert2.js'
import kakaomap from './map.vue'
import { useAddressStore } from '@/stores/address';
import { ref } from 'vue';
const r = ref();
const store = useAddressStore();

const deliveryName = ref();
const receiverName = ref();
const receiverPhone = ref();
const additionalPhone = ref();
const deliveryAddress1 = ref();
const deliveryAddress2 = ref();
const deliveryMemo = ref();
const defaultAddress = ref();

//////////////////////////////////

const updated = (async () => {
    const { value: formValues } = await Swal.fire({
        title: "배송지 등록하기",
        html: `
        <div class="twrapper">
        <div class="flex">
    <div class="c">
      <label for="title">배송지명</label>
      <input id="title" value="${deliveryName.value ?? ''}" placeholder="배송지명을 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="receiver">수신자명</label>
      <input id="receiver" value="${receiverName.value ?? ''}" placeholder="수신자명을 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="phone">수신자연락처</label>
      <input id="phone" value="${receiverPhone.value ?? ''}" placeholder="수신자연락처를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="addphone">추가연락처 (선택)</label>
      <input id="addphone" value="${additionalPhone.value ?? ''}" placeholder="추가연락처를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="address">주소</label>
      <input id="address" value="${deliveryAddress1.value ?? ''}" placeholder="버튼을 눌러 주소를 입력해주세요" class="swal2-input" readonly>
      <button id="customButton">주소찾기</button>
      </div>
      <div class="c">
      <label for="detail">상세주소</label>
      <input id="detail" value="${deliveryAddress2.value ?? ''}" placeholder="상세주소를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="memo">배송메모 (선택)</label>
      <input id="memo" value="${deliveryMemo.value ?? ''}" placeholder="배송메모를 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="default">기본배송지여부(선택)</label>
      <input id="default" value="${defaultAddress.value ?? ''}" placeholder="기본 배송지는 Y 아니라면 N 입력하셈" class="swal2-input">
    </div>
</div>
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
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 배송지명을 작성해주세요')
            } else if (!document.getElementById("receiver").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 받는사람이 있어야져;')
            } else if (!document.getElementById("phone").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 받을 사람 연락처는 있어야져;')
            } else if (!document.getElementById("detail").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 상세주소는 있어야져;')
            }
            return {
                a: document.getElementById("title").value,
                b: document.getElementById("receiver").value,
                c: document.getElementById("phone").value,
                d: document.getElementById("detail").value,
                e: document.getElementById("addphone").value,
                f: document.getElementById("memo").value,
                g: document.getElementById("default").value,
            };
        }
    });
    if (formValues) {
        deliveryName.value = formValues.a;
        receiverName.value = formValues.b;
        receiverPhone.value = formValues.c;
        deliveryAddress2.value = formValues.d;
        additionalPhone.value = formValues.e;
        deliveryMemo.value = formValues.f;
        defaultAddress.value = formValues.g;
    }

})


////////////////////////////
function clic() {
    new daum.Postcode({
        oncomplete: function (data) {
            deliveryAddress1.value = data.address;
        }
    }).open();
}

function send() {
    let add = {
        receiverName: receiverName.value,
        receiverPhone: receiverPhone.value,
        additionalPhone: additionalPhone.value,
        deliveryMemo: deliveryMemo.value,
        deliveryName: deliveryName.value,
        deliveryAddress1: deliveryAddress1.value,
        deliveryAddress2: deliveryAddress2.value,
        defaultAddress: defaultAddress.value,
        userId: localStorage.getItem('User'),
    }
    store.addAddress(add);
}

</script>
<style>
.row-wrapper {
    display: flex;
    gap: 3em;
    justify-content: center;
    align-items: center;
}

label {
    white-space: nowrap;
}

.flex {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.twrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}


#customButton {
    position: absolute;
    right: -50px;
    top: 22px;
    border: none;
    background-color: rgb(74, 199, 213);
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}

.c {
    display: flex;
    justify-content: center;
    position: relative;
    align-items: center;
}

#swal2-container {
    display: flex;
    flex-direction: column;
}

.swal2-input,
.swal2-textarea {
    width: 60vw;
    max-width: 600px;
    position: relative;
}
</style>
<style scoped>
input {
    border: none;
    border-bottom: 1px solid black;
    outline: none;
    padding: 0.5em 1em;
    width: 50vw;
    max-width: 350px;
    height: 18px;
    background-color: transparent;
    color: black;
}


.btn-box {
    width: 100%;
    display: flex;
    gap: 1em;
    margin: 2em;
    ;
    justify-content: center;
}

.btn-box button {
    width: 100px;
}

.updatebtn {
    position: absolute;
    top: 10px;
    right: -120px;
    width: 100px;
    flex-shrink: 0;
}

.input-box {
    display: flex;
    flex-direction: column;
    position: relative;
    margin-top: 1em;
}



.address-container {
    display: flex;
    width: 100%;
    height: 80vh;
    gap: 1em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

button {
    width: 10%;
    height: 30px;
    border: none;
    background-color: rgb(74, 199, 213);
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
</style>