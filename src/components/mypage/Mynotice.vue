<template>
    <div class="notice-container">
        <List :dynamic-props="store.NoticeList"/>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMNStore } from '@/stores/notice'
import List from '../notice/noticeList.vue'
const store = useMNStore();

onMounted(()=>{
    store.getNoticeList();
})

</script>

<style scoped>
.notice-container{
    
}
</style>