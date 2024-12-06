<template>
  <div id="app">
    <NavBar/>
    <div class="container">
        <router-view class="content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<style scoped>
#app{
  display: flex;
}
.container{
  display: flex;
  height: 100%;
  width: 100%;
  background: #f2f2f2;
}
.content{
  margin-top: 60px;
}

</style>