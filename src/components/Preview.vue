<template>
  <v-container fluid id="previewContainer">
    <v-card id="preview">
      <v-card-title>
        <router-link
          :to="{
            name: 'posts',
            params: { postId: post.meta.id }
          }"
        >
          <div id="cardTitle">{{ post.meta.title }}</div>
        </router-link>
      </v-card-title>

      <v-card-text id="previewText" v-html="previewText(post.content)">
        <router-link
          :to="{ name: 'posts', params: { postId: post.meta.id } }"
          id="excerpt"
        >
          [...]
        </router-link>
      </v-card-text>
      <v-card-actions>
        <v-chip icon link id="tags" v-for="tag in post.meta.tags" :key="tag">
          <v-icon color="#d65d0e" size="17px" left>mdi-label</v-icon>
          {{ tag }}
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import marked from "marked";

export default {
  props: ["post"],
  methods: {
    previewText: post => marked(post.slice(0, 180))
  }
};
</script>
<style scoped>
#preview {
  background-color: #1d2021;
}

#tags {
  font-size: 13px;
  background-color: #3c3836;
  color: #d3869b;
}

#previewText {
  color: #d5cda1;
}

#previewContainer {
  background-color: #282828;
  max-width: 600px;
}

#excerpt:link {
  color: #8ec07c;
}

#cardTitle {
  color: #fabd2f;
}
a {
  text-decoration: none;
}
</style>
