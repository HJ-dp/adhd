import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const REST_USER_API = 'http://localhost:8080/api'
export const useUserStore = defineStore('user', () => {
  const userLogin = function (id,pw){
    axios.post(`${REST_USER_API}/login`,{id,pw})
    .then((res)=>{
      console.log(res)

      sessionStorage.setItem('access-token', res.data[access-token]);

      const token = res.data['access-token'].split('.')
      let id = token[1];
      id = atob(id);
      id = JSON.parse(id);
      console.log(id['id']);
      
    }).catch(()=>{

    })
  }
  return { userLogin }
}, { persist:true})
