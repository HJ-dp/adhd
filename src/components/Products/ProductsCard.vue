<template>
    <div class="card-container">
        <div class="card-img"></div>
        <div class="card-info">
            <div class="card-info-badge" :class="{'hot':hot, 'new':isNew}"></div>
            <div class="card-info-title">타이틀</div>
            <div class="card-info-price">₩114,000{{  }}</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.card-container{
    width: 250px; 
    height: 400px;
    border-radius: 30px;
    padding: 1em;
    /* flex-shrink: 0;
    flex-grow: 0; */
    justify-content: space-between;
    transition: all .3s cubic-bezier(0, 0, .5, 1);
    box-shadow: 2px 4px 12px rgba(0, 0, 0, .08);
}
.card-container:hover {
    box-shadow: 2px 4px 16px rgba(0, 0, 0, .16);
    cursor: pointer;
    transform: scale3d(1.01, 1.01, 1.01);
}

/* 뱃지 */

.card-info-badge{
}
.hot {

}

/* 카드 */
.card-img{
    width:100%;
    border-radius: 10px;
    height: 325px;
    /* background-color: crimson; */
    background-image: url('https://d29trs2nbedcfj.cloudfront.net/erp/shop/b096259a-3ed4-43e3-9adf-e979f1abc19c20230905.jpg');
    background-size: cover;
    background-position: 50% 50%;
}
/* 정보 */

.card-info{
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end
}

.card-info-title{
    height: 100%;
    font-weight:600;
    font-size:17px;
}


.card-info-price{
    height: 100%;
    font-size:17px;
}

</style>