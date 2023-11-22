<template>
    <div class="List-container">
        {{ store.heartList }}
        <card v-for="i in store.heartList" :key="i.heartId"/>
    </div>
</template>

<script setup>
import list from '../Products/ProductsList.vue'
import card from '../Products/ProMyListCard.vue'
import { onMounted } from 'vue';
import { useHeartStore } from '../../stores/mylist';

const store = useHeartStore();

onMounted(()=>{
    // store.heartList
})

</script>

<style scoped>
.List-container{
    
}
</style>