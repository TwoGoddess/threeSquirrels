<template>
    <div>
		<swiper :options="swiperOption">
            <swiper-slide v-for="slide in swiperSlides" :key="slide.id">
                <img :src="slide.pic">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
		<home-swiper :SwiperImg="SwiperImg"></home-swiper>
		<my-nav :list = 'lists' @getId="getId"></my-nav>
		 <differ-list :type='type' :jiriBaokuan='jiriBaokuan' :wurouBuhuan ='wurouBuhuan' :promotions ='promotions' :articles ='articles' :swiperToSmall='swiperToSmall'>
			
		</differ-list>  
		<floor-list v-for="(items, index) in goodList" :goodList = 'items' :key='index'></floor-list>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import axios from 'axios'
	import myNav from '../../components/Nav'
	import floorList from './GoodsList'
	import HomeSwiper from '../../components/HomeSwiper'
	import differList from '../../components/differ'
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
            	// swiperSmall: {
	            //     autoplay: 3500,
	            //     setWrapperSize :true,
	            //     pagination : '.swiper-pagination',
	            //     paginationClickable :true,
	            //     mousewheelControl : true,
	            //     observeParents:true,
            	// },
            	swiperToSmall: [1, 2, 3, 4],
				goodList:{},
				SwiperImg:{}
			}
		},
		methods: {
			getData: function(){
				var $this = this;
				this.axios.get('../../../static/data/data.json').then(function (res) {
					// console.log(res.data.data);
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
			},
			getNewData(){
				axios.get('../../static/data/home/home.json')
				.then((res)=>{
					console.log(res.data.data.carousel)
					this.SwiperImg = res.data.data.carousel
				})
			},
			getId:function(id){
				console.log(id);
				axios.get('../../static/data/home/'+id+'.json')
				.then((res)=>{
					this.goodList = res.data.data.floors;
				})
			}
		},
		created () {
			this.getData();
			this.getNewData();
			this.getId(10003);
		},
		components:{
	        swiper,
			swiperSlide,
			myNav,
			floorList,
			differList,
			HomeSwiper
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
</style>
