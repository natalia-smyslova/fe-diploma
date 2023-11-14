import { createSlice } from '@reduxjs/toolkit';

const localStorageData = localStorage.getItem('train');

const emptyData = {
  selectedId: null,
  trains: {
    departure: null,
    arrival: null,
  },
  selectedClasses: {
    departure: {
      first: false,
      second: false,
      third: false,
      fourth: false,
    },
    arrival: {
      first: false,
      second: false,
      third: false,
      fourth: false,
    },
  },
  selectedSeats: {
    departure: [],
    arrival: [],
  },
};

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData;

const trainSlice = createSlice({
  name: 'trainSlice',
  initialState,
  reducers: {
    removeTrainData() {
      return emptyData;
    },
    setId(state, action) {
      state.selectedId = action.payload;
    },
    setTrains(state, action) {
      const { value, direction } = action.payload;
      state.trains[direction] = value;
    },
    setSelectedClasses(state, action) {
      const { name, value, direction } = action.payload;
      state.selectedClasses[direction][name] = value;
    },
    setSelectedSeats(state, action) {
      const { name, direction, seat } = action.payload;
      state.selectedSeats[direction] = [
        ...state.selectedSeats[direction],
        { seat, name },
      ]
    },
    removeSelectedClasses(state) {
      state.selectedClasses = emptyData.selectedClasses;
    },
    removeSelectedSeats(state, action) {
      const { direction, seat } = action.payload;
      state.selectedSeats[direction] = state.selectedSeats[direction].filter(
        item => {
          item.seat !== seat
        }
      )
    },
    removeAllSelectedSeats(state) {
      state.selectedCoaches[action.payload] = [];
    },
  },
});

export const {
  removeTrainData,
  setId,
  setTrains,
  setSelectedClasses,
  setSelectedSeats,
  removeSelectedClasses,
  removeSelectedSeats,
  removeAllSelectedSeats,
} = trainSlice.actions;

export default trainSlice;