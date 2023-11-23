<template>
    <iframe
    class="youtubeVideo"
    v-if="dynamicProps.id.videoId"
      width="400"
      height="250"
      :src="videoURL(dynamicProps.id.videoId)"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
</template>

<script setup>

defineProps({
    dynamicProps : Object,

})

const videoURL = function(amou){
    const videoId = amou
    return `https://www.youtube.com/embed/${videoId}`
}

</script>

<style scoped>
.youtubeVideo{
    margin: 30px;
}
</style>