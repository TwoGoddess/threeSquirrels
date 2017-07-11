<template>
    <div>
       		<!-- 分类标题 -->
       		<div class="classify-titlebox">
       			<div class="classify-title">分类</div>
			</div>
       		<!-- 分类模块 -->
       		<div class="classify-content">
	       		<ul class="classify-ul">
	       			<li v-for="clist in classifyLists">

	       				<router-link :to="'/classify/list/'+clist.id">
	       					<img :src="clist.pic">
	       				</router-link>   

	       			</li>
	       		</ul>
	       		<br><br><br><br><br><br><br><br><br><br><br><br><br><br>
			</div>

			<!-- 跳转在线客服按钮 -->
			<div class="classify-icon">
				<img src="http://m.3songshu.com/resources/images/icon-chat@2x.18defe06.png">
			</div>

			<!-- <router-view></router-view> -->
       		
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
		this.axios.get('../../static/data/classify/分类-list.json')
        .then(res=>{
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
		height: 43px;
	}
	/*分类标题样式*/
	.classify-title{
		height: 43px;
		font-size: 17px;
		text-align: center;
		line-height: 43px;
		background-color: #fff;
		/*定位*/
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
        z-index: 10;  
	}

	/*分类页面模块样式*/
	.classify-content{
        height: 15rem;
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
