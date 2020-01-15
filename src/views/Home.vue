<template>
  <v-container>
    <template v-for="post in nextPosts()">
      <Preview :post="post" v-bind:key="post.name" />
    </template>
    <v-pagination></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Preview from "@/components/Preview";

export default {
  name: "home",
  components: {
    Preview
  },
  computed: {
    ...mapGetters("posts", ["posts"])
  },
  methods: {
    nextPosts() {
      return this.posts;
    }
  }
};
</script>

<style scoped></style>
