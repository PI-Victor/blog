<template>
  <v-container>
    <template v-for="post in nextPosts()">
      <Preview :post="post" v-bind:key="post.name" />
    </template>
    <v-pagination
      id="pagination"
      v-model="page"
      dark
      color="#d3869b"
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
      const currentPage = this.page - 1;
      return this.posts.slice(currentPage * 3, (currentPage + 1) * 3);
    }
  }
};
</script>

<style scoped>
.pagination:button {
  background-color: green;
}
</style>
