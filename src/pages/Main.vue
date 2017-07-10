<template>
    <div>
        <router-view></router-view>
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
    .footer{
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        justify-content: space-around;
        height: 60px;
        background-color: #ddd;
        a{
            padding-top: 40px;
            width: 20%;
            font-size: 10px;
            line-height: 16px;
            text-align: center;
        }
    }
</style>