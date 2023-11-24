<template>
    <div class="content-container">
        <div class="content-img" :style="{ backgroundImage: `url(${dynamicProps?.productImg})` }" alt="상품 사진">
        </div>
        <div class="content-info-container">
            <div class="content-price-container">
                <div class="pTitle">{{ dynamicProps?.productName }}</div>
                <div class="price">
                    <h1>판매가</h1>
                    <div class="pPrice">{{ joinprice(dynamicProps?.price) }}원</div>
                </div>
                <div class="price">
                    <h1>배송비</h1>
                    <div>무료</div>
                </div>
            </div>
            <div class="line"></div>
            <div class="option-box">
                <div class="price">
                    <h1>수량</h1>
                    <div class="row">
                        {{ cnt }}
                        <div class="btnBox">
                            <button @click="increaseCnt" title="클릭하면 수량을 더할 수 있어요">+</button>
                            <button @click="decreaseCnt" title="클릭하면 수량을 뺄 수 있어요">-</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line"></div>
            <div class="btn-container">
                <button v-if="isshow" @click="check(dynamicProps.productId)" title='클릭하면 이 상품을 찜목록에 넣어요.'>♡</button>
                <button v-else @click="unliked(dynamicProps.productId)" class="red" title='클릭하면 이 상품을 찜목록에서 빼요'>♥</button>
                <button @click="addCart()" title='클릭하면 이 상품을 장바구니에 넣어요.'>장바구니</button>
                <button @click="pur()" title='클릭하면 이 상품을 바로 구매하러 갈 수 있어요.'>바로 구매</button>
            </div>
        </div>

    </div>
    <!-- <br> -->
</template>
<script setup>
import Swal from 'sweetalert2/src/sweetalert2.js'
import { ref, onMounted } from 'vue';
import { useHeartStore } from '../../stores/mylist';
import { useProductStore } from '@/stores/product';
import { useCartStore } from '@/stores/cart';
import { useRouter } from 'vue-router';
const cnt = ref(0);
const isshow = ref(true);
const pstore = useProductStore();
const cstore = useCartStore();
const store = useHeartStore();

const router = useRouter();

onMounted(() => {
    for (let i = 0; i < store.heartList.length; i++) {
        if (pstore.product.productId == store.heartList[i].productId) {
            isshow.value = false;
        }
    }
})



///구매
function pur() {
    if (cnt.value == 0) {
        Swal.fire({
            icon: "error",
            title: "수량은 필수입니다.",
            text: "수량을 정해주세요!",
            confirmButtonColor: 'rgb(74,199,213)',
        });
        return;
    }
    let myObject = pstore.product;
    let quentity = cnt.value;
    cnt.value = 0;
    myObject = { ...myObject, quentity };
    cstore.addCart(myObject);
    router.push({ name: 'order' });

}

//////장바구니///////
function addCart() {
    if (cnt.value == 0) {
        Swal.fire({
            icon: "error",
            title: "수량은 필수입니다.",
            text: "수량을 정해주세요!",
            confirmButtonColor: 'rgb(74,199,213)',
        });
        return;
    }
    let myObject = pstore.product;
    let quentity = cnt.value;
    cnt.value = 0;
    myObject = { ...myObject, quentity };
    cstore.addCart(myObject);
}

/////////찜////////////

const check = (p) => {
    if (sessionStorage.getItem('token') ?? false) {
        heart(p);
    } else {
        Swal.fire({
            icon: "error",
            title: "로그인이 필요한 기능입니다.",
            text: "로그인 하시고 이용해주세요!",
            confirmButtonColor: 'rgb(74,199,213)',
        });
    }
}

function heart(p) {
    let h = {
        "heartId": 0,
        "productId": p,
        "userId": localStorage.getItem('User')
    }
    const num = ref();
    for (let i in store.heartList) {
        if (i.userId == localStorage.getItem('User') && i.productId == p) {
            num.value = i.heartId;
            isshow.value = false;
            return;
        }
    }
    isshow.value = false;
    store.heartProduct(h);
    store.getFavList();
}

function unliked(p) {
    const num = ref();
    for (let a = 0; a < store.heartList.length; a++) {
        if (store.heartList[a].userId === localStorage.getItem('User') && store.heartList[a].productId === p) {
            num.value = store.heartList[a].heartId;
            break;
        }
    }
    if (num.value) {
        store.removeHeart(num.value);
        store.getFavList();
        isshow.value = true;
    }
}

//////////////////////



//수량 카운트

function increaseCnt() {
    if (cnt.value != 100) {
        cnt.value++;
    }
}

function decreaseCnt() {
    if (cnt.value != 0) {
        cnt.value--;
    }
}

const props = defineProps({
    dynamicProps: Object,
})

function joinprice(p) {
    if (p ?? null)
        return p.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

////////////////////////

</script>

<style scoped>
/* 찜버튼 빨갛게 */
.red {
    color: red;
}

.option-box {
    margin: 2em;
}

.line {
    /* width: 100% - 2em; */
    margin: 0 2em;
    height: 2px;
    background-color: rgb(7, 29, 61);
}

.content-container {
    display: flex;
    padding: 2em;
    /* background-color: red; */
    gap: 2em;
}

.hr-solid {
    border: 0px;
    border-top: 5px solid #663399;
}

/* 이미지 박스 */
.content-img {
    width: 100%;
    border-radius: 10px;
    height: 600px;
    background-color: #e7e7e7;
    /* background-image: url('https://d29trs2nbedcfj.cloudfront.net/erp/shop/b096259a-3ed4-43e3-9adf-e979f1abc19c20230905.jpg'); */
    background-size: cover;
    background-position: 50% 50%;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}

.content-img:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    transform: scale3d(1.01, 1.01, 1.01);
}


/* 내용 박스 */

.content-info-container {
    width: 80%;
    border-radius: 10px;
    height: 600px;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
    display: flex;
    flex-direction: column;
}

.pTitle {
    font-size: 28px;
    font-weight: 600;
    margin-top: auto;
}

.pPrice {
    font-size: 24px;
    font-weight: 400;

}

.price {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.content-price-container {
    margin: 2em;
    display: flex;
    flex-direction: column;
    gap: 2em;
}

/* 버튼박스 */

.btn-container {
    margin: 2em;
    display: flex;
    gap: 1em;
}

.btn-container * {
    white-space: nowrap;
    border: none;
    width: 100%;
    background-color: transparent;
    border-radius: 10px;
    padding: 1em;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
    cursor: pointer;
}

.row {
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
}

.btn-container *:active {
    background-color: gray;
}

.btnBox {
    display: flex;
    gap: 1em;

}

.btnBox button {
    border: none;
    background-color: transparent;
    border-radius: 10px;
    padding: 1em;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
    cursor: pointer;
}

/* 라인 */

.blackline {
    background-color: black;
    height: 2px;

}</style>