<template>
    <div class="main">
        <div class="world">
            <div class="card">
                <label for="userId">아이디</label>
                <input type="text" v-model="userId">
                <label for="userPw">비밀번호</label>
                <input type="password" v-model="userPw">
                <label for="userName">이름</label>
                <input type="text" v-model="userName">
                <label for="userNickname">닉네임</label>
                <input type="text" v-model="userNickname">
                <label for="userPhone">전화번호</label>
                <input type="text" v-model="userPhone">
                <label for="userEmail">이메일</label>
                <input type="text" v-model="userEmail">
                <button @click="regist()">dd</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const userId = ref();
const userPw = ref();
const userName = ref();
const userPhone = ref();
const userEmail = ref();
const userNickname = ref();


function regist(){
    const {userId,userPw,userName,userPhone,userEmail,userNickname} = user;

}

</script>

<style scoped>
.main {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.world{
    width: 100vw;
    height: 100vh;
    /* perspective: 500px; */
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    width: 200px;
    height: 200px;
    background-color: gold;
    transform: rotateY(0deg);
    perspective-origin: center;
    /* transition: 0.8s; */
    }

    .card:hover {
        animation-name : coin;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-play-state: ease-in;
    }

    @keyframes coin {
        0%{
            transform: perspective(500px) rotateY(0deg) ;
        }
        30%{transform: perspective(500px) rotateY(85deg) ;}
        35%{transform: perspective(500px) rotateY(150deg) ;}
        40%{transform: perspective(500px) rotateY(300deg) ;}
        45%{transform: perspective(500px) rotateY(450deg) ;}
        50%{transform: perspective(500px) rotateY(600deg) ;}
        55%{transform: perspective(500px) rotateY(750deg) ;}
        60%{transform: perspective(500px) rotateY(300deg) ;}
        100%{transform: perspective(500px) rotateY(0deg) scale(1.15);}
        
    }
</style>