<template>
  <div class="main-container">
    <theHeader class="top"/>
    <router-view class="main-c" />
    <theFooter/>
  </div>
</template>

<script setup>
import theHeader from './components/common/GNB.vue'
import theFooter from './components/common/Footer.vue'

</script>

<style scoped>
.top{
  z-index: 9999;
  position:fixed;
}

.main-container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.main-c {
  /* margin-top: 356px; */
  min-height: calc(100vh);
}

</style>