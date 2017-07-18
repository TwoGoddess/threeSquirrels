<template>
    <div>
        <router-view class="main"></router-view>
        <div class="footer">
            <router-link to="/home">首页</router-link>
            <router-link to="/classify">分类</router-link>
            <router-link to="/squirrelb">松鼠币商城</router-link>
            <router-link to="/cart">
               购物车
                <span class="yellow" v-if="getNum != 0">{{getNum}}</span>
            </router-link>
            <router-link to="/mine">个人中心</router-link>
        </div>
    </div>
</template>
 
<script>
export default {
    computed :{
        getNum:function(){
            var list = this.$store.getters.getList;
            var num = 0;
            list.forEach(i=>{
                num += i.count;
            });
            return num;
        }

    }
}
</script>

<style lang="less">
 .footer{
        display: flex;
        position: fixed;
        padding-top: 2px;
        bottom: -2px;
        left: 0;
        right: 0;
        height: 50px;
        z-index: 10;
        background: #fff;
        a{
            padding-top: 30px;
            width: 20%; 
            text-align: center;
            font-size: 10px;
            color: #585858;
            position: relative;
        }
        img{
            width: 22px;
            height: 22px;
            position: absolute;
            top: .5rem;
            left: 50%;
            transform: translateX(-50%);
        }
        .yellow{
            display:inline-block;
            width:1.6rem;
            height:1.3rem;
            border-radius: 60%;
            line-height: 1.3rem;
            text-align: center;
            position:absolute;
            right: 1rem;
            top: 0;
            background-color:#ff9601;
            color:#fff;
        }
        a:nth-of-type(1){
            background: url(../assets/img/home1.png) no-repeat;
            display:block;
            background-size: 32% 43%;
            background-position:1.8rem .5rem;
            
        }
        a:nth-of-type(1).router-link-active{
            background: url(../assets/img/home.png) no-repeat;
            display:block;
            background-size: 32% 43%;
            background-position:1.8rem .5rem;
            color:#77bc1f;
        }
        a:nth-of-type(2){
            background: url(../assets/img/class1.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
        }
        a:nth-of-type(2).router-link-active{
            background: url(../assets/img/class.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
            color:#77bc1f;
        }
        a:nth-of-type(3){
            background: url(../assets/img/squerr1.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
        }
        a:nth-of-type(3).router-link-active{
            background: url(../assets/img/squerr.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
            color:#77bc1f;
        }
        a:nth-of-type(4){
            background: url(../assets/img/cart1.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
        }
        a:nth-of-type(4).router-link-active{
            background: url(../assets/img/cart.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
            color:#77bc1f;
        }
        a:nth-of-type(5){
            background: url(../assets/img/mine1.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
        }
        a:nth-of-type(5).router-link-active{
            background: url(../assets/img/mine.png) no-repeat;
            display:block;
            background-size:  32% 43%;
            background-position:1.8rem .5rem;
            color:#77bc1f;
        }
    
    }
    .main{
        padding-bottom: 50px;
    }
</style>