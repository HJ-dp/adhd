<template>
    <div class="detail-container">
        <content :dynamic-props="store.product"/>
        <info :dynamic-props="store.product?.productInfoImg"/>
        <div class="review_question">
        <reviewbox :dynamic-props="rstore.ReviewList"/>
        <QNA :dynamic-props="qstore.QuestionList"/>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useQuestionStore } from '@/stores/question';
import { useProductStore } from '@/stores/product';
import { useReviewStore } from '@/stores/review';
import { useHeartStore } from '../../stores/mylist';
import { useRoute } from 'vue-router';
import content from './ProductsContent.vue';
import info from './ProductsInfo.vue';
import reviewbox from '../reviews/ReviewList.vue'
import QNA from '../questions/QuestionList.vue'

const qstore = useQuestionStore();
const hstore = useHeartStore();
const store = useProductStore();
const rstore = useReviewStore();
const route = useRoute();
const props = defineProps({
    id : String,
});

onMounted( async ()=>{
    await store.getProduct(route.params.productId);
    await rstore.getReviewList(route.params.productId);
    await qstore.getQuestionList(route.params.productId);
    await hstore.getFavList();
})
onUnmounted(()=>{
    store.removeProduct();
    rstore.removeReviewList();
    qstore.removeQuestionList();
})

</script>

<style scoped>
.detail-container{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap:2em;
}
.card-img{
    width:100%;
    border-radius: 10px;
    height: 325px;
    background-color: #e7e7e7;
    /* background-image: url('https://d29trs2nbedcfj.cloudfront.net/erp/shop/b096259a-3ed4-43e3-9adf-e979f1abc19c20230905.jpg'); */
    background-size: cover;
    background-position: 50% 50%;
}

.review_question {
    display: flex;
    gap:2em;
}

@media (max-width: 768px) {
    .review_question {
    flex-direction: column;
}
}

</style>