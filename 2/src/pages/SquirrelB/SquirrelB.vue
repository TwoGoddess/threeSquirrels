<template>
    <div>
        <tool-bar></tool-bar>
        <mine-squirrel></mine-squirrel>
        <shop-squirrel v-for='(item, index) in floors' :floors="item" :key="index"></shop-squirrel>
    </div>
</template>

<script>
import toolBar from '../../components/ToolBar'
import MineSquirrel from './MineSquirrel'
import ShopSquirrel from './ShopSquirrel'

import axios from 'axios'


export default {
    components: {
        toolBar,
        MineSquirrel,
        ShopSquirrel
    },
    data() {
        return {
            floors:{}
        }
    },
    methods:{
        getsquirrel(){
            axios.get("../../static/data/squirrel.json")
            .then(res => {
                // console.log(res.data.data.floors);
                this.floors = res.data.data.floors;
            })
        }
    },
    created(){
        this.getsquirrel();
    }
}
</script>

<style>
   
</style>
