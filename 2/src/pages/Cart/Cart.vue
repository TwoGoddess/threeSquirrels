<template>
    <div>
    	<header>
    		<div class='cart-head'></div>
    		<div class = 'cart-middle'>购物车</div>
    		<div class = 'cart-right'>编辑</div>
    	</header>
    	<div class = "full">
    		<span class="full-left">满49元免运费，还差6元</span><span class = "full-right">去凑单</span>
    	</div>
    	<ul class='cart-ul' >
    		<li class = 'cart-li'>
    			<span class = 'check'></span>
    			<span class = 'cart-img'></span>
    			<span></span>
    			<span></span>
    		</li>
    	</ul>
    </div>
</template>

<script>
export default {
  
}
</script>

<style>
header{
	display: flex;
	height: 3.666667rem;
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
.cart-ul{
	height:6.666667rem;
}
.cart-li{
	height:6.666667rem;
}
.check{
	display: inline-block;
	width: 3.833333rem; 
	height:6.666667rem;
	background:url('../../assets/img/green.png')no-repeat .5rem 2.5rem;
    background-size: auto auto;
}
.cart-img{
	background:url('../../assets');
}
</style>
