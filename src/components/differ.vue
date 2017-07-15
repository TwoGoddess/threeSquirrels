<template>
	<div>
		<div class="xianshi-qianggou">
			<div class="xianshi-qianggou-box">
				<div class="xianshi-qianggou-box-type" v-for="(item, index) in differData.middleAdvs" :key="index">
					<img v-lazy="item.pic" alt="">
					<p>{{item.name}}</p>
				</div>
			</div>
		</div>
		<div class="jinri-baokuan">
			<div class="jinri-bokuan-box-type" v-for="(item, index) in differData.recommendAdvs" :key="index">
				<img v-lazy="item.pic" alt="">
			</div>
		</div>
		<swiper-cover></swiper-cover>
		<div class="tejia-zhuanchang">
			<div class="tejia-zhuanchang-text"><span></span>特价专场</div>
		</div>
		
		<div class="xianshi-zhuanxiang">
			<div class="xianshi-zhuanxiang-info">
				<p class="miaosha">
					<span>秒杀</span>
				</p>
				<p class="timeinfo">距离秒杀结束</p>
				<div class="time">01:22:22</div>
			</div>
			<swiper :options="swiperSmall">
	            <swiper-slide id="swiperSmall-slide" v-for="slide in differData.flashSale.products" :key="slide.id">
	                <img v-lazy="slide.pic" id="swiperSmall">
		            <div class="textInfo">
			            <p>{{slide.name}}</p>
			            <p id="salesPrice">
			            	<span id="salesPrice-color">{{slide.salesPrice}}</span>
			            	<span id="marketPrice-color">{{slide.marketPrice}}</span>
			            </p>
		            </div>
			        <span class="btn" @click="addCart(slide)"></span>
	            </swiper-slide>
	        </swiper>
		</div>
		<div class="thisWeekBest">
			<div class="tejia-zhuanchang">
				<div class="tejia-zhuanchang-text"><span></span>本周卖得最好的10款零食</div>
			</div>
			<div class="thisWeekLists" v-for="(item, index) in differData.promotions" :key="index">
				<img v-lazy="item.pic" alt="">
			</div>
		</div>
		<div class="bianji-jingxuan">
			<div class="tejia-zhuanchang">
				<div class="tejia-zhuanchang-text"><span></span>编辑精选<div id="more">更多&nbsp;&gt;</div></div>
			</div>
			<div class="bianji-jingxuan-box" v-for="(item, index) in differData.articles" :key="index">
				<div class="bianji-jingxuanImg">
					<img v-lazy="item.pic" alt="">
				</div>
				<div class="bianji-jingxuanInfo">
					<span class="bianji-jingxuanInfoLeft">{{item.title}}</span>
					<span class="bianji-jingxuanInfoRight">阅读数  {{item.viewCount}}</span>
				</div>
				<div class="bianji-jingxuanBottom">{{item.content}}</div>
			</div>			
		</div>
	</div>
</template>
<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import SwiperCover from './SwiperCover'

	export default{
		props:['type','jiriBaokuan','swiperToSmall','promotions','differData','differData'],
		data(){
			return{
				swiperOption: {
	                autoplay: 3500,
	                setWrapperSize :true,
	                pagination : '.swiper-pagination',
	                paginationClickable :true,
	                mousewheelControl : true,
	                observeParents:true,
            	},
            	swiperSlides: [1, 2, 3, 4, 5],
            	swiperSmall: {
	                autoplay: 3500,
	                setWrapperSize :true,
	                pagination : '.swiper-pagination',
	                paginationClickable :true,
	                mousewheelControl : true,
	                observeParents:true,
            	}
			}
		},
		methods:{
        	addCart:function(slide){
	            //console.log(goods);
	            this.$store.dispatch('addCart',slide);

       		 }
    	},
		components:{
	        swiper,
			swiperSlide,
			SwiperCover
    	}
	}
</script>

<style>
	.xianshi-qianggou{
		height: 100%;
		width: 100%;
		    padding-top: 0.416667rem;
	}
	.xianshi-qianggou-box{
		overflow: hidden;
    	max-height: 8.75rem;
		margin: 0;
	    padding: 0;
	    border: 0;
	    vertical-align: baseline;
	    font: inherit;
	    font-size: 100%;
	}
	.xianshi-qianggou-box-type{
		float: left;
		height: 5.833333rem;
	}
	.xianshi-qianggou-box-type img{
		width: auto;
		height: 5.833333rem;
	}
	.jinri-baokuan{
		margin-top: 0.416667rem;
	    position: relative;
	    overflow: hidden;
	    /*max-height: 8.4375rem;	*/
	}
	.jinri-bokuan-box-type{
		float: left;
		width: 33.333%;
		height: 11.25rem;
	}
	.jinri-bokuan-box-type img{
		width: auto;
		height: 11.25rem;
	}
	.tejia-zhuanchang{
		margin-top: 0.416667rem;
	}
	.tejia-zhuanchang-text{
		box-sizing: content-box;
	    position: relative;
	    padding: 0.833333rem 0.833333rem 0.833333rem 1.5rem;
	    line-height: 1em;
	    height: 1em;
	    color: #262626;
	    font-size: 0.916667rem;
	}
	.tejia-zhuanchang-text span{
		position: absolute;
	    top: 50%;
	    left: 0;
	    z-index: 1;
	    margin-top: -0.416667rem;
	    width: 1.0rem;
	    height: 0.833333rem;
	    background-color: #77bc1f;
	    content: ' ';
	}
	.wurou-buhuan{
		overflow-x: auto;
		overflow-y: hidden;
		box-sizing: content-box;
	    height: 13.333333rem;
	    padding: 0.416667rem 0 1.25rem;
	    background-color: #fff;
	}
	.wurou-buhuan-img{
		width: 100%;
	    height: 100%;
	    padding: 0;
	    overflow: visible!important;
	    margin: 0 auto;
	    position: relative;
	    z-index: 1
	}
	.wurou-buhuan-img-box{
		transform: translate3d(-15.443667remx, 0px, 0px);
    	transition-duration: 0ms;
    	transform-style: preserve-3d;
    	position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    padding: 0;
        transition-property: transform;
   	 	box-sizing: content-box;
        display: flex;
	}
	.wurou-buhuan-img-box-content{
		width: 230.216px;
	    transform: translate3d(-0.0375px, 0px, -0.234375px) rotateX(0deg) rotateY(0deg);
	    z-index: 1;
	    transition-duration: 0ms;
        position: relative;
   		background-color: #f9f9f9;
        transform-style: preserve-3d;
        height: 100%;
    	box-sizing: border-box;
        flex-shrink: 0;
        display: block;
	}
	.wurou-buhuan-img-box-content img{
		height: 13.333333rem;
		width: 19.18rem;
		margin: 0;
	    padding: 0;
	    border: 0;
	    vertical-align: baseline;
	    font: inherit;
	    font-size: 100%;
	}
	.bannerInfo{
		opacity: 1;
		position: absolute;
	    left: 50%;
	    bottom: -0.833333rem;
	    margin-left: -35%;
	    width: 70%;
	    height: 1.7em;
	    line-height: 1.7em;
	    text-align: center;
	    background-color: #fff;
	    border-radius: 0.833333rem;
	    box-shadow: 0 0.083333rem 0.083333rem 0.083333rem #ddd;
	    transition: opacity .3s;
	}
	.xianshi-zhuanxiang{
		height: 10.833333rem;
		margin-top: 0.416667rem;
		 background-image: url(../../static/img/xianshi-zhuanxiang.png); 
	    background-position: 0.416667rem 0.416667rem;
	    background-repeat: no-repeat;
	    background-size: 4rem auto;
	    background-color: #fff;    
	}
	.xianshi-zhuanxiang-info{
		width: 15.0rem;
	    padding-top: 2.375rem;
	    text-align: center;
	    color: #262626;
	    float: left;
	}
	.miaosha{
		width: 15.0rem;
		line-height: 1.5em;
    	color: #ee2e52;
    	font-size: 1.083333rem;
	}
	.xianshi-zhuanxiang-info p span{
		width: 3.833333rem;
		height: 1.583333rem;
		display: inline-block;
	    padding-left: 10px;
	    padding-top: 0.416667rem;
	     background-image: url(../../static/img/miaosha.png); 
	    background-size: 19px auto;
	    background-position: left center;
	    background-repeat: no-repeat;
	}
	.timeinfo{
		width: 15.0rem;
		line-height: 2em;
		color: #262626;
	}
	.time{
		width: 15.0rem;
		line-height: 1.2em;
    	font-weight: 700;
    	font-size: 17px;
	}
	div .swiper-container{
		width:auto;
	}
	#swiperSmall-slide{
		height: 9.5rem;
		background: url(../../static/img/greenCart.png) no-repeat 9.2rem 7.2rem;
		background-size: 2.0rem auto;
	}
	.btn{
		width: 3.0rem;
		height: 3.0rem;
		position: absolute;
		bottom: 0;
		right: 0;
	}
	#swiperSmall{
		display: block;
	    width: 6.25rem;
	    height: 6.25rem;
	    margin: 0 0.5rem 0.5rem 0.5rem;
	}
	.textInfo{
		position: absolute;
		left: 0;
		top: 6.25rem;
		display: block;
		line-height: 1.5rem;
		height: 1.5rem;
	}
	#salesPrice-color{
		color: red;
		padding-right: 0.5rem;
	}
	#marketPrice-color{
		color: black;
		text-decoration: line-through;
	}
	.thisWeekBest{
		margin-top: 0.416667rem;
	}
	.tejia-zhuanchang{
		margin-top: 0.416667rem;
	}
	.tejia-zhuanchang-text{
		box-sizing: content-box;
	    position: relative;
	    padding: 0.833333rem 0.833333rem 0.833333rem 1.5rem;
	    line-height: 1em;
	    height: 1em;
	    color: #262626;
	    font-size: 0.916667rem;
	}
	.tejia-zhuanchang-text span{
		position: absolute;
	    top: 50%;
	    left: 0;
	    z-index: 1;
	    margin-top: -0.416667rem;
	    width: 1.0rem;
	    height: 0.833333rem;
	    background-color: #77bc1f;
	    content: ' ';
	}
	.thisWeekLists{
		width: 100%;
		height: 8.333333rem;
	}
	.thisWeekLists img{
		height: 8.333333rem;
	}
	.bianji-jingxuan{
		margin-top: 0.416667rem;
	}
	#more{
		display: inline-block;
		float: right;
	}
	.bianji-jingxuan-box{
		width: 100%;
		height: 21.958333rem;
		padding-bottom: 0.416667rem;
    	background-color: #fff;
	}
	.bianji-jingxuanImg{
		position: relative;
	    width: 100%;
	    height: 16.25rem;
	}
	.bianji-jingxuanImg img{
		width: 100%;
	    height: 16.25rem;
	}
	.bianji-jingxuanInfo{
		padding: 0 0.666667rem;
	    line-height: 1.875em;
	    height: 1.875em;
	    margin-top: 0.416667rem;
	    font-size: 0.916667rem;
	}
	.bianji-jingxuanInfoLeft{
		float: left;
		max-width: 70%;
	    color: #595959;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.bianji-jingxuanInfoRight{
		float: right;
	    font-size: .5rem;
	    color: #999;
	    white-space: nowrap;
	}
	.bianji-jingxuanBottom{
		max-height: 4.4em;
	    line-height: 1.5em;
	    font-size: .5625rem;
	    color: #999;
        padding: 0 8px;
	    box-sizing: content-box;
	    overflow: hidden;
	}
</style>