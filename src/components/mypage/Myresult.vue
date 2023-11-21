<template>
    <div class="mine-container">
        <list :props="Props.type" :dynamic-props="store.ReviewList"/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useReviewStore } from '../../stores/review';
import list from './Myreviews.vue'

const store = useReviewStore();

const Props = defineProps(['type']);

onMounted( async ()=>{
    await store.reviewListmine(localStorage.getItem('User'));
})

</script>

<style scoped>
.mine-container{
    width: 100%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:2em;
}
</style>