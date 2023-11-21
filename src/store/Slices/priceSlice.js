import { createSlice } from '@reduxjs/toolkit';

const localStorageData = localStorage.getItem('price');

const emptyData = {
  price: {
    min: 0,
    max: null
  }
}

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData;

const priceSlice = createSlice({
  name: 'priceSlice',
  initialState,
  reducers: {
    removePrice() {
      return emptyData;
    },
    changePrice(state, action) {
      state.price.min = action.payload[0];
      state.price.max = action.payload[1];
    }
  }
});

export const { removePrice, changePrice } = priceSlice.actions;

export default priceSlice;