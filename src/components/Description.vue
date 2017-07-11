<template>
    <div>
        <tool-bar></tool-bar>
        <swiper></swiper>
    </div>
</template>

<script>
import toolBar from './ToolBar'
import swiper from './Swiper'

export default {
    components: {
        toolBar,
        swiper
    }
}
</script>

<style lang="less">
    .swiper{
        width: 100%;
        height: 414px;
        background-color: #fdffb2;
    }
</style>
