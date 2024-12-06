<template>
  <div class="feed">
    <Post v-for="post in postList"
          :key="post.id"
          :post="post"
    />
  </div>
</template>
<script setup lang="ts">
import Post from "@/components/Post.vue";
const props = defineProps(['postList']);
console.log(props.postList);

</script>
<style>
.feed{
  max-width: 800px;
  margin: 0 auto;
}
</style>

