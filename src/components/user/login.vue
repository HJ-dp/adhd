<template>
  <div class="login-box">
    <h1>로그인</h1>
    <div class="input-box">
      <input type="text" v-model="inputId" name="inputId" id="inputId" autocomplete="off" required>
      <label for="inputId" :class="{ 'warning': idwar }">아이디</label>
      <p>{{ idcheck }}</p>
    </div>
    <div class="input-box">
      <input type="password" v-model="inputPw" name="inputId" id="inputPw" autocomplete="off" required>
      <label for="inputPw" :class="{ 'warning': pwwar }">비밀번호</label>
      <p>{{ pwcheck }}</p>
    </div>
    <div class="btn-box">
      <button @click="vaildationCheck()">로그인</button>
      <button @click="$router.push({ name: 'regist' })">회원가입</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/user';
import router from '../../router';
import Swal from 'sweetalert2/src/sweetalert2.js'

const store = useUserStore();

const inputId = ref();
const inputPw = ref();

const idcheck = ref();
const pwcheck = ref();

const idwar = ref(false);
const pwwar = ref(false);

    window.onload = function(){
      var cd = document.getElementById("inputId")
cd.addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
          vaildationCheck()
        }
    })
    document.getElementById("inputPw").addEventListener("keyup", function(e) {
        if (e.code === 'Enter') {
          vaildationCheck()
        }
    });
}



function vaildationCheck() {
  idcheck.value = "";
  pwcheck.value = "";
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

  setTimeout(() => {
    idwar.value = false;
    pwwar.value = false;
  }, 1000)

  if (ok) {
    login();
  }
}

async function login() {
  let user = {
    id: inputId.value,
    pw: inputPw.value
  }
  tsParticles.load("tsparticles", {
    emitters: [
      {
        life: {
          duration: 5,
          count: 1,
        },
        position: {
          x: 0,
          y: 30,
        },
        particles: {
          move: {
            direction: "top-right",
          },
        },
      },
      {
        life: {
          duration: 5,
          count: 1,
        },
        position: {
          x: 100,
          y: 30,
        },
        particles: {
          move: {
            direction: "top-left",
          },
        },
      },
    ],
    preset: "confetti",
  });
  await store.login(user);
  
  // router.push({ name: 'main' });
  // router.go(-1);
}
</script>

<style scoped>
.login-container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  z-index: 1;
  background: linear-gradient(to right, rgb(92, 142, 187), rgb(29, 70, 125));
}

.login-container h1 {
  font-size: 24px;
  color: white;
}

.login-box {
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: rgb(0, 0, 0, 0.3);
  padding: 3em;
  border-radius: 25px;
  text-align: center;
  z-index: 3;
}

.login-box input {
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
  color: red;
  font-weight: 600;
  text-shadow: 1px 1px white;
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
  color: red;
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
  background-color: rgb(7, 29, 61);
}
</style>