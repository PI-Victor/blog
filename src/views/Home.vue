<template>
  <div class="home">
    <Posts />
  </div>
</template>

<script lang="ts">
import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    Posts,
  },
};
</script>
