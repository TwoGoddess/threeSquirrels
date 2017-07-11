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
        font-size: 13px;
    }
    .goods_content{
        box-sizing:border-box;
        width: 50%;
        font-size: 15px;
        display: inline-block;
        position: relative;
        float: left;
        background-color: #fff;
        border-right: .1rem solid #f9f9f9;
        border-bottom: .1rem solid #f9f9f9;
        img{
            width: 100%;
            height: auto;
        }
        p{
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            padding: 0 .2rem;
            line-height: .43rem;
            .green::before{
                content: "✿";
                padding: 0 5px;
            }
        }
    }
    .goods_content:nth-child(even){
        padding-right: 0;
    }
</style>