import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchSlice from './slices/searchSlice';
import lastTicketsSlice from './slices/lastTicketsSlice';

import trainsSlice from './Slices/trainsSlice';
// import  sortSlice  from './Slices/sortSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['orderConfirmation', 'lastTickets'],
};

const searchPersistConfig = {
  key: 'search',
  storage,
};

const trainsPersistConfig = {
  key: 'trains',
  storage,
  blacklist: ['loading', 'error'],
};

const rootReducer = combineReducers({
  search: persistReducer(searchPersistConfig, searchSlice.reducer),
  lastTickets: lastTicketsSlice.reducer,
  // sort: persistReducer(sortPersistConfig, sortSlice.reducer),
  trains: persistReducer(trainsPersistConfig, trainsSlice.reducer),
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;