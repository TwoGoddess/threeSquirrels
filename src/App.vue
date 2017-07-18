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
    html{
        overflow-x: hidden;
    }
</style>
