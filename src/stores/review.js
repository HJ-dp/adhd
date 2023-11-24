import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_REVIEW_API = VITE_DEV_HOST_URL + 'review/'
export const useReviewStore = defineStore('review', () => {
  const router = useRouter();
  const ReviewList = ref();


  const getReviewList = function (pid) {
    axios.get(REST_REVIEW_API + `productReviewList?productId=${pid}`)
      .then((res) => {
        ReviewList.value = res.data
      })
  }

  const reviewListmine = function (id) {
    axios.get(REST_REVIEW_API + `userReviewList?userId=${id}`)
      .then((res) => {
        ReviewList.value = res.data
      })
  }


  const writeReview = function (R) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
      axios({
        url: REST_REVIEW_API,
        method: "POST",
        data: R,
      })
        .then(() => {
          Swal.fire({
            title: "작성 완료!",
            text: "리뷰를 남겨주셔서 감사합니다!",
            icon: "success",
            confirmButtonColor: 'rgb(74,199,213)',
          })
          setTimeout(() => {
            router.go(0);
          }, 2000);
        })
        .catch(() => {
          Swal.fire({
            title: "리뷰 작성에 실패했습니다🥲",
            text: "입력하신 정보를 확인하시고, 다시 시도해주세요",
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

  const removeReviewList = function () {
    ReviewList.value = '';
  }

  const updateReview = function (r) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
      axios({
        url: REST_REVIEW_API + `update`,
        method: "PUT",
        data: r,
      })
        .then(() => {
          Swal.fire({
            title: "수정 완료!",
            text: "리뷰를 수정했습니다.",
            icon: "success",
            confirmButtonColor: 'rgb(74,199,213)',
          })
          setTimeout(() => {
            router.go(0);
          }, 2000);

        })
        .catch(() => {
          Swal.fire({
            title: "리뷰 수정에 실패했습니다",
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

  const removeReview = function (rid) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
      axios({
        url: REST_REVIEW_API + `${rid}`,
        method: "PUT",
      })
        .then(() => {
          Swal.fire({
            title: "삭제 완료!",
            text: "리뷰를 삭제했습니다.",
            icon: "success",
            confirmButtonColor: 'rgb(74,199,213)',
          })

        })
        .catch(() => {
          Swal.fire({
            title: "리뷰 삭제에 실패했습니다🥲",
            text: "다시 시도해주세요",
            icon: "error",
            confirmButtonColor: 'rgb(74,199,213)',
          });
        })
      setTimeout(() => {
        router.go(0);
      }, 1000);
    } else {
      Swal.fire({
        icon: "error",
        title: "로그인이 필요한 기능입니다.",
        text: "로그인 하시고 이용해주세요!",
        confirmButtonColor: 'rgb(74,199,213)',
      });
    }
  }

  return { getReviewList, ReviewList, removeReviewList, writeReview, removeReview, updateReview, reviewListmine }
}, { persist: true })