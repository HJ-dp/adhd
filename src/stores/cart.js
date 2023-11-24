import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2/src/sweetalert2.js'

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_CART_API = VITE_DEV_HOST_URL + 'basket'
export const useCartStore = defineStore('cart', () => {

  const router = useRouter();
  const cartList = [];

  const getCartList = function (id) {
    axios.get(REST_CART_API + `/list/${id}`)
      .then((res) => {
        // cartList.value = res.data;
      })
  }

  const addCart = function (item) {
    const { loginuser } = JSON.parse(localStorage.getItem('user') || '{}')
    if (loginuser) {
      cartList.push(item);
      persistCart();
      Swal.fire({
        title: "카트 담기 완료!",
        text: "그만 담으세요 좀",
        icon: "success",
        confirmButtonColor: 'rgb(74,199,213)',
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

  const removeItemByProductId = function (i) {
    const indexToRemove = cartList.findIndex(item => item.productId === i.productId);
    if (indexToRemove !== -1) {
      this.items.splice(indexToRemove, 1);
      this.persistCart();
    }
  }

  const persistCart = function () {
    localStorage.setItem('cart', JSON.stringify(cartList));
  }

  const loadCart = function () {
    const cart = localStorage.getItem('cart');
    if (cart) {
      // cartList = JSON.parse(cart);
    }
  }
  // if(!localcart.value.includes(product)){
  //     localcart.value.add(product);
  // } else {
  //     Swal.fire({
  //         title: "카트에 이미 담겨있어요",
  //         text: "몇개를 담을 생각이신 거에요",
  //         icon: "error",
  //         confirmButtonColor: 'rgb(74,199,213)',
  //     });
  // }
  //api 쓰기?
  //   axios({
  //     url:REST_CART_API,
  //     method:"POST",
  //     data : product,
  //   })
  //   .then(()=>{
  //     Swal.fire({
  //       title: "카트 담기 완료!",
  //       text: "그만 담으세요 좀",
  //       icon: "success",
  //       confirmButtonColor: 'rgb(74,199,213)',
  //   })
  //   })
  //   .catch(()=>{
  //     Swal.fire({
  //         title: "카트에 못담았습니다🥲",
  //         text: "다시 시도해주세요",
  //         icon: "error",
  //         confirmButtonColor: 'rgb(74,199,213)',
  //     });
  // })


  const updateNotice = function (r) {
    axios({
      url: REST_CART_API + `managerNotice/update`,
      method: "PUT",
      data: r,
    })
      .then((res) => {
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
      .catch(() => {
        Swal.fire({
          title: "공지 수정에 실패했습니다",
          text: "다시 시도해주세요",
          icon: "error",
          confirmButtonColor: 'rgb(74,199,213)',
        });
      })
  }

  const removeNotice = function (id) {
    axios({
      url: REST_CART_API + `list/${id}`,
      method: "DELETE",
    })
      .then(() => {
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
      .catch(() => {
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

  return { addCart, getCartList, removeItemByProductId }
}, { persist: true })