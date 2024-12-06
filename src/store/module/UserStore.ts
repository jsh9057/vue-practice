import {User} from "./Types";

interface State{
    user: User
}

const state:State = {
    user: {id: 1, userName: "정승현", email:'jsh9057@gmail.com', memo: "기본계정입니다", }
}

const mutations= {
    setUser(state: State, userInfo: User){
        state.user = userInfo;
    }
}

const actions= {
    updateUser({commit}: any, userInfo: User){
        setTimeout(() => {
            userInfo.id = state.user.id;
            commit('setUser',userInfo);
        }, 300);
    }
}

const getters = {
    getUserInfo(state: State):User { return state.user; }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}