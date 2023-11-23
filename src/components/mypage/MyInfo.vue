<template>
    <div class=" box container">
        <div class="title" id="dung">{{ store.userInfo?.userNickname }}님 환영합니다</div>
        <div class="btn-box">
            <router-link v-if="store.userInfo?.manager" :to="{ name: 'manager' }" class="manageBtn" title="클릭하면 관리자페이지로 이동해요">관리자</router-link>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../../stores/user';
const store = useUserStore();



</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
}

.title {}

#dung {
    color: skyblue;
    position: absolute;
    animation: ani 2s infinite alternate;
}

@keyframes ani {
    0% {
        transform: translate(0, -50px);
    }

    100% {
        transform: translate(0, 50px);
    }
}

</style>