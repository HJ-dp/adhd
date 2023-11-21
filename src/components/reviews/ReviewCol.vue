<template>
    <div class="review-container">
        <div>{{ dynamicProps.reviewTitle }}</div>
        <!-- <div>{{ dynamicProps.reviewContent }}</div> -->
    </div>
</template>

<script setup>
defineProps({
    dynamicProps : Object,
})
</script>

<style scoped>
  .review-container {
    width: 90%; 
    margin-top:1em;
    padding:1em;
    border-radius: 10px;
    border: 1px solid rgb(0,0,0,0.2);
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
  }

  .review-container:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
  }
</style>