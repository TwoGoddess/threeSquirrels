<template>
    <div id="app">
        <sfooter></sfooter>
    </div>
</template>

<script>

import sfooter from './pages/Footer'

export default {
    name: 'app',
    components: {
        sfooter
    },
    // methods: {
    //     getData(){
    //         axios.get("http://m.3songshu.com/mobile/api/index/info?param=%7B%22type%22%3A%22mobile%22%7D")
    //         .then(function (res) {
    //             console.log(res);
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    //     }
    // },
    // created(){
    //     this.getData();
    // }
}
</script>

<style lang="less">
    @import './assets/css/reset.css';
    @color: red;
    h1{
        color: @color;
    }
    .footer{
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        justify-content: space-around;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        background-color: #ddd;
    }
</style>
