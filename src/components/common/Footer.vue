<template>
    <div class="footer-container">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
        <div class="footer-container-wrapper">

            <div class="footer-sitemap">
                <router-link to="/goods/1"  class="footer-sitemap-links">판매상품</router-link>
                <router-link to="/"  class="footer-sitemap-links">오픈마켓</router-link>
                <router-link to="/"  class="footer-logo"></router-link>
                <router-link to="/login"  class="footer-sitemap-links">로그인</router-link>
                <router-link to="/login"  class="footer-sitemap-links">회원가입</router-link>
            </div>
            <div class="footer-sns-links">
                <a href="#" class="icon footer-sns-item"><i class="fa-brands fa-google-plus-g"></i></a>
                <!-- <div class="footer-sns-item"></div> -->
                <a href="#" class="icon footer-sns-item"><img style="width: 25px;" src="/logo/kakao.svg" alt=""></a>
                <a href="#" class="icon footer-sns-item"><img style="width: 25px;" src="/logo/naver.svg" alt=""></a>
            </div>
            <div>&copy 2023. DH Co. all rights reserved.</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.footer-container {
    background-color: gray;
    height: 235px;
    width: 100%;
}

.footer-container-wrapper {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 2em;
    height: 100%;
    max-width: 1024px;
    justify-content: center;
    align-items: center;
}

a:hover {
    transition:0.2s;
    transform: scale(1.05);
}

/* 로고 */
.footer-logo {
    width: 100px;
    height: 70px;
    background-size: cover;
    background-image: url('/logo/Emblem_mono_Dinos_LB.png');
}


/* 사이트맵 */

.footer-sitemap {
    display: flex;
    gap: 3em;
    justify-content: center;
    align-items: center;
}

.footer-sitemap-links {
    color: azure;
    font-weight: 400;
    font-size: 14px;
}

/* sns 링크 */

.footer-sns-links {
    display: flex;
    gap: 3em;

}

.footer-sns-item {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    background-color: rgba(255, 255, 255, 0.6);
border-radius: 26px;
backdrop-filter: blur(6px);
box-shadow: 0px 35px 68px 0px rgba(185, 190, 196, 0.5), inset 0px -8px 16px 0px rgba(193, 200, 210, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
    transition: 0.2s;
}

.footer-sns-item:hover {
    transform: scale(1.05);
}

.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>