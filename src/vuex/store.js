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

		//和计算属性配合使用
		var a = state.cartList;
		state.cartList=[].concat(state.cartList);
		a=null;
	},
	minus:function(state,item){
		//根据id查找
		var index= state.cartList.findIndex( c =>c.productId === item.productId)
		if(state.cartList[index].count >= 1){
			state.cartList[index].count -- ;
		}
		if(state.cartList[index].count ==0 ){
			state.cartList.splice(index,1);
		}
		var a=state.cartList;
		state.cartList=[].concat(state.cartList);
		a=null;
	}
}

const actions = {
	addCart:function({commit},item){
		commit('addCart',item);
	},
	minus:function({commit},item){
		commit('minus',item);
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