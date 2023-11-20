import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const REST_PRODUCT_API = 'http://localhost:8080/api/user'
export const useProductStore = defineStore('product', () => {
  const ProductList = ref([]);
  const bestProductList = ref();
  const latestProductList = ref();

  const getProductList = function (id) {
    axios.get(REST_PRODUCT_API+`/list/${id}`)
    .then((res)=>{
      ProductList.value = res.data
    })
  }

  const getBestList = function () {
    axios.get(REST_PRODUCT_API+`/bestProducts`)
    .then((res)=>{
      bestProductList.value = res.data
    })
  }

  const getLatestList = function () {
    axios.get(REST_PRODUCT_API+`/latelyProducts`)
    .then((res)=>{
      latestProductList.value = res.data
    })
  }

  return { ProductList, getProductList, bestProductList, getBestList, latestProductList, getLatestList }
})