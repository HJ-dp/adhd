import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const REST_USER_API = 'http://localhost:8080/api'
export const useUserStore = defineStore('user', () => {
  const userLogin = function (id,pw){
    axios.post(`${REST_USER_API}/login`,{id,pw})
    .then((res)=>{
      console.log(res)
    }).catch(()=>{

    })
  }
  return { userLogin }
})
