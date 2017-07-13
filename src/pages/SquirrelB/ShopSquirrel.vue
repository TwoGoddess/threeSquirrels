<template>
    <div class="Shop_Squirrel clear">
        <div class="Squirrel_title">
            <img v-lazy="floors.floorHead.pic" :alt="floors.floorHead.name"/>
        </div>
        <div class="Squirrel_goods">
            <goods v-for='(item, index) in goods' :goods="item" :key="index"></goods>
        </div>
    </div>
</template>

<script>
import Goods from '../../components/Goods'

export default {
    props: ['floors'],
    data() {
        return {
            goods: this.floors.products
        }
    },
    components: {
        Goods
    },
    created(){
        console.log(this.floors.products)
    }
}
</script>

<style lang="less">
    .Shop_Squirrel{
        background-color: #f9f9f9;
    }
    .Squirrel_title{
        width: 100%;
        border-top: .3rem solid #f9f9f9;
        border-bottom: .3rem solid #f9f9f9;
        height: 2.5rem;
        line-height: 2.5rem;
        img{
            width: 100%;
            height: auto;
        }
    }
    .Squirrel_goods{
        width: 100%;
        height: 100%;
    }
</style>
