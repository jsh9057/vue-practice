<template>
  <div class="overlay" >
    <div class="popup">
      <h2 class="popup-title">포스트</h2>
      <textarea
          v-model="newPostContent"
          class="post-textarea"
          placeholder="피드에 게시할 포스트를 작성해주세요."
      ></textarea>
      <div class="button-group">
        <button @click="submitPost"  class="submit-button">작성</button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {Post, User} from "@/store/module/Types";
import {useStore} from "vuex";
const newPostContent = ref('');


const store = useStore();
const userInfo: User = store.getters["UserStore/getUserInfo"];
const userName = userInfo.userName

const emits = defineEmits(['submit-toggle']);

const submitPost = ()=>{
  const post:Post = {textContent: newPostContent.value, user: userName}
  console.log(post);
  store.dispatch("PostStore/addPost",post);
  newPostContent.value=''
  emits('submit-toggle');
}
</script>
<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center; /* 중앙 정렬 */
  z-index: 999; /* 팝업보다 위에 오도록 설정 */
}

.popup {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 650px; /* 팝업 너비 */
  height: 500px;
  animation: fadeIn 0.3s; /* 팝업 애니메이션 */
}

.popup-title {
  margin: 0 0 10px;
  font-size: 18px; /* 제목 크기 */
  color: #333; /* 제목 색상 */
}

.post-textarea {
  width: 97%; /* 텍스트 영역 너비 */
  height: 80%; /* 텍스트 영역 높이 */
  border: 1px solid #ccc; /* 테두리 */
  border-radius: 4px; /* 모서리 둥글게 */
  padding: 5px; /* 내부 여백 */
  font-size: 16px; /* 글씨 크기 */
  resize: none; /* 크기 조절 비활성화 */
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1); /* 내부 그림자 */
}

.button-group {
  float: right;
  padding-right: 1%;
  margin-top: 10px; /* 버튼 그룹과 텍스트 영역 사이 여백 */
  display: flex; /* 버튼을 가로로 배치 */
  justify-content: space-between; /* 버튼 사이 간격 조절 */
}

.submit-button {
  padding: 10px 15px; /* 버튼 패딩 */
  border: none; /* 테두리 없음 */
  border-radius: 4px; /* 모서리 둥글게 */
  font-size: 16px; /* 글씨 크기 */
  cursor: pointer; /* 마우스 오버 시 커서 변경 */
  transition: background-color 0.3s; /* 색상 변화 트랜지션 */
}

.submit-button {
  background-color: black; /* 제출 버튼 색상 */
  color: white; /* 글씨 색상 */
}
.submit-button:hover {
  background-color: #4d8fd0;; /* 제출 버튼 호버 색상 */
}

</style>