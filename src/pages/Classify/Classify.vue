<template>
    <div>
			
			<!-- <router-view></router-view> -->

       		<!-- 分类标题 -->
       		<div class="classify-titlebox">
       			<div class="classify-title">分类</div>
			</div>
       		<!-- 分类模块 -->
       		<div class="classify-content">
	       		<ul class="classify-ul">
	       			<li v-for="clist in classifyLists">
	       				<router-link :to="'/list/'+clist.id">
	       					<img v-lazy="clist.pic">
	       				</router-link>   

	       			</li>
	       		</ul>
			</div>

			<!-- 跳转在线客服按钮 -->
			<div class="classify-icon">
				<img src="http://m.3songshu.com/resources/images/icon-chat@2x.18defe06.png">
			</div>

       		
    </div>
</template>

<script>
export default {
	data(){
		return {
			classifyLists:[],
			id:''
		}
	},
	created(){
		this.axios.get('../../../static/data/classify/分类-list.json').then(res=>{
			this.classifyLists = res.data.data;
			console.log(this.classifyLists);
			// this.id = this.$route.params.id;
			console.log(this.id);
		},err=>{
			console.log(err);
		})
	}

}
</script>

<style>
	.classify-titlebox{
		height: 3.666667rem;
	}
	/*分类标题样式*/
	.classify-title{
		height: 3.583333rem;
		font-size: 1.416667rem;
		text-align: center;
		line-height: 3.583333rem;
		border-bottom: 0.083333rem solid #e4e4e4;
		background-color: #fff;
		/*定位*/
		position: fixed;
		top: 0;
		left: 0;
		right: 0;

	}

	/*分类页面模块样式*/
	.classify-content{
		height: 38.666667rem;
		overflow-y: scroll;
		position: absolute;
	}

	.classify-ul{
		/*背景颜色*/
		background-color: rgb(249,249,249);
		/*flex布局*/
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

		padding:0 0.333333rem; 
		padding-bottom: 0.833333rem;
		

	}
	.classify-ul>li{
		width: 30%;
		margin-top: 0.833333rem;
	}
	
	img{
		
		width: 100%;
	}

	/*练习客服按钮*/
	.classify-icon{
	}

</style>
