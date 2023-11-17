/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const localStorageData = localStorage.getItem('sort');
const emptyData = {
  limit: 5,
  sort: { label: 'времени', value: 'date' },
  offset: 0,
  currentPage: 1,
};
const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData;

const sortSlice = createSlice({
  name: 'sortSlice',
  initialState,
  reducers: {
    removeSortData() {
      return emptyData;
    },
    changeLimit(state, action) {
      state.limit = action.payload;
    },
    changeSort(state, action) {
      state.sort = action.payload;
    },
    changeOffset(state, action) {
      state.offset = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    }
  }
});

export const {
  changeLimit,
  changeSort,
  changeOffset,
  setCurrentPage,
  removeSortData,
} = sortSlice.actions;

export default sortSlice;