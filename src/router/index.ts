import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
  },
  {
    path: "/post:postDate",
    name: "Post",
    component: () => import(/* webpackChunkName: "post" */ "@/views/Post.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "post" */ "@/views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
