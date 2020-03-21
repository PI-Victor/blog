<template>
  <v-container>
    <template v-for="post in nextPosts()">
      <Preview :post="post" :key="post.meta.date" />
    </template>
    <v-pagination
      id="pagination"
      v-model="page"
      dark
      color="#d3869b"
      :length="postsLength()"
      @click="nextPosts"
    ></v-pagination>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
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
    ...mapActions("posts", ["getPosts"]),
    nextPosts() {
      const currentPage = this.page - 1;
      return this.posts.slice(currentPage * 3, (currentPage + 1) * 3);
    },
    postsLength() {
      return Math.floor(this.posts.length / 3);
    }
  },
  beforeMount() {
    this.getPosts().then(console.log(this.posts));
  }
};
</script>

<style scoped>
.pagination:button {
  background-color: green;
}
</style>


