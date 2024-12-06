import {Post} from "./Types";

interface State{
    postList: Post[]
}

const state:State = {
    postList:[]
};

const mutations = {
    addPost(state: State, post: Post) {
        state.postList.unshift(post);
    },
    setPostList(state: State, postList: Post[]){
        state.postList = postList;
    },
    deletePost(state: State, postIndex: number){
        state.postList.splice(postIndex,1);
    },
    plusLike(state: State, postId: number){
        for(let i=0; i<state.postList.length; i++){
            if(state.postList[i].id == postId){ state.postList[i].like ++; }
        }
    },
    minusLike(state: State, postId: number){
        for(let i=0; i<state.postList.length; i++){
            if(state.postList[i].id == postId){ state.postList[i].like --; }
        }
    }
};

/* actions 은  비동기처리를 담당하기때문에, 비동기적인 동작확인을 위해 딜레이 추가 */
const actions = {
    fetchPostList({commit}: any){
        try{
            setTimeout(()=>{
                const fetchedPosts: Post[]=[
                    {id:1, user:'사용자1', textContent:'첫 번째 포스트 내용입니다.', like:0, comment:null, createdAt:'2024-12-01 10:00'},
                    {id:2, user:'사용자2', textContent:'두 번째 포스트 내용입니다.', like:10, comment:null, createdAt:'2024-12-01 10:00'},
                    {id:3, user:'사용자3', textContent:'세 번째 포스트 내용입니다.', like:20, comment:null, createdAt:'2024-12-01 10:00'},
                ];
                /* mutations 접근 */
                commit('setPostList',fetchedPosts);
            },1000);
        }catch (error){
            console.log("Error: "+error);
        }
    },
    addPost({commit}: any, post: Post){
        try{
            setTimeout(()=>{
                const size = state.postList.length;
                post.id = size+1;
                post.createdAt = new Date().toString();
                post.like = 0;
                commit('addPost',post,size);
            },1000);
        }catch (error){
            console.log("Error: "+error);
        }

    },
    deletePost({commit}:any, postId: number){
        try{
        setTimeout(()=>{
            for(let i=0; i<state.postList.length; i++ ){
                if(state.postList[i].id === postId){
                    commit('deletePost',i);
                    break;
                }
            }
        },500);
        }catch (error){
            console.log("Error: "+error);
        }
    }
};

const getters = {
    allPostList(state: State):Post[] { return state.postList; }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};