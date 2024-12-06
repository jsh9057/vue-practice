<template>
  <div class="post">
    <div class="writer">
      <div class="group">
        <a>{{post.user}}</a>
      </div>
    </div>
    <div class="content">
      <div class="content-img">
      </div>
      <div class="content-community">
        <div class="like-state">
          <a @click="likeClick" v-if="!likeState" >🩶</a>
          <a @click="likeClick" v-if="likeState" >❤️</a>
        </div>
        <a class="item-count">{{post.like}}</a>
<!--        <a class="comment" >💬</a>-->
<!--        <a class="item-count">{{post.comment}}</a>-->
        <a class="delete" @click="deletePost">🗑️</a>
      </div>
      <div class="writer">
        <div class="group">
          <a>{{post.user}}</a>
        </div>
      </div>
      <div class="content-text">
        <div class="line-clamp" style="-webkit-line-clamp:3">
          <span>{{post.textContent}}</span>
        </div>
      </div>
    </div>
    <span class="timestamp">{{post.createdAt}}</span>
  </div>
</template>

<script setup lang="ts">
import {Post} from "@/store/module/Types"
import {useStore} from "vuex";
import {computed} from "vue";

const props = defineProps<{post: Post}>();
const post = props.post;
const store = useStore()

const deletePost = ()=> {
  store.dispatch("PostStore/deletePost", post.id);
}

const postId = post.id;
const likeState = computed(()=>store.getters["LikeStore/getIsLiked"](postId));

function likeClick(){
  console.log("likeState: "+likeState.value);
  if(!likeState.value){
    try {
      store.dispatch("LikeStore/addLike", postId);
      store.commit("PostStore/plusLike",postId);
    }catch (error){
      console.log(error);
    }
  }
  else{
    try {
      store.dispatch("LikeStore/deleteLike", postId);
      store.commit("PostStore/minusLike",postId);
    }catch (error){
      console.log(error)
    }
  }
}

</script>
<style>
.post{
  width: 600px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  background-color: #f9f9f9;
}
.writer{
  font-size: 14px;
  font-weight: bold;
}
.content{
  padding-bottom: 10px;
}
.content-img{
  height: 500px;
  background-color: black;
}
.timestamp{
  font-size: 0.8em;
  color: gray;
}
.content-community{
  font-size: 25px;
  display: flex;
  height: 40px;
}
.content-community a{
  cursor: pointer;
  margin-right: 10px;

}
.content-text{
  padding-top: 1%;
  display: flex;
  padding-right: 8%;
  white-space: pre-line;
}
.item-count{
  padding-top: 3%;
  font-weight: bold;
  font-size: 10px;
}
.content-community a:hover{
  font-size: 40px;
  transition: font-size 0.5s;
}
.line-clamp{
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>