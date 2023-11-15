<template>
  <div class="login-container">
    <log/>
  </div>
</template>

<script setup>
import log from '../components/user/regist.vue'
</script>

<style scoped>
.main-top-promotion-video {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
}

.login-container{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;;
}
</style>