import {Like, Post} from "./Types";

interface State{
    like: Like
}

const state: State = {
    like: { userId: null, postList:[], }
}

const mutations = {
    setLike(state: State ,postList: number[]){
        state.like.postList = postList;
    },
    addLike(state: State, postId: number ){
        state.like.postList.push(postId);
        console.log("like:"+state.like);
    },
    deleteLike(state: State, postId: number){
        for(let i=0 ; i<state.like.postList.length; i++){
            if(state.like.postList[i]===postId){
                state.like.postList.splice(i,1);
                break;
            }
        }
    },
}

const actions = {
    fetchLike({commit, rootState}:any){
        try{
            setTimeout(()=>{
                /* 아마도 실제론 현재 userId를 가져온뒤에, api로 요청해야됨 */
                const userId = rootState.UserStore.user.id;
                console.log("userId: "+userId+" like를 fetch 받으려고 함");

                const fetchedLikePostSet:number[] = [2,3];
                commit('setLike',fetchedLikePostSet);
            }, 300);
        }catch (error){
            console.log("Error: "+error);
        }
    },
    addLike({commit, rootState}:any, postId: number){
        try{
            setTimeout(() => {
                /* add 요청보내기  */
                const userId = rootState.UserStore.user.id;
                console.log("userId: "+userId+" postId: "+postId+"  like add 요청을 보내려고 함");
                commit('addLike',postId);
            },100);
        }catch (error){
            console.log("Error: "+error);
        }
    },
    deleteLike({commit, rootState}:any, postId: number){
        try {
            setTimeout(()=>{
                const userId = rootState.UserStore.user.id;
                console.log("userId: "+userId+" postId: "+postId+"  like delete 요청을 보내려고 함");
                commit('deleteLike',postId)
            }, 100)
        }catch (error){
            console.log("Error: "+error);
        }
    }
}
const getters = {
    allLikePosts(state: State):number[] { return state.like.postList; },
    getIsLiked: (state: State) => (postId: number):boolean => {
        console.log('getIsLiked호출: '+state.like.postList);
        return state.like.postList.includes(postId);
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};