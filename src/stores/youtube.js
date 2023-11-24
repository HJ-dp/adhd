import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useYoutubeStore = defineStore('youtube', () => {
  const videos = ref([])
  const selectedVideo = ref(null)
  const vvideos = ref([])

  const youtubeChannel = function(){
    const URL = 'GET https://www.googleapis.com/youtube/v3/channels'
    const API_KEY = 'AIzaSyBFjI6IaK0u7lLwqvudDD134Dh69EyUfCk'
    axios({
      url: URL,
      method: "GET",
      params: {
        key: API_KEY,
        part: "snippet", // 필수
        q: 'ncdinos',
        type: 'video', // 영상만 보여줘
        maxResults: 5 // 영상 개수 몇개
      }
    })
    .then((response)=>{
      vvideos.value = response.data.items
    })
    .catch(()=>{})
  }

  const youtubeSearch = function(keyword){
    const URL = 'https://www.googleapis.com/youtube/v3/search';
    const API_KEY = 'AIzaSyBFjI6IaK0u7lLwqvudDD134Dh69EyUfCk'
    axios({
      url: URL,
      method: "GET",
      // params로 보낸다는건 url뒤에 쿼리스트링으로 요청을 날린다는 것
      params: {
        key: API_KEY,
        part: "snippet", // 필수
        q: keyword,
        type: 'video', // 영상만 보여줘
        maxResults: 10 // 영상 개수 몇개
      }
    })
    .then((response)=>{
      videos.value = response.data.items
    })
    .catch(()=>{})
  }

  const clickVideo = function(video){
    selectedVideo.value = video
  }
  return { videos, youtubeSearch, clickVideo, selectedVideo, youtubeChannel, vvideos}
})
