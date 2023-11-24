<template>
    <div>
        <!-- {{ dynamicProps }} -->
    <router-link class="card-container" :to="{name:'goods_Detail',params:{productId: dynamicProps?.productId}}" title="클릭하면 상품을 자세히 볼 수 있어요.">
        <div class="card-img" :style="{ backgroundImage: `url(${dynamicProps?.productImg})`}" alt="상품 사진"></div>
        <div class="card-info">
            <div class="card-info-badge" :class="{'hot':hot, 'new':isNew}"> NEW</div>
            <div class="card-info-title">{{ dynamicProps?.productName }}</div>
            <div class="card-info-price">₩ {{ dynamicProps?.price }}</div>
        </div>
    </router-link> 
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductStore } from '@/stores/product';
import axios from 'axios';

const VITE_DEV_HOST_URL = import.meta.env.VITE_DEV_HOST_URL
const REST_PRODUCT_API = VITE_DEV_HOST_URL+'product/'
const store = useProductStore();
const hot = ref(false);
const isNew = ref(true);
const price = ref(0);
const name = ref();
const productImg = ref();

defineProps({
    dynamicProps: Object
})

onMounted(async ()=>{
    await axios.get(REST_FAV_API + `/list/${localStorage.getItem('User')}`)
      .then((res) => {
        product.value = res.data;
        heartList.push(res.data);
      })
  }
)

</script>

<style scoped>
.card-container{
    width: 250px; 
    height: 400px;
    border-radius: 10px;
    padding: 1em;
    justify-content: space-between;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}
.card-container:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
}

/* 뱃지 */

.card-info-badge{
    margin: auto 0 0 0;
    font-size: 12px;
}
.hot {
    color:crimson;
}

.new {
    color:gold;
    text-shadow: -1px -1px 0 rgb(29, 29, 31), 1px -1px 0 rgb(29, 29, 31), -1px 1px 0 rgb(29, 29, 31), 1px 1px 0 rgb(29, 29, 31);
}

/* 카드 */
.card-img{
    width:100%;
    border-radius: 10px;
    height: 325px;
    background-color: #e7e7e7;
    background-size: cover;
    background-position: 50% 50%;
}
/* 정보 */

.card-info{
    height: 75px;
    display: flex;
    flex-direction: column;
}

.card-info-title{
    /* height: 100%; */
    font-weight:600;
    font-size:17px;
    margin: auto 0 0 0;
}


.card-info-price{
    /* height: 100%; */
    font-size:17px;
    margin: auto 0 0 0;
}

</style>