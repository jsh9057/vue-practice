export interface MenuState{
    menuItems: MenuItem[];
    selectedMenu: MenuItem|null;
}

export interface MenuItem{
    id: number;
    name: string;
    link: string;
}

const state:MenuState = {
    menuItems:[
        {id: 1, name:'피드', link:'/'},
        {id: 2, name:'좋아요', link:'/my-feed'},
        {id: 3, name:'프로필', link:'/profile'},
    ],
    selectedMenu: null
};

const mutations = {
    setSelectedMenu(state: MenuState, menu:MenuItem){
        state.selectedMenu = menu;
    }
};

const actions = {
    selectedMenu({commit}:any, menu:MenuItem){
        commit('setSelectedMenu',menu);
    }
};
const getters = {
    menuItems: (state:MenuState) => state.menuItems,
    selectedMenu: (state:MenuState) => state.selectedMenu,
};

export default {
    namespace: true,
    state,
    mutations,
    actions,
    getters
};