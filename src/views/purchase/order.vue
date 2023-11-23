<template>
    <div class="pur-container">
            <cart class="cartt"/>
            <toss/>
        </div>
</template>

<script setup>
import cart from '../../components/cart/cartcart.vue'
import toss from './purchase.vue'

</script>

<style scoped>
.pur-container{
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    gap: 2rem;
    padding-top:400px;
}

.hello{
    /* margin : 100px; */
    width: 90%;
    border-radius: 10px;
    padding:2em;
    justify-content: space-between;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}
</style>