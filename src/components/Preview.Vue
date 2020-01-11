<template>
  <v-container>
    <v-card>
      <v-card-text v-model="post">{{ post.content }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["post"]
};
</script>