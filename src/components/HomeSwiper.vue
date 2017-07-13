<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="slide in SwiperImg" :key="slide.id">
            <img :src="slide.pic">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper> 
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    props:['SwiperImg'],
    data(){
        return {
            swiperSmall: {
                autoplay: 3500,
                setWrapperSize :true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                mousewheelControl : true,
                observeParents:true,
            },
        }
    },
    created(){
        console.log(SwiperImg)
    }
}
</script>

<style lang="less">

</style>
