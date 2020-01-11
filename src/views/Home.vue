<template>
  <v-container>
    <Preview />
    <Footer />
  </v-container>
</template>

<script>
import Footer from "@/components/Footer";
import Preview from "@/components/Preview";

export default {
  name: "home",
  components: {
    Preview,
    Footer
  }
};
</script>
