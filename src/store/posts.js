const state = {

};

const getters = {
  posts: state => state.posts
};

const actions = {
  filterPost: ({ dispatch }, postId) =>
    state.posts.filter(post => post.meta.id === postId).reduce(post => post)
};

const mutations = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
