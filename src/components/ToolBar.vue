<template>
    <div class="header">
        <header>
    		<div v-if="isShowBack" class='cart-head' @click = "back()"></div>
    		<div class = 'cart-middle'>{{ title }}</div>
    		<div v-if="isShowEdit" class = 'cart-right'>{{ edit }}</div>	
    	</header> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: "",
            edit: "",
            isShowBack,
            isShowEdit
        }
    },
    methods:{
        back(){
            window.history.back();
        },
        changeTitle(){
            if(this.$route.path == "/classify"){
                 this.title = "分类"
                 this.isShowBack = false;
                 this.isShowEdit = false;
            }else if(this.$route.path == "/squirrelb"){
                 this.title = "松鼠币商城"
                 this.isShowBack = false;
                 this.isShowEdit = false;
            }else if(this.$route.path == "/cart"){
                 this.title = "购物车"
                 this.isShowBack = true;
                 this.isShowEdit = true;
                 this.edit = "编辑"
            }else{
                this.title = ""
                this.isShowBack = true;
                this.isShowEdit = true;
                this.edit = "搜索"
            }
            console.log(this.$route.path)
        }
    },
    watch: {
        "$route": "changeTitle"
    },
    created(){
        this.changeTitle();
    }
}
</script>

<style lang="less">
    .header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 3rem;
        z-index: 10;
        .cart-head{
            position: absolute;
            height: 3.666667rem;
            width:2.5rem;
            line-height: 3rem;
            background:url('../assets/img/left.png') no-repeat 1.25rem 1.25rem;
        }
        .cart-middle{
            font-size: 1.1rem;
            text-align: center;
            width: 100%;
            line-height: 3rem;
            background: #fff;
        }
        .cart-right{
            position: absolute;
            top: 0;
            right: 1.2rem;
            line-height: 3rem;
        }
    }
</style>