<template>
    <div class="regist-box">
        <h1>회원 정보 수정</h1>
        <div class="input-box">
            <input type="text" v-model="inputId" name="inputId" id="inputId" autocomplete="off" readonly>
            <p>{{ idcheck }}</p>
        </div>
        <div class="input-box">
            <input type="password" v-model="inputPw" name="inputPw" id="inputPw" autocomplete="off" required>
            <label for="inputPw" :class="{ 'warning': pwwar }">비밀번호</label>
            <p>{{ pwcheck }}</p>
        </div>
        <div class="input-box">
            <input type="password" v-model="inputcheckPw" name="inputcheckPw" id="inputcheckPw" autocomplete="off" required>
            <label for="inputcheckPw" :class="{ 'warning': pwchwar }">비밀번호 확인</label>
            <p>{{ pwcheckcheck }}</p>
        </div>
        <div class="input-box">
            <input type="text" v-model="inputName" name="inputName" id="inputName" autocomplete="off" readonly>
            <p>{{ namecheck }}</p>
        </div>
        <div class="input-box">
            <input type="text" v-model="inputPhone" name="inputPhone" id="inputPhone" autocomplete="off" required>
            <label for="inputPhone" :class="{ 'warning': phonewar }">전화번호</label>
            <p>{{ phonecheck }}</p>
        </div>
        <div class="input-box">
            <input type="text" v-model="inputEmail" name="inputEmail" id="inputEmail" autocomplete="off" required>
            <label for="inputEmail" :class="{ 'warning': emailwar }">이메일</label>
            <p>{{ emailcheck }}</p>
        </div>
        <div class="input-box">
            <input type="text" v-model="inputNick" name="inputNick" id="inputNick" autocomplete="off" required>
            <label for="inputNick" :class="{ 'warning': nickwar }">닉네임</label>
            <p>{{ nickcheck }}</p>
        </div>
        <div class="btn-box">
            <button @click="vaildationCheck()" title="클릭하면 입력하신 정보대로 수정할 수 있어요">정보수정</button>
            <button @click="signout()" title="클릭하면 NC다이노스의 회원에서 탈퇴되긴하는데 무슨무슨 법으로 잡혀가요">회원탈퇴</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { useUserStore } from '@/stores/user';

const store = useUserStore();

const inputId = ref(store.userInfo.userId ?? '');
const inputPw = ref();
const inputcheckPw = ref();
const inputPhone = ref(store.userInfo.userPhone ?? '');
const inputName = ref(store.userInfo.userName ?? '');
const inputEmail = ref(store.userInfo.userEmail ?? '');
const inputNick = ref(store.userInfo.userNickname ?? '');

const idcheck = ref();
const pwcheck = ref();
const pwcheckcheck = ref();
const phonecheck = ref();
const namecheck = ref();
const emailcheck = ref();
const nickcheck = ref();

const idwar = ref(false);
const pwwar = ref(false);
const pwchwar = ref(false);
const phonewar = ref(false);
const namewar = ref(false);
const emailwar = ref(false);
const nickwar = ref(false);

function signout() {
    Swal.fire({
        title: "탈퇴를 진행할까요?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "탈퇴",
        cancelButtonText: "취소",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "진짜 진심 탈퇴하시려고요?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "탈퇴",
                cancelButtonText: "취소",
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "왜요?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "탈퇴",
                        cancelButtonText: "취소",
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "가지마세요ㅜㅜ",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonText: "탈퇴",
                                cancelButtonText: "취소",
                                reverseButtons: true
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire({
                                        title: "카악 퉷",
                                        icon: "warning",
                                        showCancelButton: true,
                                        confirmButtonText: "탈퇴",
                                        cancelButtonText: "취소",
                                        reverseButtons: true
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            store.signout(store.userInfo.userId);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });

}

function vaildationCheck() {
    idcheck.value = "";
    pwcheck.value = "";
    pwcheckcheck.value = "";
    phonecheck.value = "";
    namecheck.value = "";
    emailcheck.value = "";
    nickcheck.value = "";
    let ok = true;

    if (!inputId.value) {
        idwar.value = true;
        idcheck.value = '아이디를 입력해주세요'
        ok = false;
    }
    if (!inputPw.value) {
        pwwar.value = true;
        pwcheck.value = '비밀번호를 입력해주세요'
        ok = false;
    }
    if (inputPw.value != inputcheckPw.value) {
        pwchwar.value = true;
        pwcheckcheck.value = '입력한 비밀번호가 일치하지 않습니다.'
        ok = false;
    }
    if (!inputName.value) {
        namewar.value = true;
        namecheck.value = '이름을 입력해주세요'
        ok = false;
    }
    if (!inputPhone.value) {
        phonewar.value = true;
        phonecheck.value = '전화번호를 입력해주세요'
        ok = false;
    } else if (!checkPhone(inputPhone.value)) {
        phonewar.value = true;
        phonecheck.value = '올바른 전화번호 형식으로 입력해주세요'
        ok = false;
    }
    if (!inputEmail.value) {
        emailwar.value = true;
        emailcheck.value = '이메일을 입력해주세요'
        ok = false;
    }
    else if (!checkEmail(inputEmail.value)) {
        emailwar.value = true;
        emailcheck.value = '올바른 이메일 형식으로 입력해주세요'
        ok = false;
    }
    if (!inputNick.value) {
        nickwar.value = true;
        nickcheck.value = '닉네임을 입력해주세요'
        ok = false;
    }

    setTimeout(() => {
        idwar.value = false;
        pwwar.value = false;
        pwchwar.value = false;
        phonewar.value = false;
        namewar.value = false;
        emailwar.value = false;
        nickwar.value = false;
    }, 1000)
    if (ok) {
        update();
    }
}

async function update() {
    let user = {
        userId: inputId.value,
        userPw: inputPw.value,
        userName: inputName.value,
        userPhone: inputPhone.value,
        userEmail: inputEmail.value,
        userNickname: inputNick.value,
        userStatus: "",
        manager: "",
    };
    await store.updatee(user);
}

function checkEmail(email) {
    let regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regExp.test(email)) {
        return true;
    } else {
        return false;
    }
}

function checkPhone(phone) {
    let regExp = /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/g;
    if (regExp.test(phone)) {
        return true;
    } else {
        return false;
    }
}


</script>

<style scoped>
#inputId,
#inputName {
    color: gray
}

.regist-box {
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: rgb(0, 0, 0, 0.3);
    padding: 3em;
    border-radius: 25px;
    text-align: center;
    z-index: 3;
    /* margin-top: 12rem; */
}

.regist-box h1 {
    font-size: 24px;
    color: white;
}

.regist-box input {
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    padding: 0.5em 1em;
    width: 50vw;
    max-width: 350px;
    height: 18px;
    background-color: transparent;
    color: white;
}

.input-box {
    position: relative;
    margin-top: 1em;
}

.input-box p {
    color: crimson;
    font-weight: 600;
    /* text-shadow: 1px 1px white; */
    text-align: end;
    position: absolute;
    top: 5px;
    right: 0px;
    z-index: -1;
}

.input-box:first-child {
    margin-top: 0;
}

.input-box label {
    position: absolute;
    top: 5px;
    left: 13px;
    transition: all 0.3s ease;
    font-size: 17px;
    color: white;
    font-weight: 600;
}

.input-box label.warning {
    color: red !important;
    animation: warning .3s ease;
    animation-iteration-count: 3;
}

@keyframes warning {
    0% {
        transform: translateX(-5px);
    }

    25% {
        transform: translateX(5px);
    }

    50% {
        transform: translateX(-5px);
    }

    75% {
        transform: translateX(5px);
    }
}

.input-box input:focus+label,
.input-box input:valid+label {
    top: -10px;
    font-size: 12px;
    color: rgb(74, 199, 213);
}


.btn-box {
    margin-top: 1em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    justify-content: space-between;
}

.btn-box button {
    height: 40px;
    color: white;
    border-radius: 25px;
    border: 1px solid gray;
    cursor: pointer;
}

.btn-box button:hover {
    border: 1px solid white;
}

.btn-box button:active {
    border: 3px solid white;
}


.btn-box button:first-child {
    background-color: rgb(29, 70, 125);
}

.btn-box button:last-child {
    background-color: crimson;
    /* background-color: rgb(7, 29, 61); */
}
</style>