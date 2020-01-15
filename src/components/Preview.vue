<template>
  <v-container fluid id="previewContainer">
    <v-card id="preview">
      <v-card-title id="cardTitle">{{ post.meta.title }}</v-card-title>
      <v-card-text id="previewText">
        {{ previewText(post.content) }}
        ...
        <router-link to="/posts">{{ post.path }}</router-link>
      </v-card-text>
      <v-card-actions>
        <v-chip
          icon
          id="tags"
          v-for="tag in post.meta.tags"
          :key="tag"
          :to="{ name: post }"
          ><v-icon color="#d5cda1" size="17px" left>mdi-tag</v-icon>
          {{ tag }}</v-chip
        >
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["post"],
  methods: {
    previewText: post => post.slice(0, 300)
  }
};
</script>
<style scoped>
#preview {
  background-color: #1d2021;
}
#tags {
  font-size: 13px;
  background-color: #1d2021;
  color: #d3869b;
}
#previewText {
  color: #d5cda1;
}
#previewContainer {
  background-color: #282828;
  max-width: 600px;
}
#cardTitle {
  color: #fabd2f;
}
</style>
