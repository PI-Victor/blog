<template>
  <v-footer app id="footer" padless class="center-text">
    <v-col class="text-center">
      <div class="footerText">
        <span>
          Made in
          <v-icon color="red">mdi-hospital-box</v-icon>by Victor Palade.
        </span>
        <span>
          &copy; {{ new Date().getFullYear() }}
          <a id="license-link" href="https://spdx.org/licenses/CC-BY-4.0.html"
            >CC-BY-4.0</a
          >
        </span>
      </div>
    </v-col>
  </v-footer>
</template>

<style scoped>
#footer {
  color: #83a598;
  background-color: #282828;
}

#license-link {
  color: #8ec07c;
}
</style>
