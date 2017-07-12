<template>
    <div class="header">
        <button v-if="false" @click="goodsBack">＜</button>
        <p>{{ title }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title: "松鼠币商城"
        }
    },
    methods:{
        goodsBack(){
            window.history.back();
        }
    }
}
</script>

<style lang="less">
    .header{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 43px;
        z-index: 10;
        p{
            font-size: 17px;
            text-align: center;
            width: 100%;
            line-height: 43px;
            background: #fff;
        }
        button{
            position: absolute;
            font-size: 25px;
            left: .2rem;
            line-height: 43px;
        }
    }
</style>