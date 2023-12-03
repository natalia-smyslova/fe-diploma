import { createSlice } from '@reduxjs/toolkit';

const localStorageData = localStorage.getItem('time');

const emptyData = {
  time: {
    from: {
      min: 0,
      max: 24
    },
    to: {
      min: 0,
      max: 24
    }
  }
}

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData;

const timeSlice = createSlice({
  name: 'timeSlice',
  initialState,
  reducers: {
    removeTime() {
      return emptyData;
    },
    changeTime(state, action) {
      const { name, direction, value } = action.payload;
      state.time[name][direction] = { min: value[0], max: value[1] };
    }
  }
});

export const { removeTime, changeTime } = timeSlice.actions;

export default timeSlice;