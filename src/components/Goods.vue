<template>
    <div class="goods_content">
        <img :src="goods.pic" />
        <p>{{ goods.name }}</p>
        <p class="grey">每单限兑 {{ goods.limit }} 件</p>
        <p><span v-if="goods.price != '0'" class="red">{{ goods.price | money }} + </span><span class="green">{{ goods.integralAmout }}</span></p>
    </div>
</template>

<script>
export default {
    props: ['goods']
}
</script>

<style lang="less">
    .red{
        color: #ee2e52;
    }
    .grey{
        color: #999;
    }
    .goods_content{
        box-sizing:border-box;
        width: 50%;
        font-size: 1rem;
        display: inline-block;
        position: relative;
        float: left;
        background-color: #fff;
        border-right: .3rem solid #f9f9f9;
        border-bottom: .3rem solid #f9f9f9;
        padding-bottom: .5rem;
        img{
            width: 100%;
            height: auto;
        }
        p{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            padding: 0 .8rem;
            line-height: 1.5rem;
            .green::before{
                content: "✿";
                padding: 0 .2rem;
            }
        }
    }
    .goods_content:nth-child(even){
        padding-right: 0;
    }
</style>