<template>
  <v-app>
    <v-content data-e2e="content" color="navy">
      <Navigation data-e2e="navigation" />
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
  data: () => ({
    //
  }),
  theme: {
    dark: true,
    themes: {
      dark: {
        background: "black"
      }
    }
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
