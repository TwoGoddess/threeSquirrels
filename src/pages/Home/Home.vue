<template>
    <div>
		<swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
                <img :src="slide.pic">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
		<my-nav :list = 'lists'></my-nav>
		<div class="xianshi-qianggou">
			<div class="xianshi-qianggou-box">
				<div class="xianshi-qianggou-box-type" v-for="item in type">
					<img :src="item.pic" alt="">
					<p>{{item.name}}</p>
				</div>
			</div>
		</div>
		<div class="jinri-baokuan">
			<div class="jinri-bokuan-box-type" v-for="item in jiriBaokuan">
				<img :src="item.pic" alt="">
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
	            <swiper-slide id="swiperSmall-slide" v-for="slide in swiperToSmall" :key="slide.id">
	                <img :src="slide.pic" id="swiperSmall">
		            <div class="textInfo">
			            <p>{{slide.name}}</p>
			            <p id="salesPrice">
			            	<span id="salesPrice-color">{{slide.salesPrice}}</span>
			            	<span id="marketPrice-color">{{slide.marketPrice}}</span>
			            </p>
		            </div>
	            </swiper-slide>
	            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
	        </swiper>
		</div>
		<div class="thisWeekBest">
			<div class="tejia-zhuanchang">
				<div class="tejia-zhuanchang-text"><span></span>本周卖得最好的10款零食</div>
			</div>
			<div class="thisWeekLists" v-for="item in promotions">
				<img :src="item.pic" alt="">
			</div>
		</div>
		<div class="bianji-jingxuan">
			<div class="tejia-zhuanchang">
				<div class="tejia-zhuanchang-text"><span></span>编辑精选<div id="more">更多&nbsp;&gt;</div></div>
			</div>
			<div class="bianji-jingxuan-box" v-for="item in articles">
				<div class="bianji-jingxuanImg">
					<img :src="item.pic" alt="">
				</div>
				<div class="bianji-jingxuanInfo">
					<span class="bianji-jingxuanInfoLeft">{{item.title}}</span>
					<span class="bianji-jingxuanInfoRight">阅读数  {{item.viewCount}}</span>
				</div>
				<div class="bianji-jingxuanBottom">{{item.content}}</div>
			</div>			
		</div>
		<div class="floorlists">
			<div class="tejia-zhuanchang">
				<div class="tejia-zhuanchang-text"><span></span>昨日卖的最好的20款商品</div>
			</div>
			<div class="floorlists-box">
				<div class="floorlists-boxLeft">
					<div class="floorlists-boxLeft-goods" v-for="item in floorsLeft">
						<div class="floorlists-boxLeft-goodsImg">
							<img :src="item.pic" alt="">
							<img :src="item.tags[0].pic" alt="" id="huodongLeft">
						</div>
						<p class="floorlists-boxLeft-goods-p1">{{item.alias}}</p>
						<p class="floorlists-boxLeft-goods-p2">{{item.name}}</p>
						<p class="floorlists-boxLeft-goods-p3">
							<span class="floorlists-boxLeft-goods-p3-span1">{{item.marketPrice}}</span>
							<span class="floorlists-boxLeft-goods-p3-span2">{{item.salesPrice}}</span>
							<span class="floorlists-boxLeft-goods-p3-span3"></span>
						</p>
					</div>
				</div>
				<div class="floorlists-boxRight">
					<div class="floorlists-boxRight-goods" v-for="item in floorsRight">
						<div class="floorlists-boxRight-goodsImg">
							<img :src="item.pic" alt="">
							<img :src="item.tags[0].pic" alt="" id="huodongRight">
						</div>
						<p class="floorlists-boxRight-goods-p1">{{item.alias}}</p>
						<p class="floorlists-boxRight-goods-p2">{{item.name}}</p>
						<p class="floorlists-boxRight-goods-p3">
							<span class="floorlists-boxRight-goods-p3-span1">{{item.marketPrice}}</span>
							<span class="floorlists-boxRight-goods-p3-span2">{{item.salesPrice}}</span>
							<span class="floorlists-boxRight-goods-p3-span3"></span>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import axios from 'axios'
	import myNav from '../components/Nav'
	import SwiperCover from '../../components/SwiperCover'
	export default{
		data () {
			return {
				lists: [],
				type: [],
				jiriBaokuan: [],
				wurouBuhuan: [],
				promotions: [],
				articles: [],
				floorsLeft: [],
				floorsRight: [],
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
            	},
            	swiperToSmall: [1, 2, 3, 4]			
			}
		},
		methods: {
			getData: function(){
				var $this = this;
				axios.get('../../../static/data/data.json').then(function (res) {
					console.log(res.data.data);
					$this.lists = res.data.data.channels;
					$this.type = res.data.data.recommendChannel.middleAdvs;
					$this.jiriBaokuan = res.data.data.recommendChannel.recommendAdvs;
					$this.swiperSlides = res.data.data.carousel;
					$this.wurouBuhuan = res.data.data.recommendChannel.recommendActivitys.items;
					$this.swiperToSmall = res.data.data.recommendChannel.flashSale.products;
					$this.promotions = res.data.data.recommendChannel.promotions;
					$this.articles = res.data.data.recommendChannel.articles;
					$this.floorsLeft = res.data.data.recommendChannel.floors[0].products.slice(0, 10);
					$this.floorsRight = res.data.data.recommendChannel.floors[0].products.slice(10, 20);
				})
			}
		},
		created () {
			this.getData();
		},
		components:{
	        swiper,
			swiperSlide,
			myNav,
			SwiperCover
    	}
	}
</script>

<style>
	html{
		height: 100%;
		background-color: #f9f9f9;
		overflow-y: scroll;
	}
	.swiper-slide{
		display: flex;
		width: 100%;
		height: 16.666667rem;
	}
	.swiper-slide img{
		width: 100%;
		height: 16.666667rem;
	}
	img{
	  -webkit-transition: all 2s;
	  -o-transition: all 2s;
	  transition: all 2s;
	}
	img[lazy=loading] {
	  opacity: 0;
	}
	img[lazy=error] {
	  
	}
	img[lazy=loaded] {
	  opacity: 1;
	}
	ol{
		line-height: 0;
    	white-space: nowrap;
        margin: 0;
	    padding: 0;
	    border: 0;
	    vertical-align: baseline;
	    font: inherit;
	    font-size: 100%;
	    background-color: white;
	    overflow-x: auto;
	    overflow-y: hidden;
	}
	ol li{
	    background: center left/0.083333rem 0.833333rem no-repeat linear-gradient(90deg,#ddd,#ddd 50%,transparent 50%);
	    -webkit-box-flex: 1;
	    flex-grow: 1;
	    flex-shrink: 1;
	    flex-basis: auto;
	    position: relative;
	    display: inline-block;
	    padding: 0 0.75rem;
	    line-height: 3.333333rem;
	    height: 3.333333rem;
	    font-size: 1.0rem;
	    text-align: center;
	    white-space: nowrap;       
	}
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
		 background-image: url(../../../static/img/xianshi-zhuanxiang.png); 
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
	     background-image: url(../../../static/img/miaosha.png); 
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
	#swiperSmall-slide{
		height: 9.5rem;
		background: url(../../../static/img/greenCart.png) no-repeat 8rem 7rem; 
		background-size: 2.0rem auto;
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
	.floorlists-box{
		width: 100%;
		height: 100%;
	}
	.floorlists-boxLeft{
	    float: left;
    	padding-bottom: 4.083333rem;
    	width: 50%;
	}
	.floorlists-boxRight{
		float: right;
    	width: 50%;
    	padding-bottom: 4.083333rem;
	}
	.floorlists-boxLeft-goods,.floorlists-boxRight-goods{
		width: 13.083333rem;
    	height: 18.333333rem;
    	padding: 0;
	    margin: 0 0 0.5rem;
	    border: none;
	    background-color: #f9f9f9;
	}
	.floorlists-boxLeft-goodsImg,.floorlists-boxRight-goodsImg{
		margin-bottom: 0.416667rem;
	    position: relative;
	    width: 100%;
	    height: 13.083333rem;
	    overflow: hidden;
	}
	.floorlists-boxLeft-goodsImg img,.floorlists-boxRight-goodsImg img{
		width: 13.083333rem;
		height: 13.083333rem;
	}
	.floorlists-boxLeft-goods-p1,.floorlists-boxRight-goods-p1{
	    font-size: 1.0rem;	
		overflow: hidden;
	    padding: 0 0.666667rem;
	    margin: 0;
	    height: 1.5em;
	    line-height: 1.5em;
	    color: #000;
	}
	.floorlists-boxLeft-goods-p2,.floorlists-boxRight-goods-p2{
	    white-space: normal;
    	overflow: hidden;	
		height: 1.5em;
	    line-height: 1.5em;
	    font-size: .5625rem;
	    color: #777;
	    padding: 0 0.666667rem;    
	}
	.floorlists-boxLeft-goods-p3,.floorlists-boxRight-goods-p3{
	    font-size: 1.083333rem;	
		position: relative;
	    margin-bottom: 0;
	    padding: 0 0.666667rem;
	    line-height: 1.5em;
	    color: #ee2e52;
	    overflow: visible;
	}
	.floorlists-boxLeft-goods-p3-span1,.floorlists-boxRight-goods-p3-span1{
	    margin-right: 0.333333rem;
    	vertical-align: baseline;
    	color: #ee2e52;
	}
	.floorlists-boxLeft-goods-p3-span2,.floorlists-boxRight-goods-p3-span2{
		position: relative;
	    color: #999;
	    font-size: .5rem;
        margin-right: 0.333333rem;
    	vertical-align: baseline;
	}
	.floorlists-boxLeft-goods-p3-span3,.floorlists-boxRight-goods-p3-span3{
		background: url(../../../static/img/greenCart.png) no-repeat; 
		background-size: 2.0rem auto;
		position: absolute;
	    right: 0.666667rem;
	    top: 50%;
	    margin-top: -1.0rem;
	    padding: 0;
	    width: 2.0rem;
	    height: 2.0rem;
	    min-width: 2.0rem;
	    min-height: 2.0rem;
	    border: none;
	}
	#huodongLeft,#huodongRight{
		position: absolute;
		top: 0;
		left: 0;
		width: 3.270833rem;
		height: auto;
	}
</style>
