import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'
const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
// const REST_USER_API = 'http://localhost:8080/api/user/'
const REST_USER_API = VITE_DEV_HOST_URL+'user/'
export const useUserStore = defineStore('user', () => {
    const router = useRouter();
    const loginuser = ref(false);
    const User = ref();
    const login = function (user) {
        axios({
            url: REST_USER_API + `login`,
            method: 'POST',
            params: user
        })
        .then((res) => {
            User.value = user;
            let token = res.data.access_token;
            localStorage.setItem("token", token);
            localStorage.setItem("User", user.id);
            sessionStorage.setItem("token", token);
            loginuser.value = true;
        })
        .catch(()=>{
            Swal.fire({
                title: "로그인에 실패했습니다",
                text: "입력하신 정보를 확인하시고, 다시 시도해주세요",
                icon: "error",
                confirmButtonColor: 'rgb(74,199,213)',
            });
        })
    }

    const logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("User");
        localStorage.removeItem("user");
        sessionStorage.removeItem("token");
        User.value ='';
        loginuser.value = false;
    }

    const regist = function (user) {
        axios({
            url: REST_USER_API + `signup`,
            method: 'POST',
            data: user,
        })
            .then(() => {
                Swal.fire({
                    title: "회원가입 완료!",
                    text: "NC다이노스몰의 회원이 되어주셔서 감사합니다!",
                    icon: "success",
                    confirmButtonColor: 'rgb(74,199,213)',
                });
                router.push({name:'login'});
            })
            .catch((res) => {
                if (res.response.data.message=="1"){
                    Swal.fire({
                        title: "이미 존재하는 아이디입니다",
                        text: "입력하신 정보를 확인하시고, 다시 작성해주세요",
                        icon: "error",
                        confirmButtonColor: 'rgb(74,199,213)',
                    });
                } else if (res.response.data.message=="1"){
                    Swal.fire({
                        title: "이미 존재하는 닉네임입니다 🥲",
                        text: "입력하신 정보를 확인하시고, 다시 작성해주세요",
                        icon: "error",
                        confirmButtonColor: 'rgb(74,199,213)',
                    });
                } else {
                    Swal.fire({
                        title: "문제가 발생했습니다",
                        text: "입력하신 정보를 확인하시고, 다시 작성해주세요",
                        icon: "error",
                        confirmButtonColor: 'rgb(74,199,213)',
                    });
                }
            })
    }

    return { login, regist, logout, loginuser, User }
}, { persist: true })