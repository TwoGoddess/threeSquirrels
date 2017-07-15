<template>
    <div>
        <router-view class="main"></router-view>
        <div class="footer">
            <router-link to="/home"><img src="../assets/img/home.png" alt="">首页</router-link>
            <router-link to="/classify"><img src="../assets/img/class1.png" alt="">分类</router-link>
            <router-link to="/squirrelb"><img src="../assets/img/squerr1.png" alt="">松鼠币商城</router-link>
            <router-link to="/cart">
                <img src="../assets/img/cart1.png" alt="">购物车
                <span class="yellow" v-if="getNum != 0">{{getNum}}</span>
            </router-link>
            <router-link to="/mine"><img src="../assets/img/mine1.png" alt="">个人中心</router-link>
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
    .main{
        padding-bottom: 50px;
    }
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
            width: 2rem;
            height: 2rem;
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
    }
    
</style>