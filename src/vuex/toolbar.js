export default {
    state: {
        title: "",
        isShowSetting: true,
        isShowEdit: true,
        isShowFooter: true
    },
    mutations:{
        modifyBar(state, newTitle){
            state.title = newTitle;
            state.isShowArrow = true;
            state.opacity = 1;
        },
        showHome: (state) => {
            state.isShowMenu = true;
            state.isShowArrow = false;
            state.isShowEdit = false;
            state.isShowSetting = true;
            state.title = "分类";
            state.opacity = 1;
        },
        showHome: (state) => {
            state.isShowMenu = true;
            state.isShowArrow = false;
            state.isShowEdit = false;
            state.isShowSetting = true;
            state.title = "松鼠币商城    ";
            state.opacity = 1;
        },
        showHome: (state) => {
            state.isShowMenu = true;
            state.isShowArrow = false;
            state.isShowEdit = false;
            state.isShowSetting = true;
            state.title = "购物车";
            state.opacity = 1;
        }
    }
}