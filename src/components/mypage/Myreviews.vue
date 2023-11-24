<template>
    <div class="review-list-container">
        <h1 v-if="props == 1">내가 작성한 상품 리뷰</h1>
        <h1 v-else>내가 작성한 상품 문의</h1>
        <div v-if="dynamicProps.length == 0">작성한 글이 없습니다.</div>
        <div v-if="props == 1" class="full">
            <ReviewColumn v-for="i in dynamicProps" :dynamic-props="i" :key="i.reviewId" />
        </div>
        <QuestionColumn v-else v-for="i in dynamicProps" :dynamic-props="i" :key="i.reviewId" />
    </div>
</template>

<script setup>
import ReviewColumn from '../reviews/ReviewCol.vue'
import QuestionColumn from '../questions/QuestionCol.vue'

defineProps({
    dynamicProps: Object,
    props: Object
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
    border: 1px solid rgb(0, 0, 0, 0.2);
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
    font-size: 17px;
}

.full {
    width: 100%;
    max-width: 800px;
}
</style>