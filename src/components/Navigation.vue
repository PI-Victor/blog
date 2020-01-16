<template>
  <v-card d-flex>
    <v-app-bar app color="#282828" flat tile>
      <v-list-item>
        <v-list-item-avatar size="65px">
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
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                class="mx-1"
                fab
                dark
                small
                v-on="on"
                href="https://github.com/pi-victor"
              >
                <v-icon>mdi-github-circle</v-icon>
              </v-btn>
            </template>
            <span>GitHub</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-btn
                class="mx-1"
                v-on="on"
                fab
                dark
                small
                href="https://stackoverflow.com/story/pivictor"
              >
                <v-icon>mdi-stack-overflow</v-icon>
              </v-btn>
            </template>
            <span>StackOverflow</span>
          </v-tooltip>
        </v-row>
      </v-container>
      <template v-slot:extension>
        <v-tabs slider-color="#8ec07c" centered background-color="#282828" dark>
          <v-tab
            id="tabTabs"
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            ><v-icon left> {{ item.meta.icon }}</v-icon
            >{{ item.meta.title }}</v-tab
          >
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
  }
};
</script>

<style scoped>
.customText {
  font-size: 17px;
  color: #d5cda1;
}

#tabTabs {
  color: #d3869b;
}
</style>
