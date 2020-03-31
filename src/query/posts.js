import Axios from "axios";

import { dates } from "@/data/github";

const baseUri = "https://raw.githubusercontent.com/PI-Victor/blog/master/posts";

export const getPostsData = async postDate => {
  let post = {};

  try {
    const { data } = await Axios.get(`${baseUri}/${postDate}/post.md`);
    post.content = data;
  } catch (error) {
    post.error = error;
  }

  try {
    const { data } = await Axios.get(`${baseUri}/${postDate}/meta.json`);
    post.meta = data;
  } catch (error) {
    post.error = error;
  }
  post.meta.date = postDate;
  return post;
};

export const getAllPosts = async () =>
  dates.map(async date => await getPostsData(date));
