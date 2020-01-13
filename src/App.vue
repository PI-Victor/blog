<template>
  <v-app>
    <Navigation data-e2e="navigation" :scrollArea="this.$refs" />
    <v-content data-e2e="content">
      <v-sheet id="areaContainer" ref="areaContainer" class="overflow-y-auto" height="800px">
        <router-view></router-view>
      </v-sheet>
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
