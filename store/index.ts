import { init, RematchRootState } from "@rematch/core";
import models from "./models";
// import createLoadingPlugin from "@rematch/loading";
import immerPlugin from "@rematch/immer";

// const loadingPlugin = createLoadingPlugin({});

const store = init({
  models,
  plugins: [immerPlugin()],
});

export default store;

export const { dispatch } = store;

declare global {
  export type Store = typeof store;
  export type Dispatch = typeof store.dispatch;
  export type RootState = RematchRootState<typeof models>;
}
