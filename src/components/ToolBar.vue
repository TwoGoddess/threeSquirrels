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
        height: 3rem;
        z-index: 10;
        p{
            font-size: 1.1rem;
            text-align: center;
            width: 100%;
            line-height: 3rem;
            background: #fff;
        }
        button{
            position: absolute;
            font-size: 2rem;
            left: .5rem;
            line-height: 3rem;
        }
    }
</style>