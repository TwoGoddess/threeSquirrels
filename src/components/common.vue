<template>
	<div>	
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
	export default {
		props:['floorsLeft','floorsRight']
	}
</script>
<style>
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
		background: url(../../static/img/greenCart.png) no-repeat; 
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