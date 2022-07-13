/* eslint-disable no-return-assign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  input: string;
  todos: {
    id: number;
    text: string;
    done: boolean;
  }[];
}

const initialState: IInitialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeInput(state, action: PayloadAction<string>) {
      state.input = action.payload;
    },
    insert(
      state,
      action: PayloadAction<{ id: number; text: string; done: boolean }>,
    ) {
      state.todos.push(action.payload);
    },
    toggle(state, action: PayloadAction<number>) {
      // state.todos = state.todos.map(todo =>
      //   todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      // );
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (!todo) return;

      todo.done = !todo.done;
    },
    remove(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { changeInput, insert, toggle, remove } = todoSlice.actions;
export default todoSlice.reducer;
