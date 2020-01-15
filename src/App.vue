<template>
  <v-app id="inspire">
    <Navigation data-e2e="navigation" />
    <v-content data-e2e="content" id="mainContent" d-flex>
      <router-view></router-view>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
  watch: {
    $route: {
      handler: to => {
        document.title = to.meta.title || "PI-Victor's blog";
      },
      immediate: true
    }
  }
};
</script>

<style scoped>
#content {
  background-color: #282828;
  width: 500px;
}
#mainContent {
  background-color: #282828;
}

#inspire {
  background-color: #282828;
}
</style>
