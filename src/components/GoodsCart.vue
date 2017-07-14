<template>
    <div class="goods_content">
        <img class="tags_pic" :src="goods.tags[0].pic"/>
        <img :src="goods.pic" />
        <p>{{ goods.alias }}</p>
        <p class="grey">{{ goods.name }}</p>
        <p>
             <span class="red">
                {{ goods.salesPrice | money }} 
            </span> 
             <s>
                {{ goods.marketPrice }}
            </s>
        </p>
        <img class="goods_cart" src="../../static/img/greenCart.png" @click = 'addCart(goods)' />
    </div>
</template>

<script>
export default{
    props:['goods'],
    methods:{
        addCart:function(goods){
            //console.log(goods);
            this.$store.dispatch('addCart',goods);

        }
    }
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
        .tags_pic{
            position: absolute;
            display: inline-block;
            width: 3.5rem;
            left: 0;
            top: 0;
        }
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
            font-size: 1.1rem;
            .grey{
                font-size: 10rem;
            }
        }
        s{
            padding-left: .5rem;
            font-size: .8rem;
        }
        .goods_cart{
            position: absolute;
            display: inline-block;
            width: 1.5rem;
            right: .5rem;
            bottom: .5rem;
        }
    }
    .goods_content:nth-child(even){
        padding-right: 0;
    }
</style>