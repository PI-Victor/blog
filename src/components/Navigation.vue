<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      dark
      color="#5C6BC0"
      prominent
      src="https://picsum.photos/1920/1080?random"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(102,115,201,.7), rgba(38,32,90,.7)"
        ></v-img>
      </template>
      <v-list-item>
        <v-list-item-avatar>
          <img
            src="https://avatars1.githubusercontent.com/u/6294120?s=460&v=4"
            alt="Victor"
          />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            <div class="customText">Victor Palade</div>
            <div class="customText">Software Engineer</div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-spacer></v-spacer>
      <v-container>
        <v-row justify="end">
          <v-btn class="mx-1" fab small href="https://github.com/pi-victor">
            <v-icon dark>mdi-github-circle</v-icon>
          </v-btn>
          <v-btn
            class="mx-1"
            fab
            small
            href="https://stackoverflow.com/story/pivictor"
          >
            <v-icon dark>mdi-stack-overflow</v-icon>
          </v-btn>
        </v-row>
      </v-container>
      <template v-slot:extension>
        <v-tabs centered dark background-color="transparent">
          <v-tab v-for="(item, index) in items" :key="index" :to="item.path">{{
            item.meta.title
          }}</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  props: ["scrollArea"],
  computed: {
    items() {
      return this.$router.options.routes.filter(route => route.navigation);
    }
  },
  mounted() {
    //console.log(this.scrollArea.areaContainer);
  }
};
</script>

<style scoped>
.customText {
  font-size: 17px;
}
</style>
