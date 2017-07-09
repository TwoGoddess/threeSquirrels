import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import SquirrelB from '../pages/SquirrelB/SquirrelB'
import Cart from '../pages/Cart/Cart'
import Mine from '../pages/Mine/Mine'

const routes = [
    {
        path: '',
        component: Home
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
        path: '/mine',
        component: Mine
    },
]
export default new VueRouter({
    routes
})