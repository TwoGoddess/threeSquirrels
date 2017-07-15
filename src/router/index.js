import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import SquirrelB from '../pages/SquirrelB/SquirrelB'
import Cart from '../pages/Cart/Cart'
import Mine from '../pages/Mine/Mine'
import FError from '../components/404'

import List from '../pages/Classify/child/List'

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
    {
        path: '/404',
        component: FError
    },
    {
        path: '/List/:id',
        component: List    
    }
]
export default new VueRouter({
    routes
})