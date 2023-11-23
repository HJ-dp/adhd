import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_PRODUCT_API = VITE_DEV_HOST_URL+'product/'
export const useProductStore = defineStore('product', () => {
  const ProductList = ref([]);
  const bestProductList = ref();
  const latestProductList = ref();
  const product = ref();

  const getProductList = function (id) {
    axios.get(REST_PRODUCT_API+`/list/${id}`)
    .then((res)=>{
      ProductList.value = res.data
    })
  }

  const getBestList = function () {
    axios.get(REST_PRODUCT_API+`bestProducts`)
    .then((res)=>{
      bestProductList.value = res.data
    })
  }

  const getLatestList = function () {
    axios.get(REST_PRODUCT_API+`latelyProducts`)
    .then((res)=>{
      latestProductList.value = res.data
    })
  }

  function getProduct(productId) {
    axios.get(REST_PRODUCT_API+`${productId}`)
    .then((res)=>{
      product.value = res.data;
    })
  }

  function removeProduct(){
    product.value ='';
  }

  return { ProductList, getProductList, bestProductList, getBestList, latestProductList, getLatestList,product, getProduct, removeProduct}
}, { persist:true})