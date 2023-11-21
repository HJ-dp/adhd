import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'

const REST_Question_API = 'http://localhost:8080/api/'
export const useQuestionStore = defineStore('question', () => {
  const router = useRouter();
  const QuestionList = ref();
  const getQuestionList = function (pid) {
    axios.get(REST_Question_API+`productQuestionList?productId=${pid}`)
    .then((res)=>{
      QuestionList.value = res.data;
    })
  }


  const writeQuestion = function (Q) {
    axios({
      url:REST_Question_API+`review`,
      method:"POST",
      data : Q,
    })
    .then(()=>{
      Swal.fire({
        title: "작성 완료!",
        text: "빠른시간내에 답변 드리겠습니다!",
        icon: "success"
    })
    setTimeout(() => {
      router.go(0);
    }, 2000);
    })
    .catch(()=>{
      Swal.fire({
          title: "문의글 작성에 실패했습니다🥲",
          text: "입력하신 정보를 확인하시고, 다시 시도해주세요",
          icon: "error"
      });
  })
    
  }


  const removeQuestionList = function(){
    QuestionList.value = '';
  }

  return { getQuestionList, QuestionList, removeQuestionList,writeQuestion }
}, { persist:true})