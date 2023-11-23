<template>
    <div class="review-list-container">
        <h1>상품 리뷰</h1>
        <div v-if="dynamicProps.length==0">작성된 리뷰가 없습니다.</div>
        <ReviewColumn v-for="i in dynamicProps" :dynamic-props="i" :key="i.reviewId"/>
        <button @click="check" class="writebutton" title="클릭하면 이 상품에 대한 리뷰를 남길 수 있어요.">글쓰기</button>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useReviewStore } from '@/stores/review';
import Swal from 'sweetalert2/src/sweetalert2.js'
import ReviewColumn from './ReviewCol.vue'
const route = useRoute();
const store = useReviewStore();

defineProps({
    dynamicProps: Object,
})

const check = ()=>{
    if (sessionStorage.getItem('token') ?? false) {
        writed();
    } else {
        Swal.fire({
            icon: "error",
            title: "로그인이 필요한 기능입니다.",
            text: "로그인 하시고 이용해주세요!",
            confirmButtonColor: 'rgb(74,199,213)',
        });
    }
}

const writed = (async () => {
    const { value: formValues } = await Swal.fire({
        title: "리뷰 작성",
        html: `
    <div class="c">
      <label for="title">리뷰 제목</label>
      <input id="title" placeholder="제목을 입력해주세요" class="swal2-input">
    </div>
    <div class="c">
      <label for="content">리뷰 내용</label>
      <textarea Placeholder="내용을 입력해주세요" id="content" class="swal2-textarea"></textarea>
    </div>
    `,
        width: '800px',
        grow: 'row',
        focusConfirm: false,
        confirmButtonColor: 'rgb(74,199,213)',
        preConfirm: () => {
            if (!document.getElementById("title").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 문의 제목을 작성해주세요')
            } else if (!document.getElementById("content").value) {
                Swal.showValidationMessage('<i class="fa fa-info-circle"></i> 내용이 있어야져;')
            }
            return {
               reviewTitle :document.getElementById("title").value,
               reviewContent :document.getElementById("content").value,
               userId : localStorage.getItem("User"),
               productId : route.params.productId,
               reviewDelete : 'N',
               reviewStar : 0,
               type : 'R',
               reviewDate : '2023-11-20 00:00:00'
            };
        }
    });
    if (formValues) {
        store.writeReview(formValues);
    }
})

</script>

<style>
label {
    white-space: nowrap;
}

.c {
    display: flex;
    justify-content: center;
}

#swal2-container {
    display: flex;
    flex-direction: column;
}

.swal2-input,
.swal2-textarea {
    width: 70%;
}
</style>

<style scoped>
.review-list-container {
    width: 100%; 
    min-height: 200px;
    border-radius: 10px;
    border: 1px solid rgb(0,0,0,0.2);
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 2em;
}

.review-list-container h1 {
    margin: 1em;
    font-size:17px;
}

.writebutton {
    position: absolute;
    top: 15px;
    right: 15px;
    border: none;
    background-color: rgb(74, 199, 213);
    padding: 5px 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
}
</style>