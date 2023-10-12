import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({});

const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};