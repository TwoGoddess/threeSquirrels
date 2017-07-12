<template>
    <div id="app">
        <squirrel-main></squirrel-main>
    </div>
</template>

<script>

import squirrelMain from './pages/Main'
import axios from 'axios'

export default {
    name: 'app',
    components: {
        squirrelMain
    },
    methods: {
        getData(){
            axios.get("http://m.3songshu.com/mobile/api/index/info?param=%7B%22type%22%3A%22mobile%22%7D")
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    created(){
        // this.getData();
    }
}
</script>

<style>
    @import './assets/css/reset.css';
    @font-face {
        font-family: 'Material Icons';
        font-style: normal;
        font-weight: 400;
        src: local('Material Icons'), local('MaterialIcons-Regular'), url(http://cdn.bootcss.com/material-design-icons/3.0.1/iconfont/MaterialIcons-Regular.woff2) format('woff2');
    }
</style>
