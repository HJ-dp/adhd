<template>
    <div class="content-info-container">
        <p v-html="geturl(dynamicProps)"></p>
    </div>
</template>

<script setup>
const props = defineProps({
    dynamicProps: String,
})

const geturl = function (p){
    return `<img src="${p}" style="width:1200px" alt="">`
}

</script>

<style scoped>
    .content-info-container{
        width: 100%;
    }

</style>