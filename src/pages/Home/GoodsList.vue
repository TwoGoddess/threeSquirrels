<template>
    <div class="goodsList clear">
        <div class="goodsList-header">
            <span></span>{{ goodList.title }}
        </div>
        <goods-cart 
            v-for="(items, index) in goodList.products" 
            :goods="items" 
            :key="index">
        </goods-cart>
    </div>
</template>

<script>

import GoodsCart from '../../components/GoodsCart'

export default{
    props:['goodList'],
    components: {
        GoodsCart
    }
}
</script>

<style lang="less">
    .goodsList{
        background: #f9f9f9;
        .goodsList-header{
            width: 100%;
            height: 2.5rem;
            line-height: 2.5rem;
            font-size: .8rem;
            span{
                display: inline-block;
                background-color: #77bc1f;
                width: 1rem;
                height: .8rem;
                margin: 0 1rem 0 0;
            }
        }
    }
</style>