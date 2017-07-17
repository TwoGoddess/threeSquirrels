<template>
    <div class="header">
        <header>
    		<div v-if="isShowBack" class='cart-head' @click = "back()"></div>
    		<div class = 'cart-middle'>{{ title }}</div>
    		<div v-if="isShowEdit" class = 'cart-right'>编辑</div>	
    	</header> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: "松鼠币商城"
        }
    },
    methods:{
        back(){
            window.history.back();
        }
    },
    computed: {
        title(){
            return this.$store.state.toolber.title;
        },
        isShowArrow(){
            return this.$store.state.toolbar.isShowArrow;
        },
        isShowEdit(){
            return this.$store.state.toolbar.isShowEdit;
        }
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