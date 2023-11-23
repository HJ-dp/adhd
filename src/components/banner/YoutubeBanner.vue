<template>
    <div class="banner-container">
        <YouTubeiframe v-for="i in vvideos" :key="i.id" :dynamic-props="i"/>
    </div>
</template>

<script setup>

import { ref, onMounted } from 'vue'
import axios from 'axios'
import YouTubeiframe from '@/components/youtube/iframe.vue'

const vvideos = ref([])
onMounted(() => {
  
  const URL = 'https://www.googleapis.com/youtube/v3/search'
  const API_KEY = 'AIzaSyBLiRFt-3tSa3wrWQw8BljUnMNyqRI6Vzc'
  axios({
    url: URL,
    method: "GET",
    params: {
      key: API_KEY,
      part: "snippet", // 필수
      channelId : "UC8_FRgynMX8wlGsU6Jh3zKg",
      type: 'video', // 영상만 보여줘
      maxResults: 3, // 영상 개수 몇개
      order: 'date'
    }
  })
  .then((response) => {
    vvideos.value = response.data.items
    console.log(response.data.items)
  })
  .catch(() => { })
})

</script>


<style scoped>
.banner-container{
    width: 2000px;
    /* width:100%; */
    /* height: 300px; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 0 0;
    margin: 0;
    background:linear-gradient(to right, rgb(20, 140, 220), gold);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.banner-container h1 {
    font-size: 24px;
}

@media (max-width: 768px) {
  .banner-container{
    flex-direction: column;
  }
}

</style>