<template>
	<div>
		<div class = "home-nav" :class="{ navpo:navpo }">
	        <ul class = 'nav-ul'>
	        	<li v-for='(item,index) in list' :key="index" :id="item.id" @click ='changeIndex(index,item.id)' :class="{'hot':index==1 ,'new':index==4,'new1':index==7}" class = "nav-li" >
	        		<span  :class="{'active':currtIndex == index}">{{item.name}}</span>
	        	</li>
	        </ul>	
	    </div>
	</div>
</template>
<script>
export default {
	props:['list','navpo'],
	data(){
		return {
			currtIndex:0,
			id:10003
		}
	},
	methods:{
		changeIndex:function(itemIndex,itemid){
			this.currtIndex = itemIndex;
			this.$emit('getId',[itemid]);
		},
	}
}
</script>
<style>
.navpo{
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	z-index: 9999;
}
.nav-ul{
	width: 100%;
	height:3.333333rem;
	line-height:3.333333rem;
	/*overflow-x:hidden;*/
	overflow-y: hidden;
	white-space: nowrap;
	background-color:white;
	font-size: 0;
}
.nav-li{
	display: inline-block;
	font-size:1.0rem;
	padding: 0 0.75rem;
	color:#262626;
	background: url('../assets/img/line.png') no-repeat right center;
}
.active{
	color:#77BC1F;
	border-bottom: 0.166667rem solid #77BC1F;
	padding-bottom: 0.8rem;
}
.hot{
	background:url('../assets/img/hot.gif') no-repeat 4.5rem .2rem;
	background-size:23% 25%;
}
.new{
	background:url('../assets/img/new.gif') no-repeat 4rem .4rem;
	background-size:23% 25%;
}
.new1{
	background:url('../assets/img/new.gif') no-repeat 2rem .4rem;
	background-size:35% 25%;
}
</style>