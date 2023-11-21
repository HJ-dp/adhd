import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const REST_FAV_API = 'http://localhost:8080/api/heart/'
export const useHeartStore = defineStore('heart', () => {
  const heartList = ref();
  const product = ref();

  const getFavList = function (id) {
    axios.get(REST_FAV_API+`/list/${id}`)
    .then((res)=>{
      ProductList.value = res.data
    })
  }

  const removeHeart = function(id){
    axios({
       url: REST_FAV_API+`/list/${id}`,
       method:'DELETE',
       data : id,
    })
    .then((res)=>{
        console.log(res.data);
    })
  }

  function heartProduct(heart) {
    axios({
        url :REST_FAV_API,
        method:'POST',
        data:heart,
    })
    .then((res)=>{
      console.log(res);
    })
  }

  return { getFavList, heartProduct, removeHeart, heartList, product }
}, { persist:true})