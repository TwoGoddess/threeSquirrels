<template>
    <swiper :options="swiperOption"  ref="mySwiper">  
        <swiper-slide v-for="slide in SwiperImg" :key="slide.id">
            <img :src="slide.pic" :alt="slide.name">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>  
    </swiper> 
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    props:['SwiperImg'],
    components: {  
        swiper,
        swiperSlide
    },  
    data(){
        return {
            swiperOption: {  
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,  
                pagination: '.swiper-pagination',  
                slidesPerView: 'auto',  
                centeredSlides: true,  
                paginationClickable: true,  
                spaceBetween: 30,  
                onSlideChangeEnd: swiper => {  
                    //这个位置放swiper的回调方法  
                    this.page = swiper.realIndex+1;  
                    this.index = swiper.realIndex;  
                }
            }
        }
    }
}
</script>

<style lang="less">

</style>
