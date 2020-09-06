import {
  init,
  RematchRootState,
  Models,
  ExtractRematchDispatchersFromEffects,
  RematchDispatcher,
} from "@rematch/core";
import models, { RootModel } from "./models";
import loadingPlugin from "@rematch/loading";
import immerPlugin from "@rematch/immer";

const store = init({
  models,
  plugins: [immerPlugin(), loadingPlugin()],
});

export default store;

export const { dispatch } = store;

declare global {
  export type Store = typeof store;

  interface LoadingPlugin<M extends Models> {
    loading: {
      models: { [modelKey in keyof M]: M[modelKey]["name"] };
      effects: {
        [modelKey in keyof M]: ExtractRematchDispatchersFromEffects<
          M[modelKey]["effects"],
          RootModel
        >;
      };
      global: boolean;
    };
  }

  interface LoadingState<M extends Models> {
    loading: {
      global: boolean;
      models: { [K in keyof M]: boolean };
    };
  }

  export type Dispatch = RematchDispatcher<RootModel>;
  export type RootState = RematchRootState<RootModel> & LoadingState<RootModel>;
}
