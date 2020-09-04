import { Model } from "@rematch/core";

export interface Count extends Model {
  name: string;
  state: number;
  reducers: {
    increment(state: number, payload: number): number;
    decrement(state: number, payload: number): number;
  };
  effects: (
    disaptch: any
  ) => {
    incrementAsync(payload: number, rootState: number): void;
    decrementAsync(payload: number, rootState: number): void;
  };
}

const count: Count = {
  name: "count",
  state: 2,
  reducers: {
    increment(state, payload) {
      return state + payload;
    },
    decrement(state, payload) {
      return state - payload;
    },
  },
  effects: (dispatch: Dispatch) => ({
    async incrementAsync(payload, _) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
    async decrementAsync(payload, _) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.decrement(payload);
    },
  }),
};

export default count;
