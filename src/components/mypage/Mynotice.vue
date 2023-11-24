<template>
    <div class="notice-container">
        <List :dynamic-props="store.NoticeList" />
        <br>
        <EList :dynamic-props="store.EventList" />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useMNStore } from '@/stores/notice'
import List from '../notice/noticeList.vue'
import EList from '../event/noticeList.vue'
const store = useMNStore();

onMounted(() => {
    store.getNoticeList();
    store.getEventList();
})

</script>

<style scoped>
.notice-container {}
</style>