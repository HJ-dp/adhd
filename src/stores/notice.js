import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_MN_API = VITE_DEV_HOST_URL+'/manager/managerNotice'
export const useMNStore = defineStore('managerNotice', () => {
  const router = useRouter();

  const NoticeList = ref();

  const getNoticeList = function () {
    axios.get(REST_MN_API+`/List`)
    .then((res)=>{
      NoticeList.value = res.data;
      console.log(res.data);
    })
  }

  const writeQuestion = function (Q) {
    axios({
      url:REST_MN_API,
      method:"POST",
      data : Q,
    })
    .then(()=>{
      Swal.fire({
        title: "작성 완료!",
        text: "빠른시간내에 답변 드리겠습니다!",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    setTimeout(() => {
      router.go(0);
    }, 2000);
    })
    .catch(()=>{
      Swal.fire({
          title: "문의글 작성에 실패했습니다🥲",
          text: "입력하신 정보를 확인하시고, 다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
      });
  })
  }

  const updateQuestion = function (r) {
    axios({
      url : REST_Question_API+`update`,
      method:"PUT",
      data: r,
    })
    .then((res)=>{
      Swal.fire({
        title: "수정 완료!",
        text: "문의를 수정했습니다.",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    })
    .catch(()=>{
      Swal.fire({
          title: "문의 수정에 실패했습니다",
          text: "다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
      });
  })
  }

  const removeQuestion = function (rid) {
    axios({
      url : REST_Question_API+`${rid}`,
      method:"PUT",
    })
    .then(()=>{
      Swal.fire({
        title: "삭제 완료!",
        text: "문의를 삭제했습니다.",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    
    })
    .catch(()=>{
      Swal.fire({
          title: "문의 삭제에 실패했습니다🥲",
          text: "다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
      });
  })
  setTimeout(() => {
    router.go(0);
  }, 1000);
  }

  return { getNoticeList }
}, { persist:true})