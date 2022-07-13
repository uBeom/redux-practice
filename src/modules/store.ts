import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counter from '@/modules/counter';
import todos from '@/modules/todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
