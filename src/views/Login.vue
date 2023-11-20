<template>
  <div class="login-container">
    <video class="promotion-video" autoplay="autoplay" loop="loop" src="/banner/fake.mp4">
    </video>
    <div class="logo"></div>
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>

/* 비디오 */
.promotion-video{
  height: 100%;
  width: 100%;
  margin:0px;
  padding: 0px;
  position: absolute;
  left: 0;
  top:0;
  object-fit: cover;
  z-index:-3;
}

/* 로고 */
.logo{
  background-image: url(/logo/Emblem_Home.png);
  /* width: 315px; */
  width: 100%;
  max-width: 350px;
  max-height: 240px;
  /* height: 215px; */
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top:10vh;
  z-index: -1;
}


.login-container{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:2em;
  z-index: 1;
  background: linear-gradient(to right, rgb(92,142,187), rgb(29,70,125));
}
/* 
.login-box{
  display: flex;
  flex-direction: column;
  gap:1em;
  background-color: rgb(0,0,0,0.3);
  padding: 3em;
  border-radius: 25px;
  text-align: center;
  z-index: 3;
}

.login-box input {
  border: none;
  border-bottom: 1px solid #999;
  outline: none;
  padding: 0.5em 1em;
  width: 50vw;
  max-width: 350px;
  height: 18px;
  background-color: transparent;
}
.input-box {
  position: relative;
  margin-top: 1em;
}
.input-box p {
  color:red;
  font-weight: 600;
  text-shadow: 1px 1px white;
  text-align:end;
  position: absolute;
  top:5px;
  right: 0px;
  z-index: -1;
}

.input-box:first-child{ margin-top: 0; }

.input-box label{
  position: absolute;
  top:5px;
  left: 13px;
  transition: all 0.3s ease;
  font-size: 17px;
  color: white;
  font-weight: 600;
}

.input-box label.warning {
  color:red;
  animation: warning .3s ease;
  animation-iteration-count: 3;
}

@keyframes warning {
  0% {transform: translateX(-5px);}
  25% {transform: translateX(5px);}
  50% {transform: translateX(-5px);}
  75% {transform: translateX(5px);}
}

.input-box input:focus + label,
.input-box input:valid + label {
  top:-10px;
  font-size: 12px;
  color: rgb(74,199,213);
}


.btn-box{
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  gap:1em;
  justify-content: space-between;
}

.btn-box button {
  height: 40px;
  color: white;
  border-radius: 25px;
  border: 1px solid gray;
  cursor: pointer;
}

.btn-box button:hover {
  border: 1px solid white;
}

.btn-box button:active  {
  border: 3px solid white;
}


.btn-box button:first-child {
  background-color: rgb(29,70,125);
}

.btn-box button:last-child {
  background-color: rgb(7,29,61);
} */
</style>