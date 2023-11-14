<template>
  <div>
    <theHeader/>
    <router-view></router-view>
    <theFooter/>
  </div>
</template>

<script setup>
import theHeader from './components/common/GNB.vue'
import theFooter from './components/common/Footer.vue'
</script>

<style scoped>

</style>