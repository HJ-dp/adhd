import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const REST_USER_API = 'http://localhost:8080/api/'
export const useUserStore = defineStore('user', () => {
  
  const loginuser = ref(false);

  const login = function (user) {
    axios({
      url : REST_USER_API+`login`,
      method: 'POST',
      params : user

    })
    .then((res)=>{
      let token = res.data.access_token;
      localStorage.setItem("token", token);
      loginuser.value = true;
    })
  }

  const logout = function(){
    localStorage.removeItem("token");
    loginuser.value = false;
  }

  const regist = function (user) {
    axios({
      url : REST_USER_API+`signup`,
      method: 'POST',
      data : user,
    })
    .then((res)=>{
      console.log(res.data);
    })
  }

  return { login, regist, logout, loginuser }
}, { persist:true})