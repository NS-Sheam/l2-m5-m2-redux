import { PayloadAction, createSlice } from "@reduxjs/toolkit";
type CounterType = {
  count: number;
  tally: string;
};
const initialState: CounterType = { count: 0, tally: "" };
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      state.tally = state.count % 5 === 0 ? state.tally + "/" : state.tally + ".";
    },
    decrement: (state) => {
      state.count -= 1;
      state.tally = state.tally.slice(0, -1);
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
      let tally = "";
      if (state.count % 5 === 0) {
        tally = state.tally + "/".repeat(action.payload / 5);
      }
      if (state.count % 5 !== 0) {
        tally = state.tally + ".".repeat(action.payload);
      }
      state.tally = tally;
      // state.tally = state.count % 5 !== 0 ? state.tally + ".".repeat(state.count % 5) : state.tally + "/";
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
