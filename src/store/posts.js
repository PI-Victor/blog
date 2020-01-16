const state = {
  posts: [
    {
      meta: {
        id: 1,
        title: "Rust async",
        tags: ["rust", "async"]
      },
      content: "#### Post"
    },
    {
      meta: {
        id: 2,
        title: "Developing front-end apps with Vue",
        tags: ["javascript", "frontend", "vue"]
      },
      content:
        "Sed euismod augue quam, ut ornare magna congue a. Phasellus pellentesque mi aliquet tellus vulputate, eget sagittis orci lobortis. Aenean sed lectus posuere, fermentum tellus quis, facilisis massa. Ut condimentum, nisi nec imperdiet dapibus, mauris purus convallis tortor, a interdum turpis turpis dignissim odio. Aenean scelerisque pretium sem, id imperdiet odio. Sed non tellus consectetur, placerat nisi luctus, suscipit mauris. Nullam varius, neque et porttitor hendrerit, mauris mi dapibus elit, vel lobortis ex massa eu massa. Aenean aliquam, mi non viverra congue, massa neque vehicula turpis, vel fringilla ipsum quam vel est. "
    },
    {
      meta: {
        id: 3,
        title: "Deploying to kubernetes",
        tags: ["kubernetes", "systems-engineering"]
      },
      content:
        "Nam aliquet accumsan dignissim. Proin diam magna, dignissim rhoncus urna in, congue molestie dolor. Nullam eu libero nibh. Vivamus id efficitur justo. In venenatis viverra libero sit amet blandit. Aliquam eget feugiat arcu. Donec sit amet diam eget nisi imperdiet porta. Aliquam turpis nunc, varius eu massa eget, semper rhoncus felis. Sed imperdiet pharetra orci in pulvinar. Duis ligula ipsum, porta sit amet ligula vitae, aliquet tincidunt nisl. Cras malesuada, odio sit amet accumsan scelerisque, tortor justo elementum enim, et condimentum sapien risus et libero. In in posuere purus. Suspendisse vel arcu a velit cursus porttitor. Phasellus condimentum tellus a massa venenatis aliquet. Vestibulum imperdiet sollicitudin bibendum. Nulla egestas purus ac nisl porta, vitae elementum diam feugiat. "
    },
    {
      meta: {
        id: 4,
        title: "Devops as a career",
        tags: ["rust", "async"]
      },
      content:
        "Integer elementum quam id lectus interdum, ut rutrum massa consequat. In porta augue sit amet leo maximus, quis ornare velit eleifend. Mauris interdum diam eu eros lacinia fringilla. Praesent eget orci magna. Fusce tempus ipsum lorem, quis tincidunt arcu rhoncus eget. Maecenas viverra mattis lobortis. Sed eu est quis augue semper iaculis sit amet bibendum ex. Nam magna eros, ultricies et odio vitae, pretium hendrerit enim. Duis a nunc sed massa placerat semper in non mi. "
    },
    {
      meta: {
        id: 5,
        title: "Haskell learning difficulty",
        tags: ["javascript", "frontend", "vue"]
      },
      content:
        "Donec nibh justo, ultrices pretium ex in, porttitor pharetra arcu. Integer quis malesuada nulla. Proin posuere, ipsum nec consectetur pulvinar, ligula lorem mollis purus, id ornare magna augue eu augue. Nunc non aliquam enim, ut viverra dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse ac eleifend massa. Nunc erat velit, sollicitudin non urna vel, suscipit lacinia felis. "
    },
    {
      meta: {
        id: 6,
        title: "Sysadmin stories",
        tags: ["kubernetes", "systems-engineering"]
      },
      content:
        "Fusce urna magna, laoreet a dui eu, faucibus vestibulum dui. Cras et aliquam nibh. Vestibulum ultricies et diam quis hendrerit. Pellentesque pellentesque luctus egestas. Donec tellus nisi, ullamcorper et nulla a, placerat fringilla nisi. Nunc at imperdiet nisi. Pellentesque non lacus sit amet leo laoreet egestas. Ut pulvinar nulla eu nisl dignissim, id ultricies arcu egestas. Aliquam convallis, lacus sit amet aliquet iaculis, justo nisl hendrerit eros, eu consectetur ligula quam vel est. Donec sollicitudin lobortis odio, ullamcorper luctus ligula rutrum eu. Donec tristique erat non pellentesque accumsan. Ut lacinia tellus id faucibus sodales. Fusce vulputate ipsum ac elit ornare, vel rutrum sapien iaculis. Sed imperdiet ligula lacus. Duis consectetur dui non erat facilisis lobortis. "
    }
  ]
};

const getters = {
  posts: state => state.posts
};

const actions = {
  filterPost: ({ _ }, postId) =>
    state.posts
      .filter(post => post.meta.id === postId)
      .reduce(post => {
        return post;
      })
};

const mutations = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
};
