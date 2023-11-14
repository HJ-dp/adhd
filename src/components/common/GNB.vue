<template>
    <div class="header-container">
        <nav class="global-nav">
            <div class="logo">
                <img src="../../assets/Symbol_mono_Dinos Gold.png" alt="">
            </div>
            <div class="global-nav-items">
            <a href="" class="global-nav-item">마이페이지</a>
            <a href="" class="global-nav-item">판매상품</a>
            <a href="" class="global-nav-item">로그인</a>
            <a href="" class="global-nav-item">회원가입</a>
        </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header-container{
    width: 100%;
    height: 44px;
    
}

.global-nav {
    margin: 0 auto;
    max-width: 1024px;
    width: 80%;
    height: 100%;
    background-color: rgb(29,29,31);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    padding: 0 2em;
    color : white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.global-nav-items {
    display: flex;
    gap:1em;
}
.logo {
    background-image: url(../../assets/Symbol_Home.png);
    height: 2em;
    width: 2em;
}

.logo > img{
    width: 100%;
    height: 100%;
}





</style>