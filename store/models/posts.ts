import { request, RestMethod } from "../../utils/request";

import { Model } from "@rematch/core";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  list: Post[];
  loading: boolean;
}

const posts: Model = {
  name: "posts",
  state: {
    list: [],
    loading: false,
  },
  reducers: {
    addPosts(state: PostState, payload: Post[]): PostState {
      state.list = payload;
      state.loading = false;
      return state;
    },
    deleteOnePost(state: PostState, id: number): PostState {
      const filteredPosts = state.list.filter((post) => post.id !== id);
      state.list = filteredPosts;
      return state;
    },
    setLoading(state: PostState, loadingState: boolean): PostState {
      state.loading = loadingState;
      return state;
    },
  },
  effects: (dispatch: Dispatch) => ({
    async getPostsAsync() {
      dispatch.posts.setLoading(true);
      const url: string = "https://jsonplaceholder.typicode.com/posts";
      const method: RestMethod = RestMethod.GET;
      const response = await request({ url, method });
      dispatch.posts.addPosts(response);
    },
  }),
};

export default posts;
