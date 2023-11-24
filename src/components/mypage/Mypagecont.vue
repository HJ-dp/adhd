<template>
    <div class="grid-container">
        <router-link :to="{ name: 'mylist' }" class="box title list">내가 찜한</router-link>
        <router-link :to="{ name: 'mycart' }" class="box title cart">장바구니</router-link>
        <myinfo class="llogo" />
        <router-link :to="{ name: 'myorder' }" class="box title order">주문내역</router-link>
        <router-link :to="{ name: 'myaddress' }" class="box title delivery">나의 배송지</router-link>
        <router-link :to="{ name: 'myinfo', query: { param: store } }" class="box title edit">내 정보 수정</router-link>
        <router-link :to="{ name: 'myreview' }" class="box title review">내가 남긴 리뷰</router-link>
        <router-link :to="{ name: 'myquestion' }" class="box title ques">내가 남긴 문의사항</router-link>
        <router-link :to="{ name: 'mynotice' }" class="box title notice">공지사항 & 이벤트</router-link>
    </div>
</template>
<!-- <a href="https://kr.freepik.com/free-psd/megaphone-isolated-3d-render-icon-illustration_28788633.htm#query=3d&position=4&from_view=keyword&track=sph&uuid=8ee17b0d-502c-43bc-8730-b126a06c9ca2">작가 Xvect intern</a> 출처 Freepik -->
<script setup>
import myinfo from './MyInfo.vue'
import { useUserStore } from '../../stores/user';
import { useHeartStore } from '../../stores/mylist';
import { onMounted } from 'vue';
const store = useUserStore();
const hstore = useHeartStore();
onMounted(async () => {
    await store.getInfo();
    await hstore.getFavList();
})

</script>

<style scoped>
.grid-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}

.box {
    height: 200px;
    border-radius: 10px;
    padding: 1rem;
    margin: 1rem;
    justify-content: space-between;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.box:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
}

.title {
    font-size: 24px;
    font-weight: 600;
}


/* 이미지 삽입 */
/* <a href="https://kr.freepik.com/free-photo/shopping-cart-or-trolley-basket-supermarket-icon-sign-or-symbol-on-white-background-3d-rendering_25289009.htm#page=4&query=3d&position=33&from_view=keyword&track=sph&uuid=28ac6885-4d3b-49e7-a01e-a948aaf20f35">작가 mamewmy</a> 출처 Freepik */
/* 출처 <a href="https://kr.freepik.com/free-psd/3d-rendering-of-ui-icon_20546695.htm#page=4&query=3d&position=22&from_view=keyword&track=sph&uuid=28ac6885-4d3b-49e7-a01e-a948aaf20f35">Freepik</a> */
.notice {
    background-image: url('/megaphone.png');
    background-size: cover;
}

.order {
    background-image: url('/3drender.png');
    background-size: cover;
}

.list {
    background-image: url('/3dheart.png');
    background-size: cover;
    background-position: 0 40%;
}

.edit {
    background-image: url('/pencil.jpg');
    background-position: 50% 35%;
    background-size: 70%;
}

.cart {
    background-image: url('/cart.png');
    background-position: 50% 70%;
    background-size: 130%;
}

.delivery {
    background-image: url('/delivery.png');
    background-position: 0% 70%;
    background-size: 100%;
}

.review {
    background-image: url('/flower.png');
    background-position: 50% 50%;
    background-size: 120%;
}

.ques {
    background-image: url('/qu.png');
    background-position: 0% 70%;
    background-size: 100%;
}

.notice {
    background-image: url('/notice.jpg');
    background-position: 0% 70%;
    background-size: 100%;
}

.llogo {
    background-image: url('/logo/logoimg.png');
    background-position: 0% 50%;
    background-size: 100%;
}


/* <a href="https://kr.freepik.com/free-photo/purple-delivery-car-or-delivery-truck-transport-shipping-icon-online-shopping-concept-3d-illustration_34332885.htm#query=3d%20%ED%8A%B8%EB%9F%AD&position=2&from_view=search&track=ais&uuid=6d02dc82-d774-4bfd-a500-03a9a89e5fa0">작가 mamewmy</a> 출처 Freepik */

@media (max-width:768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}

@media (min-width:768px) and (max-width:1024px) {
    .grid-container {
        grid-template-columns: 1fr 1fr;
    }
}
</style>