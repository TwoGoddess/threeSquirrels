<template>
    <div>
	    <div class="container">
	    	<!-- 导航 -->
	    	<my-nav :list = 'lists'></my-nav>
	    	<!-- 限时抢购 -->
	  		<ul class = "time-ul">
	  			<li v-for ='(item,index) in times' class = "time-li" :class="{'myimg':index==0 || index==3 ,'myimg1':index ==1 || index ==2}">
	  				<img :src="item.pic">
	  			</li>
	  		</ul>	
	  		<!-- 今日爆款  -->
	  		<ul class = 'today-ul'>
	  			<li v-for ='item in today' class='today-li'>
	  				<img :src="item.pic" alt="">
	  			</li>
	  		</ul>
	  		<!-- 特价专场 -->
	  		<div class = 'green'><span>特价专场</span></div>
	  		<div class = "swiper">
	  			
	  		</div>
	  		<div class = 'limit'>
	  			
	  		</div>
	  		<div class = 'green1'><span>本周卖得最好的10款零食</span></div>
	  		<div class = "bot">
	  			
	  		</div>
	    </div>
    </div>
</template>

<script>
import myNav from '../components/Nav'
export default{
	data(){
		return {
			lists:[],
			times:[],
			today:[]
		}
	},
	methods:{
		//获取数据的
		getData:function(){
			// var _this = this ;
			this.axios.get('../../../static/data/home/home.json').then((res)=>{
				//console.log(res.data.data.channels);导航的数据
				this.lists = res.data.data.channels;
				this.times = res.data.data.recommendChannel.middleAdvs;
				//console.log(res.data.data.recommendChannel);
				this.today = res.data.data.recommendChannel.recommendAdvs;
			})
		}
	},
	created(){
		this.getData();
	},
	components:{
		myNav
	}
}
</script>

<style>
.container{
	background-color: #F9F9F9;
}
.time-li{
	float: left;
	height:5.833333rem;
	width: 25%;	
}
.myimg{
	width: 7.5rem;
}
.myimg1{
	width: 5.833333rem;
}
.time-li img{
	width: 100%;
}
.time-ul{
	overflow:hidden; 
	margin:0.416667rem 0 0.416667rem 0;
}
.today-ul{
	overflow:hidden; 
}
.today-li{
	float:left;
	height: 11.25rem;
	width:32.8%;
}
.today-li:nth-child(2){
	margin:0 0.166667rem 0 0.166667rem;
}
.today-li img{
	width: 100%;
}
.green,.green1{
	height: 2.666667rem;
	line-height: 2.666667rem;
}
.green:before{
	position: absolute;
    top:22.2rem;
    left: 0;
    z-index: 1;
    width: 12px;
    height: 10px;
    background-color: #77bc1f;
    content: ' ';
}
.green1:before{
	position: absolute;
    top:51.1rem;
    left: 0;
    z-index: 1;
    width: 12px;
    height: 10px;
    background-color: #77bc1f;
    content: ' ';
}
.green span,.green1 span{
	padding-left: 1.5rem;
}
.swiper{
	height: 15.0rem;
	background-color: white;
}
.limit{
	height:10.833333rem;
	background-color: white;
	margin-top: 0.416667rem;
}
.bot{
	height: 16.666667rem;
	background-color: white;
}
</style>