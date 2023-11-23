import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_MN_API = VITE_DEV_HOST_URL+'manager/'
export const useMNStore = defineStore('managerNotice', () => {
  const router = useRouter();

  const NoticeList = ref();
  const EventList = ref();

  const getNoticeList = function () {
    axios.get(REST_MN_API+`managerNotice/List`)
    .then((res)=>{
      NoticeList.value = res.data;
    })
  }

  const getEventList = function () {
    axios.get(REST_MN_API+`managerEvent/List`)
    .then((res)=>{
      EventList.value = res.data;
    })
  }

  const writeNotice = function (Notice) {
    axios({
      url:REST_MN_API+'managerNotice',
      method:"POST",
      data : Notice,
    })
    .then(()=>{
      Swal.fire({
        title: "작성 완료!",
        text: "개돼지들이 읽게될 것이에요.",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    setTimeout(() => {
      router.go(0);
    }, 2000);
    })
    .catch(()=>{
      Swal.fire({
          title: "공지사항/이벤트 작성에 실패했습니다🥲",
          text: "입력하신 정보를 확인하시고, 다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
      });
  })
  }

  const updateNotice = function (r) {
    axios({
      url : REST_MN_API+`managerNotice/update`,
      method:"PUT",
      data: r,
    })
    .then((res)=>{
      Swal.fire({
        title: "수정 완료!",
        text: "공지사항을 수정했습니다.",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    setTimeout(() => {
      router.go(0);
    }, 2000);
    })
    .catch(()=>{
      Swal.fire({
          title: "공지 수정에 실패했습니다",
          text: "다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
      });
  })
  }

  const removeNotice = function (rid) {
    axios({
      url : REST_MN_API+`managerNotice/${rid}`,
      method:"PUT",
    })
    .then(()=>{
      Swal.fire({
        title: "삭제 완료!",
        text: "공지사항을 삭제했습니다.",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    setTimeout(() => {
      router.go(0);
    }, 2000);
    })
    .catch(()=>{
      Swal.fire({
          title: "공지사항 삭제에 실패했습니다🥲",
          text: "다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
      });
  })
  setTimeout(() => {
    router.go(0);
  }, 1000);
  }

  return { getEventList, getNoticeList,NoticeList,writeNotice,updateNotice,removeNotice, EventList }
}, { persist:true})