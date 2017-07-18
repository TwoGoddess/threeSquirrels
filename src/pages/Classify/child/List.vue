<template>
    <div>
		<toolBar></toolBar>
    	<!-- 新品热卖列表 -->
		<div class="list-box">


			<div class="list-box-top">
				<ul>
					<li @click="List_new">新品</li>
					<li @click="List_hot">热卖</li>
					<li @click="List_price()">
						价格
						<img src="http://m.3songshu.com/resources/images/product-list-arrow.8cf2db54.png" alt="">
					</li>
				</ul>
			</div>
			
			<div class="blank"></div>

			<div class="list-data" id="list-data">
				<ul>
					<li v-for="(item,index) in lists" :key="index">
						<img v-lazy="item.pic">
						<div class="list-proinfo">
							<p class="list-proname">{{item.name}}</p>
							<p class="list-proprice">
								<span>{{item.salesPrice.value | money}}</span>
								<span>{{item.marketPrice.value | money}}</span>

								<span @click = "addCart(item)"><img src="http://m.3songshu.com/resources/images/icon-add-to-cart-green.eea89f73.png" alt=""></span>
							</p>
							
						</div>
					</li>
				</ul>
			</div>
			
		</div>

		


    </div>
		
</template>

<script>
import toolBar from '../../../components/ToolBar'

export default {
	name: 'List',
	components: {
		toolBar
	},
	data(){
		return {
			id:this.$route.params.id,
			lists:[
				
			],
			num:1,
			flag:true
		}
	},
	created(){
		// 页面一刷新就会执行点击事件，请求数据
		this.List_new();

	},
	methods: {
		menu (){
			
			// console.log(document.body.scrollTop);
			// console.log(document.body.clientHeight);
			// console.log(document.body.scrollHeight);

			// 页面卷起来的高度 + 屏幕的高度 = page的高度
			if(document.body.scrollTop + 568 == document.body.scrollHeight){
				
				// console.log(this.num);
				this.num = this.num+1;
				if(this.num<=5){
					this.axios.get('../../../static/data/classify/'+this.id+''+this.num+'.json').then(res=>{
						this.lists=this.lists.concat(res.data.data.items);
						// console.log(this.lists)
					},
					err=>{
							console.log(err);
					})
				}
			};
		},

		// 点击事件，数组方法sort，a b为固定值
		List_hot: function(){
			console.log(this.lists);
			this.lists.sort(function(a,b){
				return a.defaultGoodsId-b.defaultGoodsId;
			}) 
		},


		List_price: function(){
			var self = this;
			console.log(this.lists);
			this.lists.sort(function(a,b){
				if(self.flag == true){
					console.log(self.flag+'11');
					console.log(a.salesPrice.value);
					return a.salesPrice.value - b.salesPrice.value;
				}else if(self.flag == false){
					console.log(self.flag+'22');
					return b.salesPrice.value - a.salesPrice.value;
				}
				
			});
			this.flag = !this.flag;
		},


		List_new: function(){

			this.axios.get('../../../static/data/classify/'+this.id+'1.json').then(res=>{
				this.lists = res.data.data.items;
				},err=>{
					console.log(err);
				})
		},
		addCart:function(item){
			this.$store.dispatch('addCart',item);
		}

		

	},
	mounted(){
		// 监听滚动条事件
	    window.addEventListener('scroll', this.menu)
	    
	},
}
</script>

<style scoped>
	img{
	    -webkit-transition: all 2s;
	    -o-transition: all 2s;
	    transition: all 2s;
	}
	img[lazy=loading] {
	    opacity: 0;
	}
	img[lazy=error] {

	}
	img[lazy=loaded] {
	  	opacity: 1;
	}

	.list-box{
		background-color: rgb(249,249,249);
	}
	.list-box-top{
		border-top: .1rem solid #f9f9f9;
		border-bottom: .3rem solid #f9f9f9;		
		margin-top: 3rem;
		height: 2.5rem;
	}
	.list-box-top>ul{
		height: 2.5rem;
		display: flex;
		flex-direction: row; 
		align-items: center; 
		justify-content: space-around;
		font-size: 1.083333rem;
		background-color: #fff;
	}
	.list-box-top>ul>li>img{
		width: 17%;
	}
	
	.changestyle{
		color: #77bc1f;
	}

	.list-data>ul{
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;

		overflow-y: scroll;
	}
	.list-data>ul>li{
		width: 49%;
		margin-bottom: 0.5rem;
	}

	.list-data>ul>li>img{
		width: 100%;
		vertical-align: top;
	}

	/*商品信息*/
	.list-proinfo{
		background-color: #fff;
		padding: 0 0.833333rem; 
		height: 4.833333rem;
	}
	.list-proinfo .list-proname{
		height: 2.583333rem;
	}
	.list-proinfo .list-proprice{
		height: 1.666667rem;
		display: flex;
		line-height: 1.666667rem;
		justify-content: space-between;
	}
	.list-proinfo .list-proprice>span:first-of-type{
		font-size: 1.083333rem;
	    color: #ee2e52;
	    width: 20%;
	}
	.list-proinfo .list-proprice>span:nth-of-type(2){
    	text-decoration: line-through;
	    color: #999;
	}
	.list-proinfo>p>span>img{
		width: 68%;
		float: right;
	}
	

</style>



