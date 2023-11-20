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
                    <div class="btnBox">
                        {{ cnt }}
                        <button @click="increaseCnt">+</button>
                        <button @click="decreaseCnt">-</button>
                    </div>

                    <!-- {{ totalPrice }} -->
                </div>
            </div>
            <div class="line"></div>
        </div>
    </div>
    <hr class='hr-solid'/>
    <br>
</template>
<script setup>
import { ref, computed } from 'vue';

const cnt = ref(0);


function increaseCnt() {
    if(cnt.value!= 100){
        cnt.value++;
    }
}

function decreaseCnt() {
    if(cnt.value!= 0){
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


</script>

<style scoped>

.option-box{
    margin: 2em;
}

.line{
    /* width: 100% - 2em; */
    margin: 0 2em;
    height: 2px;
    background-color: rgb(7,29,61);
}
.content-container {
    display: flex;
    padding: 2em;
    /* background-color: red; */
    gap: 2em;
}
.hr-solid {
  border : 0px;
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
    align-items: flex-end;
}

.content-price-container{
    margin: 2em;
    display: flex;
    flex-direction: column;
    gap:2em;
}

/* 라인 */

.blackline{
    background-color: black;
    height: 2px;
    
}

</style>