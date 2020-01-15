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
          <a href="https://spdx.org/licenses/CC-BY-4.0.html">CC-BY-4.0</a>
        </span>
      </div>
    </v-col>
  </v-footer>
</template>

<style scoped>
.footerText {
  font-size: 13px;
  color: #928374;
}
#footer {
  background-color: #282828;
}
</style>
