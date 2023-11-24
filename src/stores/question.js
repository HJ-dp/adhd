import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_Question_API = VITE_DEV_HOST_URL + 'review/'
export const useQuestionStore = defineStore('question', () => {
  const router = useRouter();
  const QuestionList = ref();

  const getQuestionList = function (pid) {
    axios.get(REST_Question_API + `productQuestionList?productId=${pid}`)
      .then((res) => {
        QuestionList.value = res.data;
      })
  }

  const questionListmine = function (id) {
    console.log(id);
    axios.get(REST_Question_API + `userQuestionList?userId=${id}`)
      .then((res) => {
        QuestionList.value = res.data
      })
  }


  const writeQuestion = function (Q) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
      axios({
        url: REST_Question_API,
        method: "POST",
        data: Q,
      })
        .then(() => {
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
        .catch(() => {
          Swal.fire({
            title: "문의글 작성에 실패했습니다🥲",
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


  const removeQuestionList = function () {
    QuestionList.value = '';
  }

  const updateQuestion = function (r) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
    axios({
      url: REST_Question_API + `update`,
      method: "PUT",
      data: r,
    })
      .then((res) => {
        Swal.fire({
          title: "수정 완료!",
          text: "문의를 수정했습니다.",
          icon: "success",
          confirmButtonColor: 'rgb(74,199,213)',
        })
      })
      .catch(() => {
        Swal.fire({
          title: "문의 수정에 실패했습니다",
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

  const removeQuestion = function (rid) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
    axios({
      url: REST_Question_API + `${rid}`,
      method: "PUT",
    })
      .then(() => {
        Swal.fire({
          title: "삭제 완료!",
          text: "문의를 삭제했습니다.",
          icon: "success",
          confirmButtonColor: 'rgb(74,199,213)',
        })

      })
      .catch(() => {
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
  } else {
    Swal.fire({
      icon: "error",
      title: "로그인이 필요한 기능입니다.",
      text: "로그인 하시고 이용해주세요!",
      confirmButtonColor: 'rgb(74,199,213)',
    });
  }
  }

  return { questionListmine, getQuestionList, QuestionList, removeQuestionList, writeQuestion, updateQuestion, removeQuestion }
}, { persist: true })