<template>
  <div class="map-container">
    <div id="map"></div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

let map = null;

onMounted(() => {
  if (window.kakao && window.kakao.maps) {
    initMap();
  } else {
    const script = document.createElement('script');
    script.onload = () => kakao.maps.load(initMap);
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=5a6a4a0873df40f718d119f6bb1b2429`;
    document.head.appendChild(script);
  }
});

const initMap = () => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(33.450701, 126.570667),
    level: 5,
  };

  map = new kakao.maps.Map(container, options);
};
</script>
  
<style scoped>
.map-container {}

#map {
  width: 400px;
  height: 400px;
}

@media (max-width:1024px) {
  .map-container {
    display: none;
  }
}
</style>
  