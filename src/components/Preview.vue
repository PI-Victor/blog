<template>
  <v-container>
    <v-card>
      <v-card-title>{{ post.meta.title }}</v-card-title>
      <v-card-text>
        {{ previewText(post.content) }}
        ...
        <a to="/post">[Continue reading]</a>
      </v-card-text>
      <v-card-actions>
        <v-chip v-for="tag in post.meta.tags" :key="tag">{{ tag }}</v-chip>
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
.v-card {
  background-color: "#FABD2F";
}
</style>
