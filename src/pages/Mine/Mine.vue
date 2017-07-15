<template>
	<div class="mine">
		<div class="card">
			<div class="user-bg"></div>
			<div class="user-banner">
				<div class="user-banner-img">
					<img src="static/img/center.png" alt="">
				</div>
				<div class="user-info">
					<p class="text1">188****6183</p>
					<p class="text2">账户管理、收货地址<span>&gt;</span></p>
				</div>
			</div>
			<div class="user-btn-bar">
				<button class="btn1">
					<p>0</p>
					<p>我的收藏夹</p>
				</button>
				<button class="btn2">
					<p><span class="btn2Img"><img src="../../../static/img/btn2Img.png" alt=""></span>&nbsp;0</p>
					<p>我的松鼠币</p>
				</button>
			</div>
		</div>
		<div class="my-dingdan">
			<div class="my-dingdan-text">
				<i class="dingdanLeft-img"></i>
				<span class="my-dingdan-textLeft">我的订单</span>
				<span class="my-dingdan-textRight">查看全部订单</span>
				<i class="dingdanRight-img">&gt;</i>
			</div>
			<div class="daifukuan">
				<div class="daifukuan-lists"><i class="i1"></i>待付款</div>
				<div class="daifukuan-lists"><i class="i2"></i>待发货</div>
				<div class="daifukuan-lists"><i class="i3"></i>待收货</div>
				<div class="daifukuan-lists"><i class="i4"></i>待评价</div>
				<div class="daifukuan-lists"><i class="i5"></i>退款/售后</div>
			</div>
		</div>
		<div class="youhuiquan">
			<div class="my-youhuiquan">
				<i class="my-i1Img"></i>
				<span class="my-span1">我的优惠券</span>
				<span class="my-span2">7&nbsp;张</span>
				<i class="my-i2Img">&gt;</i>
			</div>
			<div class="tuijian-youjiang my-youhuiquan borderBottom">
				<i class="my-iImg"></i>
				<span class="my-span1">推荐有奖</span>
				<i class="my-i2Img">&gt;</i>
			</div>
		</div>
		<div class="youhuiquan">
			<div class="my-youhuiquan">
				<i class="my-i1Img y3Img"></i>
				<span class="my-span1">在线客服</span>
				<span class="my-span2"></span>
				<i class="my-i2Img">&gt;</i>
			</div>
			<div class="tuijian-youjiang my-youhuiquan">
				<i class="my-iImg y4Img"></i>
				<span class="my-span1">帮助与反馈</span>
				<i class="my-i2Img">&gt;</i>
			</div>
			<div class="my-youhuiquan floorText">
				<i class="my-i1Img y5Img"></i>
				<span class="my-span1">设置</span>
				<span class="my-span2">关于我们</span>
				<i class="my-i2Img">&gt;</i>
			</div>
		</div>		
	</div>
</template>

<script>


export default {
    name: 'mine',
    components: {

    }
}
</script>

<style>
	.mine{
		font-size: 1.166667rem;
		overflow: scroll; 
	}
	html{
		height: 100%;
		background-color: #f9f9f9;
	}
	.card{
		position: relative;
	    overflow: visible;
	    height: 19.166667rem;
	    margin: 0;
	    border-radius: 0;
	    box-shadow: none;
	    padding-top: 0.083333rem;
	    padding-bottom: 0.083333rem;
	    text-align: center;
		background-color: #fff;    
	}
	.user-bg{
		transform: translate3d(-50%, 0px, 0px) scale(1);
    	color: black;
    	position: absolute;
	    left: 50%;
	    top: -1.666667rem;
	    bottom: 0;
	    z-index: 10;
	    min-width: 100%;
	    background-image: url(../../../static/img/user-bg.png);
	    background-position: center center;
	    background-size: cover;
	    background-repeat: no-repeat;
	}
	.user-banner{
		/*transform: translate3d(0px, 0px, 0px);*/
		position: relative;
	    z-index: 100;
	}
	.user-banner{
	    margin: 5.0rem auto 0;
	    border-radius: 2.1875rem;
	    overflow: hidden;
	}
	.user-banner img{
		width: 4.833333rem;
		height: 4.833333rem;
	    border-radius: 50%;
	}
	.user-info{
		width: 26.666667rem;
		height: 100%;
		margin: 0;
	    padding: 0;
	    border: 0;
	    vertical-align: baseline;
	    font: inherit;
	    font-size: 100%;
	}
	.text1{
		width: 26.666667rem;
		z-index: 10000;
		line-height: 1.5rem;
		height: 1.5rem;
		color: white;

	}
	.text2{
		padding-top: 0.5rem;
		color: white;
		line-height: 1.5rem;
		height: 1.666667rem;
	}
	.text2 span{
		padding-top: 0.5rem;
		width: 0.625rem;
		padding-left: 0.833333rem;
		}
	.user-btn-bar{
		position: absolute;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    z-index: 100;
	    background: rgba(0,0,0,.22);
	}	
	.btn1{
		box-sizing: content-box;
	    float: left;
	    position: relative;
	    padding: 0.5rem 0;
	    width: 50%;
	    height: auto;
	    min-height: 0;
	    max-height: 4.166667rem;
	    color: #fff;
	    border: none;
	    border-radius: 0;
	    overflow: hidden;
	    background: rgba(0,0,0,.22);
	}
	.btn2{
		box-sizing: content-box;
	    float: right;
	    position: relative;
	    padding: 0.5rem 0;
	    width: 50%;
	    height: auto;
	    min-height: 0;
	    max-height: 50px;
	    color: #fff;
	    border: none;
	    border-radius: 0;
	    overflow: hidden;
	    background: rgba(0,0,0,.22);
	}
	.btn2Img img{
	    background-size: 1.083333rem auto;
	    width: 1.083333rem;
	    height: 1.083333rem;
	    vertical-align: baseline;
	}
	.my-dingdan{
		margin: 0.416667rem 0 0.416667rem 0;
		position: relative;
    	background-color: #fff;
	}
	.my-dingdan-text{
	    box-sizing: content-box;
	    position: relative;
	    margin: 0 0 0 0.833333rem;
	    padding: 0.833333rem 2.833333rem;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    background: bottom center/100% 0.083333rem no-repeat linear-gradient(0deg,#ddd,#ddd 50%,transparent 50%);
	}
	.dingdanLeft-img{
		background: url(../../../static/img/myDingdan.png) no-repeat;
	    background-size: 1.833333rem auto;
	    background-position: center center;
	    width: 1.833333rem;
	    align-items: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
	}
	.dingdanRight-img{
		display: flex;
	    align-items: center;
	    position: absolute;
	    top: 0;
	    height: 100%;
	    right: 0.833333rem;
	    color: #999;
	    font-size: 1.25rem;
	}
	.my-dingdan-textLeft{
		float: left;
	}
	.my-dingdan-textRight{
		float: right;
		color: #999;
	}
	.daifukuan{
		border-top: 1px solid #ddd;
		display: flex;
		padding: 0.833333rem;
		flex: 1;
	}
	.daifukuan-lists{
		color: #999;
		width: 20%;
		font-size: 1.083333rem;
		float: left;
		max-width: 12.5rem;
    	height: 100%;
    	text-align: center;
	    text-decoration: none;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    font-weight: 400;
	}
	.i1{
		display: block;
		width: 5.0rem;
		height: 2.166667rem;
		background: url(../../../static/img/f1.png) no-repeat center center;
		background-size: 1.7rem auto;
	}
	.i2{
		display: block;
		width: 5.0rem;
		height: 2.166667rem;
		background: url(../../../static/img/f2.png) no-repeat center center;
		background-size: 1.7rem auto;
	}
	.i3{
		display: block;
		width: 5.0rem;
		height: 2.166667rem;
		background: url(../../../static/img/f3.png) no-repeat center center;
		background-size: 1.7rem auto;
	}
	.i4{
		display: block;
		width: 5.0rem;
		height: 2.166667rem;
		background: url(../../../static/img/f4.png) no-repeat center center;
		background-size: 1.7rem auto;
	}
	.i5{
		display: block;
		width: 5.0rem;
		height: 2.166667rem;
		background: url(../../../static/img/f5.png) no-repeat center center;
		background-size: 1.7rem auto;
	}
	.youhuiquan{
		margin-bottom: 0.416667rem;
		position: relative;
    	background-color: #fff;
	}
	.my-youhuiquan{
		display: block;
	    box-sizing: content-box;
	    position: relative;
	    border-bottom: 1px solid #ddd;
	    background-color: transparent;
	    margin: 0 0 0 0.833333rem;
	    padding: 0.833333rem 2.833333rem;
	    height: 1.5em;
	    line-height: 1.5em;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	}
	.borderBottom{
		border: none;
	}
	.my-i1Img{
		background: url(../../../static/img/y1.png) no-repeat center center;
	    background-size: 1.833333rem auto;
	    width: 1.833333rem;
        align-items: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
        display: flex;
	}
	.my-iImg{
		background: url(../../../static/img/y2.png) no-repeat center center;
	    background-size: 1.833333rem auto;
	    width: 1.833333rem;
        align-items: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
        display: flex;
	}
	.y3Img{
		background: url(../../../static/img/y3.png) no-repeat center center;
	    background-size: 1.833333rem auto;
	    width: 1.833333rem;
        align-items: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
        display: flex;
	}
	.y4Img{
		background: url(../../../static/img/y4.png) no-repeat center center;
	    background-size: 1.833333rem auto;
	    width: 1.833333rem;
        align-items: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
        display: flex;
	}
	.y5Img{
		background: url(../../../static/img/y5.png) no-repeat center center;
	    background-size: 1.833333rem auto;
	    width: 1.833333rem;
        align-items: center;
	    position: absolute;
	    top: 0;
	    left: 0;
	    height: 100%;
        display: flex;
	}
	.my-span1{
		float: left;
		font-size: 1.166667rem;
	}
	.my-span2{
		float: right;
		font-size: 1.083333rem;
		color: #999;
	}
	.my-i2Img{
		right: 0.833333rem;
	    color: #999;
	    font-size: 1.25rem;
	    display: flex;
	    align-items: center;
	    position: absolute;
	    top: 0;
	    height: 100%;
	}
	.floorText{
		margin-bottom: 0.5rem;
	}
</style>
