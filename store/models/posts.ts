import { RestMethod, request } from "../../utils/request";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostState {
  list: Post[];
}

const posts = {
  state: {
    list: [],
  },
  reducers: {
    addPosts(state: PostState, payload: Post[]): PostState {
      state.list = payload;
      return state;
    },
    deleteOnePost(state: PostState, id: number): PostState {
      const filteredPosts = state.list.filter((post) => post.id !== id);
      state.list = filteredPosts;
      return state;
    },
  },
  effects: (dispatch: any) => ({
    async getPostsAsync() {
      const url: string = "https://jsonplaceholder.typicode.com/posts";
      const method: RestMethod = RestMethod.GET;
      const response = await request({ url, method });
      dispatch.posts.addPosts(response);
    },
  }),
};

export default posts;
