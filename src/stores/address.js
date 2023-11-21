import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'
// test

const REST_ADDRESS_API = 'http://localhost:8080/api/delivery/'
export const useAddressStore = defineStore('address', () => {

  const getAddressList = function (pid) {
    axios.get(REST_ADDRESS_API+`productQuestionList?productId=${pid}`)
    .then((res)=>{
      QuestionList.value = res.data;
    })
  }


  const addAddress = function (add) {
    axios({
      url : REST_ADDRESS_API+`deliveryList`,
      method:"POST",
      data: add,
    })
    .then(()=>{
      Swal.fire({
        title: "등록 완료!",
        text: "배송지를 등록했습니다.",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    })
    .catch(()=>{
      Swal.fire({
          title: "배송지 등록에 실패했습니다",
          text: "다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
      });
  })
  }

  return { getAddressList, addAddress }
}, { persist:true})