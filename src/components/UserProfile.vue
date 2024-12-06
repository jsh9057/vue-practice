<template>
  <div class="profile-page">
    <h1>프로필</h1>
    <div class="profile-info">
      <div class="profile-field">
        <label for="username">닉네임:</label>
        <div class="line-clamp" style="-webkit-line-clamp:1">
          <span v-if="!isEditing">{{ userInfo.userName }}</span>
          <input
              v-if="isEditing"
              type="text"
              v-model="userInfo.userName"
              id="username"
              class="edit-input"
          />
        </div>
      </div>

      <div class="profile-field">
        <label for="email">이메일:</label>
          <div class="line-clamp" style="-webkit-line-clamp:1">
            <span v-if="!isEditing">{{ userInfo.email }}</span>
            <input
                v-if="isEditing"
                type="email"
                v-model="userInfo.email"
                id="email"
                class="edit-input"
            />
          </div>
      </div>

      <div class="profile-field">
          <label for="bio">자기소개:</label>
          <div class="line-clamp" style="-webkit-line-clamp:4">
            <span v-if="!isEditing">{{ userInfo.memo }}</span>
            <textarea
                v-if="isEditing"
                v-model="userInfo.memo"
                id="bio"
                class="edit-input"
            ></textarea>
        </div>
      </div>
      <div class="button-group">
        <button v-if="!isEditing" @click="editProfile" class="edit-button">수정</button>
        <button v-if="isEditing" @click="saveProfile" class="save-button">저장</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {User} from "@/store/module/Types.js"
import {ref} from "vue";
import store from "@/store";

const props = defineProps<{userInfo: User}>();
const userInfo = props.userInfo;

console.log(userInfo);

const isEditing =ref(false);
const editProfile = ()=>{
  isEditing.value = true;
}

const saveProfile = ()=>{
  store.commit("UserStore/setUser",userInfo);
  isEditing.value = false;
}
</script>

<style scoped>
.profile-page {
  width: 50%;
  height: auto;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  color: #333;
}

.profile-info {
  margin-top: 20px;
}

.profile-field {
  margin-bottom: 30px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

.line-clamp{
  height: 70px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.edit-input {
  width: 92%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
.button-group{
  float: right;
}
.edit-button,
.save-button {
  padding: 10px 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button:hover,
.save-button:hover {
  background-color: #4d8fd0;
}
</style>