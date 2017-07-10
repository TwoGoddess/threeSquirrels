<template>
    <div>
        <router-view class="main"></router-view>
        <div class="footer">
            <router-link to="/home">
                首页
            </router-link>
            <router-link to="/classify">
                分类
            </router-link>
            <router-link to="/squirrelb">
                松鼠币商城
            </router-link>
            <router-link to="/cart">
                购物车
            </router-link>
            <router-link to="/mine">
                个人中心
            </router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .footer{
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;
        background-color: #fff;
        padding-top: 2px;
        a{
            flex: 1;
            font-size: 10px;
            padding-top: 28px;
            text-align: center;
            color: #585858;
            background-color: #eee;
        }
    }
</style>