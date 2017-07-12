import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//一级路由
import Home from '../pages/home/home'
import Class from '../pages/class/class'
import Market from '../pages/market/market'
import Cart from '../pages/cart/cart'
import Mine from '../pages/mine/mine'

//二级路由
import Recommend from '../pages/home/recommend'
import Nut from '../pages/home/nut'
import Meat from '../pages/home/meat'
import Variety from '../pages/home/variety'
import Snack from '../pages/home/snack'
import Chaoli from '../pages/home/chaoli'
import Tea from '../pages/home/tea'
import Rim from '../pages/home/rim'



export default new Router({
	routes: [
    	{
			path: '/',
			name: 'home',
		 	component: Home,
		 	children: [
		 		{ path: '/', name: 'recommend', component: Recommend },
		 		{ path: '/nut', name: 'nut', component: Nut },
		 		{ path: '/meat', name: 'meat', component: Meat },
		 		{ path: '/variety', name: 'variety', component: Variety },
		 		{ path: '/snack', name: 'snack', component: Snack },
		 		{ path: '/chaoli', name: 'chaoli', component: Chaoli },
		 		{ path: '/tea', name: 'tea', component: Tea },
		 		{ path: '/rim', name: 'rim', component: Rim },
		 	]
		},
		{
			path: '/class',
			name: 'class',
		 	component: Class,
		},
		{
			path: '/market',
			name: 'market',
		 	component: Market,
		},
		{
			path: '/cart',
			name: 'cart',
		 	component: Cart,
		},
		{
			path: '/mine',
			name: 'mine',
		 	component: Mine,
		}
	]
})
