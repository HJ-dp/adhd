<template>
  <div class="youtubeContainer">
    <h2>YoutubeView</h2>
    <YouTubeiframe :dynamic-props="vvideos"/>
  </div>
  <div class="youtubeContainer"></div>
</template>

<script setup>

import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import YouTubeiframe from '@/components/youtube/iframe.vue'
import youtubeBanner from '@/components/banner/YoutubeBanner.vue'

const vvideos = ref([])
onMounted(() => {
  
  const URL = 'https://www.googleapis.com/youtube/v3/search'
  const API_KEY = 'AIzaSyBFjI6IaK0u7lLwqvudDD134Dh69EyUfCk'
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

// const videoURL = computed(()=>{
//     const videoId = vvideos?.value?.id?.videoId
//     return `https://www.youtube.com/embed/${videoId}`
// })


</script>

<style scoped>
.youtubeContainer {
  margin-top: 100px;
}
</style>
