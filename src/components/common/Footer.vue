<template>
    <div class="footer-container">
        <div class="footer-container-wrapper">
            
            <div class="footer-sitemap">
                <div class="footer-sitemap-links">상품보기</div>
                <div class="footer-sitemap-links">오픈마켓</div>
                <div class="footer-logo"></div>
                <div class="footer-sitemap-links">로그인</div>
                <div class="footer-sitemap-links">회원가입</div>
            </div>
            <div class="footer-sns-links">
                <div class="footer-sns-item"></div>
                <div class="footer-sns-item"></div>
                <div class="footer-sns-item"></div>
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
    height: 300px;
    width: 100%;
}

.footer-container-wrapper{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap:2em;
    height: 100%;
    max-width: 1024px;
    justify-content: center;
    align-items: center;
}

/* 로고 */
.footer-logo{
    width: 150px;
    height: 105px;
    background-size: cover;
    background-image: url('../../assets/logo/Emblem_mono_Dinos_LB.png');
}


/* 사이트맵 */

.footer-sitemap{
    display: flex;
    gap:3em;
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

.footer-sns-item{
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: white;
}

</style>