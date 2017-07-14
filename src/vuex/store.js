import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
	totalPrice:0,
	cartList:[]
}
const mutations = {
	addCart:function(state,item){
		//根据id查找
		var _item = state.cartList.find( c=>c.productId === item.productId)
		if(_item){
			_item.count ++;
		}else{
			item['count'] =1;
			state.cartList.push(item);
		}
	}
}

const actions = {
	addCart:function({commit},item){
		commit('addCart',item);
	}
}

const getters = {
	getList:function(){
		return state.cartList;
	}
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})