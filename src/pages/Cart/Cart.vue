<template>
    <div class = "cart-container">
    	<header>
    		<div class='cart-head' @click = "back()"></div>
    		<div class = 'cart-middle'>购物车</div>
    		<div class = 'cart-right'>编辑</div>
    	</header>
    	<div class = "full">
    		<span class="full-left">满49元免运费，还差6元</span><span class = "full-right">去凑单</span>
    	</div>
    	<ul class='cart-ul' >
    		<li class = 'cart-li'>
    			<span class = 'check'></span>
    			<img src="../../assets/img/cart.jpg" alt="" class = 'cart-img'>			
				<span class = 'cart-text'>
					<p>麻薯组合装</p>
					<p class = "cart-price">21.90</p>
					<p class = "cart-btn">
						<span class="cart-del">-</span>
						<span class="cart-mount">1</span>
						<span class="cart-add">+</span>
					</p>
				</span>
				<span></span>						
    		</li>
    	</ul>
    	<div class = "cart-bottom">
    		<span class = 'check1'></span>
    		<span class ='allcheck'>全选</span>
    		<span class = 'bottom-text'>
    			<p>应付：<span class = 'bottom-price'>284.70</span></p>
    			<p>总价：284.70 优惠：0.00</p>
    		</span>
    		<span class = "cart-cal">
    			<p>去结算</p>
    			<p>(1)</p>
    		</span>
    	</div>
    </div>
</template>
<script>
export default {
	methods:{
		back:function(){
			history.back();
		}
	}
}
</script>

<style>
.cart-container{
	background-color:#F9F9F9;
	height: 100%;
}
header{
	display: flex;
	height: 3.666667rem;
	background-color: #fff;
}
.cart-head{
	height: 3.666667rem;
	width:2.5rem;
	background:url('../../assets/img/left.png') no-repeat 1.25rem 1.25rem;
}
.cart-middle{
	font-size: 1.416667rem;
    font-weight: 500;
    position: absolute;
    left: 11.5rem;
    top: .9rem;
}
.cart-right{
	position: absolute;
	right:.8rem;
	top:1.2rem;
}
.full{
	height: 2.166667rem;
	line-height: 2.166667rem;
	background-color: #F9C0CB;
	padding: 0 0 0 0.833333rem;
}
.full-left{
	color:white;
	font-size: 1.166667rem;
	font-weight: 400;
}
.full-right{
	color:#ee2e52;
	padding:  0 0 0 9rem;
}
.cart-li{
	height:6.666667rem;
	background-color: #fff;
}
.check{
	float: left;
	width:1.48rem; 
	height:1.48rem;
	background:url('../../assets/img/green.png')no-repeat;
    background-size: auto auto;
    margin-top: -0.416667rem;
    vertical-align:top;
    margin-top:2.5rem; 
    margin-left: 0.5rem;
}
.cart-img{
	float: left;
 	width:5.0rem;
 	height:5.0rem;
 	margin-top: 0.8rem;
 	margin-left: 1rem;
 	border:1px solid #DDDDDD;
	border-radius:0.333333rem;
}
.cart-text{
	float:left;
	margin-left: 1rem;
	height:6.666667rem; 
	line-height: 1.67rem;
	width:12.5rem;
	padding-top: 0.8rem;
}
.cart-price{
	color:#ee2e52;
}
.cart-btn{
	width: 7rem;
	height: 1.3rem;
	border:1px solid #ddd;
	line-height: 1.3rem;
}
 .cart-del{	
 	display: inline-block;
	width: 2rem;
	text-align: center;
	height: 1.3rem;
	border-right: 1px solid #ddd;
} 
 .cart-mount{
 	display: inline-block;
	width: 2rem;
	height:1.3rem;
	text-align: center;
} 
.cart-add{
	display: inline-block;
	width: 2rem;
	height: 1.3rem;
	text-align: center;
	border-left:1px solid #ddd;
}
.cart-bottom{
	width: 100%;
	height: 3.75rem;
	background-color:#fff;
	position: absolute;
	left: 0;
	bottom:4.166667rem;
	border-bottom: 1px solid #E4E4E4;
	border-top:1px solid #DCDCDC;
}
.check1{
	float: left;
	width:1.48rem; 
	height:1.48rem;
	background:url('../../assets/img/green.png')no-repeat;
    background-size: auto auto;
    vertical-align:top;
    margin-top:1.2rem; 
    margin-left: 0.5rem;
}
.allcheck{
	float: left;
	width: 4rem;
	height: 3.75rem;
	line-height: 3.75rem;
	padding-left: 0.416667rem;
}
.bottom-text{
	float: left;
	width: 12rem;
	height: 3.75rem;
	line-height:1.9rem;
}
.bottom-text p:first-child{
	position:relative;
	right:-4.5rem;
}
.bottom-text p:nth-child(2){
	position:relative;
	right:.7rem;
	color:#999;
}
.bottom-price{
	color:#ee2e52;
}
.cart-cal{
	float:right;
	width:9.416667rem;
	height: 3.75rem;
	margin-top: -3.75rem;
	background-color:#77BC1F;
	text-align: center;
	padding-top: 0.416667rem; 
}
.cart-cal p{
	color:#fff;
}
.cart-cal p:first-child{
	font-size:1.5rem;
}
</style>
 