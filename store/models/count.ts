const count = {
  state: 2,
  reducers: {
    increment(state: number, payload: number): number {
      return state + payload;
    },
    decrement(state: number, payload: number): number {
      return state - payload;
    },
  },
  effects: (dispatch: any) => ({
    async incrementAsync(payload: number, _: any): Promise<void> {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
    async decrementAsync(payload: number, _: any): Promise<void> {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.decrement(payload);
    },
  }),
};

export default count;
