<template>
  <v-container>
    <template v-for="post in nextPosts()">
      <Preview :post="post" v-bind:key="post.name" />
    </template>
    <v-pagination
      v-model="page"
      :length="Math.floor(this.posts.length / 3)"
      @click="nextPosts()"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Preview from "@/components/Preview";

export default {
  data: () => ({
    page: 1
  }),
  components: {
    Preview
  },
  computed: {
    ...mapGetters("posts", ["posts"])
  },
  methods: {
    nextPosts() {
      if (this.page <= 1) {
        return this.posts.slice(0, this.page * 3);
      }
      return this.posts.slice(0, (this.page + 1) * 3);
    }
  }
};
</script>
