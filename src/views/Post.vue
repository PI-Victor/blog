<template>
  <v-container>
    <v-card>
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
        <div v-html="renderContent()"></div>
      </v-card-text>
      <v-card-actions>
        <v-chip icon link id="tags" v-for="tag in tags" :key="tag">
          <v-icon color="#d65d0e" size="17px" left>mdi-label</v-icon>
          {{ tag }}
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import marked from "marked";
import { mapActions } from "vuex";
import state from "@/state/state";

export default {
  data: () => ({
    post: {},
    title: "",
    content: "",
    tags: []
  }),
  computed: {},
  methods: {
    ...mapActions("posts", ["filterPost"]),
    renderContent() {
      return marked(this.content);
    }
  },
  beforeMount() {
    const postId = parseInt(this.$route.params.postId);
    this.filterPost(postId).then(post => {
      this.content = post.content;
      this.title = post.meta.title;
      this.tags = post.meta.tags;
    });
  }
};
</script>
