<template>
    <!-- <div class="List-container">
        {{ d }}
        <card v-for="i in d" :dynamic-props="i" :key="i.heartId" />
    </div> -->
    <div class="review-list-container">
        <h1>찜목록</h1>
        <div>찜한 상품이 없습니다.</div>
    </div>
</template>

<script setup>
// import axios from 'axios';
// import card from '../Products/ProMyListCard.vue'
// import { ref, onMounted } from 'vue';
// import { useHeartStore } from '../../stores/mylist';
// const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
// const REST_FAV_API = VITE_DEV_HOST_URL + 'heart'
// const d = ref('');
// onMounted(async () => {
//     d.value = JSON.parse(localStorage.getItem('heart'));
//     // await axios.get(REST_FAV_API + `/list/${localStorage.getItem('User')}`)
//     //     .then((res) => {
//     //         console.log(res.data);
//     //     })
// })

</script>


<style scoped>
.review-list-container {
    width: 90vw;
    max-width: 1200px;
    min-height: 200px;
    border-radius: 10px;
    border: 1px solid rgb(0, 0, 0, 0.2);
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 2em;
}

.review-list-container h1 {
    margin: 1em;
    font-size: 17px;
}


</style>