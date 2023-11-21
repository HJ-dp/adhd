<template>
    <div class="review-list-container">
        <h1>상품 리뷰</h1>
        <div v-if="dynamicProps.length==0">작성된 리뷰가 없습니다.</div>
        <ReviewColumn v-for="i in dynamicProps" :dynamic-props="i" :key="i.reviewId"/>
    </div>
</template>

<script setup>
import { useReviewStore } from '@/stores/review';
import ReviewColumn from './ReviewCol.vue'

const store = useReviewStore();

defineProps({
    dynamicProps: Object,
})

</script>

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
}

.review-list-container h1 {
    margin: 1em;
    font-size:17px;
}
</style>