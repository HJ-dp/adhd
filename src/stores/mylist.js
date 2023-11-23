import { ref,watch } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'
import { useRouter } from 'vue-router';

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_FAV_API = VITE_DEV_HOST_URL+'heart'
export const useHeartStore = defineStore('heart', () => {
    
    const router = useRouter();
  const heartList = ref([]);

  const product = ref([]);

  const cnt = ref([]);

  const getFavList = function () {
    axios.get(REST_FAV_API+`/list/${localStorage.getItem('User')}`)
    .then((res)=>{
        product.value=res.data;
        heartList.value = res.data
    })
  }

  const removeHeart = function(id){
      const updatedList = heartList.value.filter((i) => i.productId == id);
      heartList.value = updatedList;
    axios({
       url: REST_FAV_API+`/${id}`,
       method:'DELETE',
       data : id,
    })
    .then(()=>{
        Swal.fire({
            title: "지우기!",
            text: "목록에서 지웠어요.",
            icon: "success",
            confirmButtonColor: 'rgb(74,199,213)',
        })
    })
    .catch(()=>{
        Swal.fire({
            title: "찜목록에서 삭제하지 못했습니다🥲",
            text: "다시 시도해주세요",
            icon: "error",
            confirmButtonColor: 'rgb(74,199,213)',
        });
    })
  }

  function heartProduct(heart) {
      axios({
          url :REST_FAV_API,
          method:'POST',
          data:heart,
        })
    .then(()=>{
        // heartList.value.push(heart);
        getFavList();
        Swal.fire({
        title: "이건 내꺼!",
        text: "이건 이제 제꺼에요.",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
    })
    setTimeout(() => {
        router.go(0);
      }, 2000);
    }).catch(()=>{
        Swal.fire({
            title: "찜하기에 실패했습니다🥲",
            text: "다시 시도해주세요",
            icon: "error",
            confirmButtonColor: 'rgb(74,199,213)',
        });
    })
  }

  watch(heartList.value,()=>{
    cnt.value = heartList.value.length;
  })
  
  return { getFavList, heartProduct, removeHeart, heartList, product }
}, { persist:true})