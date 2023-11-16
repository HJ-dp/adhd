import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';

const REST_PRODUCT_API = 'http://localhost:8080/api/product'
export const useProductStore = defineStore('product', () => {
  const ProductList = ref([]);
  const seletedVideo = ref([]);
  const Product = ref();

  const getProductList = function (id) {
    axios.get(REST_PRODUCT_API+`/list/${id}`)
    .then((res)=>{
      ProductList.value = res.data
      console.log(res.data);
    })
  }

  return { ProductList, getProductList }
})