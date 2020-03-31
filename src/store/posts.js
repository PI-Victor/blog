import { getAllPosts } from "@/query/posts";

const state = {
  posts: []
};

const getters = {
  posts: state => state.posts
};

const actions = {
  filterPost: async ({ dispatch }, postDate) => {
    dispatch("getPosts");
    return state.posts
      .filter(post => post.meta.date === postDate)
      .reduce(post => post);
  },

  getPosts: async ({ commit }) => {
    try {
      const posts = await getAllPosts();
      let postsData = [];
      posts.map(async post => {
        try {
          const data = await post;
          postsData.push(data);
        } catch (error) {
          // NOTE: unhandled error.
          return error;
        }
      });
      commit("setPosts", postsData);
    } catch (error) {
      err => err;
    }
  }
};

const mutations = {
  setPosts(state, payload) {
    state.posts = payload.sort((a, b) => b.meta.date - a.meta.date);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
