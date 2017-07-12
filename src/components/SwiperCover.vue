<template>  
    <swiper :options="swiperOption"  ref="mySwiper" id="SwiperCover">  
        <!-- 这部分放你要渲染的那些内容 -->  
        <swiper-slide>
            <img src="http://pic10.cdn.3songshu.com:81//assets/upload/adv/49da2bebe0471772283d199207ee9757.jpg"/>
        </swiper-slide>
        <swiper-slide>
            <img src="http://pic10.cdn.3songshu.com:81//assets/upload/adv/506c29051d7e24228f49de6a3381fa5b.jpg"/>
        </swiper-slide>
    </swiper>  
</template>  
<script>  
    import { swiper } from 'vue-awesome-swiper'  
    export default {  
        components: {  
            swiper,  
        },  
        data() {  
            return {
                swiperOption: {  
                    //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                    notNextTick: true,  
                    pagination: '.swiper-pagination',  
                    effect: 'coverflow',
                    grabCursor: true,
                    centeredSlides: true,
                    slidesPerView: "1.3",
                    coverflow: {
                        rotate: 0,
                        stretch: -70,
                        depth: 400,
                        modifier: 1,
                        slideShadows : false
                    }
                }  
            }  
        }
    }  
</script>  
<style lang="less">
    #SwiperCover{
        .swiper-container{
            height: 10rem;
            width: 100%;
            img{
                width:100%;
                height: 10rem;
            }
        }
    }
</style>  