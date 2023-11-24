<template>
    <div class="mine-container">
        <list v-if="Props.type == 1" :props="Props.type" :dynamic-props="store.ReviewList" />
        <list v-else :props="Props.type" :dynamic-props="pstore.QuestionList" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useReviewStore } from '../../stores/review';
import { useQuestionStore } from '../../stores/question';
import list from './Myreviews.vue'

const store = useReviewStore();
const pstore = useQuestionStore();
const Props = defineProps(['type']);

onMounted(async () => {
    await store.reviewListmine(localStorage.getItem('User'));
    await pstore.questionListmine(localStorage.getItem('User'));
})

</script>

<style scoped>
.mine-container {
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em;
}
</style>