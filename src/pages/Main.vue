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
        padding-top: 2px;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        a{
            padding-top: 30zpx;
            width: 20%; 
            text-align: center;
            font-size: 10px;
            color: #585858;
        }
    }
</style>