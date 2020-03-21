import axios from "axios";

import Axios from "axios";

const baseUri = "https://raw.githubusercontent.com/PI-Victor/blog/master/posts";

export const getPostsData = async postDate => {
  let post = {};

  try {
    const data = await Axios.get(`${baseUri}/${postDate}/post.md`).then(
      resp => resp.data
    );
    post.content = data;
  } catch (error) {
    post.error = error;
  }

  try {
    const data = await Axios.get(`${baseUri}/${postDate}/meta.json`).then(
      resp => resp.data
    );
    post.meta = data;
  } catch (error) {
    post.error = error;
  }
  post.meta.date = parseInt(postDate);
  return post;
};

export const getPosts = async postsData =>
  postsData.map(async date => await getPostsData(date));
