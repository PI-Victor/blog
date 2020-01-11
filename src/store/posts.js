const state = {
    posts: [
        {
            config: {
                tags: [],
            },
            content: "a post",
        },
        {
            config: {
                tags: [],
            },
            content: "a second post",
        },
        {
            config: {
                tags: [],
            },
            content: "a third post",
        }
    ]
};

const getters = {
    posts: state => state.posts
};

const actions = {
    
};

const mutations = {};


export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
};