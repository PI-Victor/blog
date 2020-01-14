<template>
  <v-container>
    <v-card flat>
      <template v-for="post in nextPosts()">
        <Preview :post="post" v-bind:key="post.name" />
      </template>
      <v-pagination></v-pagination>
    </v-card>
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
