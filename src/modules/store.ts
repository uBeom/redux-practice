import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import counter from '@/modules/counter';

const rootReducer = combineReducers({
  counter,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
