import { createSlice } from "@reduxjs/toolkit";

const localStorageData = localStorage.getItem('search');

const emptyData = {
  departureCity: '',
  arrivalCity: '',
  departureDate: '',
  arrivalDate: ''
};

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData;

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    getInputValue(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    swapCityValues(state) {
      const { departureCity, arrivalCity } = state;
      state.departureCity = arrivalCity;
      state.arrivalCity = departureCity;
    },
    removeSearchData() {
      return emptyData;
    }
  }
});

export const { getInputValue, swapCityValues, removeSearchData } = searchSlice.actions;

export default searchSlice;