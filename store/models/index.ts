import count from "./count";
import posts from "./posts";
import { Models } from "@rematch/core";

export interface RootModel extends Models {
  count: typeof count;
  posts: typeof posts;
}

const models: RootModel = {
  count,
  posts,
};

export default models;
