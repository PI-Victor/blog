<template>
  <v-container>
    <v-card flat>
      <template v-for="(post, index) in posts">
        <Preview :post="post" :key="index" />
      </template>
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
  data: () => ({}),
  computed: {
    ...mapGetters("posts", ["posts"])
  }
};
</script>
