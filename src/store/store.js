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
import trainsSlice from './slices/trainsSlice';
import trainSlice from './slices/trainSlice';
import numberOfPassengersSlice from './slices/numberOfPassengersSlice';
import  sortSlice  from './slices/sortSlice';
import optionsSlice from './slices/optionsSlice';
import priceSlice from './slices/priceSlice';
import seatsSlice from './slices/seatsSlice';
import timeSlice from './slices/timeSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['orderConfirmation', 'lastTickets'],
};

const searchPersistConfig = {
  key: 'search',
  storage,
};

const optionsPersistConfig = {
  key: 'options',
  storage
}

const trainsPersistConfig = {
  key: 'trains',
  storage,
  blacklist: ['loading', 'error'],
};

const trainPersistConfig = {
  key: 'train',
  storage
};

const numberOfPassengersPersistConfig = {
  key: 'numberOfPassengers',
  storage
};

const sortPersistConfig = {
  key: 'sort',
  storage
};

const pricePersistConfig = {
  key: 'price',
  storage
}

const timePersistConfig = {
  key: 'time',
  storage
}

const seatsPersistConfig = {
  key: 'seats',
  storage,
  blacklist: ['loading', 'error'],
}

const rootReducer = combineReducers({
  search: persistReducer(searchPersistConfig, searchSlice.reducer),
  options: persistReducer(optionsPersistConfig, optionsSlice.reducer),
  price: persistReducer(pricePersistConfig, priceSlice.reducer),
  time: persistReducer(timePersistConfig, timeSlice.reducer),
  lastTickets: lastTicketsSlice.reducer,
  trains: persistReducer(trainsPersistConfig, trainsSlice.reducer),
  train: persistReducer(trainPersistConfig, trainSlice.reducer),
  numberOfPassengers: persistReducer(numberOfPassengersPersistConfig, numberOfPassengersSlice.reducer),
  seats: persistReducer(seatsPersistConfig, seatsSlice.reducer),
  sort: persistReducer(sortPersistConfig, sortSlice.reducer),
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