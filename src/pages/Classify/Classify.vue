<template>
    <div>
			
			<!-- <router-view></router-view> -->

       		<!-- 分类标题 -->
			<toolBar></toolBar>
       		<!-- 分类模块 -->
       		<div class="classify-content">
	       		<ul class="classify-ul">
	       			<li v-for="(clist, index) in classifyLists" :key="index">
	       				<router-link :to="'/list/'+clist.id">
	       					<img v-lazy="clist.pic" class="classify-img">
	       				</router-link>   
	       			</li>
	       		</ul>
			</div>
    </div>
</template>

<script>
import toolBar from '../../components/ToolBar'

export default {
	components: {
		toolBar
	},
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

<style scoped>
	/*分类页面模块样式*/
	.classify-content{
		padding-top: 3rem;
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
	
	.classify-img{
		width: 100%;
	}

	/*练习客服按钮*/
	.classify-icon{
	}

</style>
