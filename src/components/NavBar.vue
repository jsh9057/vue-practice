<template>
  <div class="navbar">
    <div class="navbar-logo">
      <router-link to="/">아웃스타그램</router-link>
    </div>
    <ul class="navbar-menu">
      <li
          v-for="item in menuItems"
          :key="item.id"
          class="navbar-item"
          :class="{ active: isActive(item.link) }"
      >
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script setup>

import {computed} from "vue";
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const store = useStore();
const route = useRoute();

const menuItems = computed(()=> store.getters.menuItems)
const isActive = (link) => {
  return route.path === link;
}
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  border-radius: 10px;
  padding: 5px 10px;
  position: fixed;
  top: 0;
  width: 97%;
  z-index: 1000;
}
.navbar-logo { font-size: 1.5em; }

.navbar-logo a{
  text-decoration: none;
  font-weight: bold;
  color: black;
}
.navbar-menu{
  list-style: none;
  display: flex;
  padding: 0;
}
.navbar-item{ margin-left: 20px; }
.navbar-item a{
  text-decoration: none;
  color: black;
  transition: color 0.3s;
}
.navbar-item.active a{
  color: #4d8fd0;
}
.navbar-item a:hover{
  color: #4d8fd0;
}
</style>