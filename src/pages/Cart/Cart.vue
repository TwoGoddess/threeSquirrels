<template>
    <div class = "cart-container main" >
		<toolBar></toolBar>
		<div class = "full">
			<span class="full-left">满49元免运费，还差49元</span><span class = "full-right">去凑单</span>
		</div>

    	<div v-if="getNum != 0">		
			<ul class='cart-ul' >
				<li class = 'cart-li'  v-for='(item,index) in cartList'>
					<span :class="item.singleFlag ? 'check':'checkNo'" @click = "singleChoice(item)"></span>
					<img :src="item.pic" alt="" class = 'cart-img'>			
					<span class = 'cart-text'>
						<p>{{item.name}}</p>

						<p v-if="item.salesPrice.value" class = "cart-price">{{item.salesPrice.value | money}}</p>
						<p v-else class = "cart-price">{{item.salesPrice}}</p>

						<p class = "cart-btn">
							<span class="cart-del" @click = 'reduce(item,index)'>-</span>
							<span class="cart-mount">{{item.count}}</span>
							<span class="cart-add" @click = 'add(item)'>+</span>
						</p>
					</span>
					<span></span>						
				</li>
			</ul>
			<div class = "cart-bottom">
<<<<<<< HEAD
				<span :class = "allCheckFlag ? 'check':'checkNo'" @click="all()"></span>
				<span class ='allcheck'>全选</span>
=======
>>>>>>> ba264a9f8b409bf43c4e96abcef2d98cb12e9a70
				<span class = 'bottom-text'>
					<p>应付：<span class = 'bottom-price'>{{allPrice | money}}</span></p>
					<p>总价:{{allPrice | money}} 优惠：0.00</p>
				</span>
				<span class = "cart-cal">
					<p>去结算</p>
					<p>({{getNum}})</p>
				</span>
			</div>
    	</div>
    	<div v-else>
	    	<div class = "goShop">
	    		<img src="../../assets/img/cart3.png" alt="">
	    	</div>
	    	<div class = "master">
	    		<p>主人，购物车还是空的哦~</p>
	    		<router-link :to = "'/home'"><p class = "shop">去逛逛</p></router-link>
	    	</div>
    	</div>
    </div>
</template>
<script>

import toolBar from '../../components/ToolBar'

export default {
	components: {
        toolBar,
    },
	data(){
		return{
			isChecked :true
		}
	},
	created(){
		if(this.$store.getters.getList.length==0){
            this.allChecked = false;
        }
		//this.getTotal();
	},
	computed :{
		cartList:function(){
			return this.$store.getters.getList;
		},
		getNum:function(){
			var list = this.$store.getters.getList;
			var num = 0;
			list.forEach(i=>{
				num += i.count;
			});
			return num;
		},
		allPrice:function(){
			return this.$store.getters.getMoney;
		}

	},
	methods:{
		back:function(){
			history.back();
		},
		reduce:function(item,index){
			this.$store.dispatch('minus',item);
			//getTotal();
			//this.cartList=this.$store.state.cartList;
			this.$store.commit("change");
		},
		add:function(item){
			this.$store.dispatch('addCart',item);
			//getTotal();
			//this.cartList=this.$store.state.cartList;
			this.$store.commit("change");
		},
		singleChoice:function(item){
			item.singleFlag = !item.singleFlag;			
			let num = 0;
			this.cartList.map(function(i) {
				if(i.singleFlag == false) {
					num++;
				}
			});
			if(num == 0) {
				this.allCheckFlag = true;
			} else {
				this.allCheckFlag = false;
			}
			this.$store.commit("change");
		},
		all() {
				this.allCheckFlag = !this.allCheckFlag;
				if(this.allCheckFlag == false) {
					this.cartList.map(function(i) {
						i.singleFlag = false;
					})
				}
				if(this.allCheckFlag == true) {
					this.cartList.map(function(i) {
						i.singleFlag = true;
					})
				}
				this.$store.commit("change");
			},
		getTotal:function(){
			this.total = 0;
            this.$store.state.cartList.forEach(c=>{
                if(c.isChecked){
                    this.total += c.salesPrice * c.count;
                }
            });
            this.total = this.total.toFixed(2);
		},
	}

}
</script>

<style>
.cart-container{
	background-color:#F9F9F9;
	height: 100%;
}
.main{
	padding: 0;
}
.full{
	position: absolute;
	left: 0;
	right: 0;
	top:0;
	z-index: 10;
	height: 2.166667rem;
	line-height: 2.166667rem;
	background-color: #F9C0CB;
	padding: 0 0 0 0.833333rem;
	margin-top: 3rem;
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
	margin-top: 5.8749rem;
}
.cart-li{
	height:6.666667rem;
	background-color: #fff;
	margin-bottom:0.416667rem;
	position: relative;
}
.check{
	float: left;
	width:1.48rem; 
	height:1.48rem;
	background:url('../../assets/img/green.png')no-repeat;
    background-size: auto auto;
    vertical-align:top;
    margin-left: .5rem;
    position: relative;
    top: 35%;
}
.checkNo{
	float: left;
	width:1.48rem; 
	height:1.48rem;
	background:url('../../assets/img/blank.png')no-repeat;
    background-size: auto auto;
    vertical-align:top;
    margin-left: .5rem;
    position: relative;
    top: 35%;
}
.check2{
	float: left;
	width:1.48rem; 
	height:1.48rem;
	background:url('../../assets/img/blank.png')no-repeat;
    background-size: auto auto;
    margin-top: -0.416667rem;
    vertical-align:top;
    margin-top:2.5rem; 
    margin-left: .5rem;
}
.cart-img{
	position: absolute;
	left: 3rem;
	top:0.8rem;
 	width:5.0rem;
 	height:5.0rem;
 	border:1px solid #DDDDDD;
	border-radius:0.333333rem;
}
.cart-text{
	position: absolute;
	left: 9rem;
	top:0;
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
	position:fixed;
	left: 0;
	right:0;
	bottom:3.166667rem;
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
.goShop img{
	width: 11.719167rem;
    height: 11.719167rem;
    background-size: 50% 50%;
    margin-top: 13rem;
    margin-left: 8rem;
}
.master{
	height: 19rem;
}
.master p:first-child{
	margin-left: 8rem;
	margin-top: 1rem;
	color:#999999;
}
.master a:nth-child(2) p{
	margin-left:10rem;
	margin-right: 10.5rem;
	margin-top: 2rem;
	color:#95CA51;
	border:1px solid #95CA51;
	padding: .6rem 0  .6rem 1.5rem;
	border-radius: .3rem;
}
</style>
 