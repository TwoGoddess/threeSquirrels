<template>
	<div class="wode-dingdan">
		<header>
			<div class="leftJiao"><router-link to="/mine"><</router-link></div>
			<div class="centerText">我的订单</div>
		</header>
		<div class="content">
			<div class="nav">
				<div class="navlist" 
					v-for="(item, index) in list" 
					:class="{active:activeIndex == index}" 
					@click="changeStyle(index)">{{ item }}			
				</div>
			</div>
			<div class="centerImg">
				<div class="emptyImg"></div>
				<div class="emptyText">主人，啥都没有，下个单吧~</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				list: ['全部', '待付款', '待发货', '待收货', '待评价'],	
				activeIndex: 3
			}
		},
		methods: {
			changeStyle (index) {
				this.activeIndex = index;
			}
		}
	}
</script>

<style>
	.wode-dingdan{
		background: #f9f9f9;
		z-index: 101;
	}
	header{
		background-color: white;
		padding: 0.416667rem 0.833333rem;
	}
	.leftJiao{
		font-size: 2.0rem;
		display: inline-block;
		color: #999;
	}
	.centerText{
		text-align: center;
		display: inline-block;
		font-size: 1.416667rem;
		position: absolute;
		top: 0.833333rem;
		left: 39%;
	}
	.content{
		position: absolute;
	    top: 3.416667rem;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    overflow: hidden;
	    margin-top: -1px;
	    padding-top: 1px;
	    margin-bottom: -1px;
	    width: auto;
	    height: auto;
	}
	.nav{
		border-top: 1px solid #e4e4e4;
		width: 100%;
		line-height: 3.333333rem;
		height: 3.333333rem;
		display: flex;
		background-color: white;
	}
	.navlist{
		float: left;
		width: 20%;
		text-align: center;
	}
	.centerImg{
		padding-top: 3.5rem;
		width: 100%;
		height: 100%;
		z-index: 10000000000;
		background-color: #f9f9f9;
	}
	.emptyImg{
		margin: 0 auto;
		width: 100%;
		height: 17.333333rem;
	    background: url(../../../static/img/empty.png) center center no-repeat;
	    background-size: 12.583333rem auto;
	}
	.emptyText{
		text-align: center;
	    padding-top: 1.1875rem;
	    color: #999;
	}
	.active{
		border-bottom: 2px solid #77bc1f;
		color: #77bc1f;
	}
</style>
