<template>
  <div class="overlay">
    <UserProfile :userInfo="userInfo"/>
  </div>
</template>
<script setup lang="ts">
import UserProfile from '@/components/UserProfile.vue';
import {computed, onMounted, ref} from "vue";
import {useStore} from "vuex";

const store = useStore();
const userInfo = computed(()=> store.getters["UserStore/getUserInfo"])

</script>
<style>
.overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background: #f2f2f2;
  align-items: center; /* 중앙 정렬 */
  z-index: 999; /* 팝업보다 위에 오도록 설정 */
}
</style>