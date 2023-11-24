import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'
// test

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_ADDRESS_API = VITE_DEV_HOST_URL + 'delivery/'
export const useAddressStore = defineStore('address', () => {
  const AddressList = ref();
  const getAddressList = function (pid) {
    axios.get(REST_ADDRESS_API + `deliveryList/${pid}`)
      .then((res) => {
        AddressList.value = res.data;
      })
  }

  const addAddress = function (add) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
      axios({
        url: REST_ADDRESS_API + `deliveryList`,
        method: "POST",
        data: add,
      })
        .then(() => {
          Swal.fire({
            title: "등록 완료!",
            text: "배송지를 등록했습니다.",
            icon: "success",
            confirmButtonColor: 'rgb(74,199,213)',
          })
        })
        .catch(() => {
          Swal.fire({
            title: "배송지 등록에 실패했습니다",
            text: "다시 시도해주세요",
            icon: "error",
            confirmButtonColor: 'rgb(74,199,213)',
          });
        })
    } else {
      Swal.fire({
        icon: "error",
        title: "로그인이 필요한 기능입니다.",
        text: "로그인 하시고 이용해주세요!",
        confirmButtonColor: 'rgb(74,199,213)',
      });
    }
  }

  return { getAddressList, addAddress, AddressList }
}, { persist: true })