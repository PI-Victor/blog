import { postsDate } from "@/data/github";
import { getPosts } from "@/query/posts";

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

const actions = {
  filterPost: async (_, postDate) =>
    state.posts
      .filter(post => post.meta.date === postDate)
      .reduce(post => post),
  getPosts: async ({ commit }) => {
    try {
      const result = await getPosts(postsDate);
      commit("setPosts", result);
    } catch (error) {
      err => err;
    }
  }
};

const mutations = {
  setPosts(state, payload) {
    Promise.all(payload).then(posts => {
      posts.map(post => {
        state.posts = [].concat(post);
      });
    });
    state.posts.sort((a, b) => b - a);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
