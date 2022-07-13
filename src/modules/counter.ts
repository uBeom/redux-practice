import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialstate {
  value: number;
}

const initialState: IInitialstate = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase(state) {
      state.value++;
    },
    decrease(state) {
      state.value--;
    },
    increaseAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { increase, decrease, increaseAmount } = counterSlice.actions;
export default counterSlice.reducer;
