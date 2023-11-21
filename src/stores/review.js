import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const REST_REVIEW_API = 'http://localhost:8080/api/'
export const useReviewStore = defineStore('review', () => {
  const ReviewList = ref();

  const getReviewList = function (pid) {
    axios.get(REST_REVIEW_API+`productReviewList?productId=${pid}`)
    .then((res)=>{
      ReviewList.value = res.data
    })
  }

  const removeReviewList = function(){
    ReviewList.value = '';
  }

  return { getReviewList, ReviewList, removeReviewList }
}, { persist:true})