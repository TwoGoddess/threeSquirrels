<template>
    <div>
        <router-view class="main"></router-view>
        <div class="footer">
            <router-link to="/home">首页</router-link>
            <router-link to="/classify">分类</router-link>
            <router-link to="/squirrelb">松鼠币商城</router-link>
            <router-link to="/cart">购物车</router-link>
            <router-link to="/mine">个人中心</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
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
        }
    }
</style>