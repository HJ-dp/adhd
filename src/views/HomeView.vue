<template>
  <div class="home-container">
    <titles/>
    <div style="height: 400px;"></div>
    <div class="section-best">
      <h1>인기 상품</h1>
      <list :dynamic-props="store.bestProductList"/>
    </div>
    <banner/>
    <div class="section-new">
      <h1>새 상품</h1>
      <list :dynamic-props="store.latestProductList"/>
    </div>
    <youtubeBanner/>
  </div>
</template>

<script setup> 
import titles from '../components/banner/TitleBanner.vue';
import list from '../components/Products/ProductsList.vue'
import banner from '../components/banner/EventBanner.vue'
import youtubeBanner from '@/components/banner/YoutubeBanner.vue'
import {useProductStore} from '@/stores/product';
import { onMounted } from 'vue';

const store = useProductStore();

onMounted(async ()=>{
    await store.getBestList();
    await store.getLatestList();
})

</script>

<style scoped>
.home-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 1em;
  gap:1em;
}

.section-best,
.section-new {
  display: flex;
  flex-direction: column;
  gap:1em;
}
.section-best h1,
.section-new h1{
  font-size: 24px;
}


</style>