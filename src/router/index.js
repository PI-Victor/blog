import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Post from "@/views/Post.vue";
import Projects from "@/views/Projects";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "index",
      redirect: { name: "home" }
    },
    {
      path: "/home",
      name: "home",
      meta: { title: "Home", icon: "mdi-home" },
      component: Home,
      navigation: true
    },
    {
      path: "/projects",
      name: "projects",
      meta: { title: "Projects", icon: "mdi-worker" },
      component: Projects,
      navigation: true
    },
    {
      path: "/about",
      name: "about",
      meta: { title: "About", icon: "mdi-information-variant" },
      component: About,
      navigation: true
    },
    {
      path: "/posts/:postId",
      name: "posts",
      meta: { title: "Post" },
      component: Post
    }
  ]
});
