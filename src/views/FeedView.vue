<template>
    <div class="feed-view">
      <Feed class="content" :postList="postList"/>
      <div class="post-creator">
        <button @click="togglePopup" :class="{'active':isActive}" class="add-button">{{buttonText}}</button>
        <Transition name="slide">
          <CreatePost v-if="isPopupVisible"
                    :show="isPopupVisible"
                    :closePopup="togglePopup"
                    @submit-toggle="submitPost"/>
        </Transition>
      </div>
  </div>

</template>

<script setup lang="ts">
import {useStore} from "vuex";
import Feed from "@/components/Feed.vue";
import {computed, onMounted, ref} from "vue";
import CreatePost from "@/components/CreatePost.vue";
import {Post} from "@/store/module/Types";

const store = useStore();

const postList = computed(()=> store.getters["PostStore/allPostList"] );

const fetchPostList = () =>{
  store.dispatch("PostStore/fetchPostList");
}
const fetchLikes = () =>{
  store.dispatch("LikeStore/fetchLike");
}

onMounted(()=>{
  console.log(postList.value.length);
  if(postList.value.length==0){
    fetchPostList();
    fetchLikes();
  }

});

// 팝업
const isPopupVisible= ref(false);
const isActive = ref(false);
const buttonText = ref('+');

function togglePopup() {
  isPopupVisible.value = !isPopupVisible.value;
  isActive.value = !isActive.value;
  if(buttonText.value === '+'){
    buttonText.value = '-';
  }else{
    buttonText.value = '+';
  }

}
function submitPost() {
  togglePopup();
}

</script>
<style scoped>


feed-view{
  display: flex;
}
.content{
  margin-right: auto;
  margin-left: auto;
}
/* 포스트 생성 */
.post-creator {
}

.add-button {
  font-size: 24px;
  background-color: black;
  color: white;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 7%;
  right: 10%;
  z-index: 1000;
}
.add-button:hover{
  background-color: #4d8fd0;
}
.add-button.active{
  //background-color: #4d8fd0;
}
/* 애니메이션 효과 */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from{
  transform: translateY(100%); /* 아래에서 올라옴 */
}

.slide-leave-to {
  transform: translateY(100%); /* 아래로 내려감 */
}
</style>