import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import SquirrelB from '../pages/SquirrelB/SquirrelB'
import Cart from '../pages/Cart/Cart'
import Mine from '../pages/Mine/Mine'
import FError from '../components/404'

import MineList from '../components/mine/mineList'
import Fukuan from '../components/mine/fukuan'
import Fahuo from '../components/mine/fahuo'
import Shouhuo from '../components/mine/shouhuo'
import Pingjia from '../components/mine/pingjia'
import Shouhou from '../components/mine/shouhou'
import List from '../pages/Classify/child/List'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/classify',
        component: Classify
    },
    {
        path: '/squirrelB',
        component: SquirrelB
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/Mine',
        name: ' Mine',
        component: Mine,
    },
    {
        path: '/404',
        component: FError
    },
    {
        path: '/List/:id',
        component: List    
    },
    {
        path: '/mineList',
        name: 'mineList',
        component: MineList,
    },
    {
        path: '/fukuan',
        name: 'fukuan',
        component: Fukuan,
    },
    {
        path: '/fahuo',
        name: 'fahuo',
        component: Fahuo,
    },
    {
        path: '/shouhuo',
        name: 'shouhuo',
        component: Shouhuo,
    },
    {
        path: '/pingjia',
        name: 'pingjia',
        component: Pingjia,
    },
    {
        path: '/shouhou',
        name: 'shouhou',
        component: Shouhou,
    },
]
export default new VueRouter({
  
    routes
})