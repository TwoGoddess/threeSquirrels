<template>
    <div>
		<home-swiper :SwiperImg="SwiperImg"></home-swiper>
		<my-nav :list= 'navList' :navpo = 'navpo' @getId="getId"></my-nav>
		<differ-list  v-if="differData" :differData="differData">
		</differ-list> 
		<floor-list :goodList = 'goodList'>
		</floor-list>
	</div>
</template>
<script>
	import axios from 'axios'
	import myNav from '../../components/Nav'
	import floorList from './GoodsList'
	import HomeSwiper from '../../components/HomeSwiper'
	import differList from '../../components/differ'
	export default{
		data () {
			return {
				goodList: {},
				SwiperImg: {},
				navList: {},
				differData: {},
				navpo: false
			}
		},
		methods: {
			getNewData(){
				axios.get('../../static/data/home/home.json')
				.then((res)=>{
					this.SwiperImg = res.data.data.carousel;
					this.navList = res.data.data.channels;
				})
			},
			getId:function(id){
				axios.get('../../static/data/home/'+id+'.json')
				.then((res)=>{
					this.goodList = res.data.data;
					this.differData = res.data.data.recommendChannel;
				})
			},
			nav:function()	{
				// 页面卷起来的高度
				if(document.body.scrollTop >= 168){		
					this.navpo = true;
					//console.log(this.navpo);
					return this.navpo;
				}
				if(document.body.scrollTop < 168){
					this.navpo = false;
					return this.navpo;
				}
			}
		},
		created () {
			this.getNewData();
			this.getId(10003);
		},
		components:{
			myNav,
			floorList,
			differList,
			HomeSwiper
    	},
    	mounted(){
			// 监听滚动条事件
		    window.addEventListener('scroll', this.nav)
		    
		},
	}
</script>

<style>
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
