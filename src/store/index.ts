import Vuex from 'vuex'
import MenuStore from "./module/MenuStore";
import PostStore from "./module/PostStore";
import UserStore from "./module/UserStore";
import LikeStore from "./module/LikeStore";

export default new Vuex.Store({
    modules:{
        MenuStore,
        PostStore,
        UserStore,
        LikeStore,
    }
})