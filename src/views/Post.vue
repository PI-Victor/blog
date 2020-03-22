<template>
  <v-container>
    <v-card id="post">
      <v-card-title id="title">{{ title }}</v-card-title>
      <v-card-text>
        <div class="content" v-html="renderContent()"></div>
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
  import MarkdownIt from "markdown-it";
  import { mapActions } from "vuex";
  import highlightjs from "highlight.js";
  import emoji from "markdown-it-emoji";

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
        const md = new MarkdownIt({
          highlight: (code, language) =>
            highlightjs.highlight(language, code).value
        });
        md.use(emoji);
        return md.render(this.content);
      }
    },
    beforeMount() {
      const postDate = this.$route.params.postDate;
      this.filterPost(postDate).then(post => {
        this.content = post.content;
        this.title = post.meta.title;
        this.tags = post.meta.tags;
      });
    }
  };
</script>
<style>
  #post {
    background-color: #1d2021;
  }
  .content {
    color: #d5cda1;
  }
  #title {
    color: #fabd2f;
  }
  #tags {
    font-size: 13px;
    background-color: #3c3836;
    color: #d3869b;
  }
  .content code {
    background-color: #1d1d11;
  }
</style>
