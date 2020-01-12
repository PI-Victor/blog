<template>
  <v-card>
    <v-toolbar
      extended
      flat
      tile
      dark
      elevation="0"
      height="100px"
      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    >
      <v-container>
        <v-list-item>
          <v-list-item-avatar>
            <img src="https://avatars1.githubusercontent.com/u/6294120?s=460&v=4" alt="Victor" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <div class="customText">Victor Palade</div>
              <div class="customText">Software Engineer</div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-container>
      <v-spacer></v-spacer>
      <v-btn class="mx-1" fab small href="https://github.com/pi-victor">
        <v-icon dark>mdi-github-circle</v-icon>
      </v-btn>
      <v-btn class="mx-1" fab small href="https://stackoverflow.com/story/pivictor">
        <v-icon dark>mdi-stack-overflow</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs centered dark background-color="transparent">
          <v-tab v-for="(item, index) in items" :key="index" :to="item.path">{{item.meta.title}}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$router.options.routes.filter(route => route.navigation);
    }
  }
};
</script>

<style scoped>
.customText {
  font-size: 17px;
}
</style>