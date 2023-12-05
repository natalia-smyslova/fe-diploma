import { createSlice } from '@reduxjs/toolkit';

const localStorageData = localStorage.getItem('numberOfPassengers');

const emptyData = {
  numberOfPassengers: {
    departure: {
      adults: 0,
      children: 0,
      babies: 0,
    },
    arrival: {
      adults: 0,
      children: 0,
      babies: 0,
    },
  },
  maxNumberOfAdults: 9,
  maxNumberOfChildren: {
    departure: 6,
    arrival: 6,
  },
  maxNumberOfBabies: {
    departure: 9,
    arrival: 9,
  },
}

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData;

const numberOfPassengersSlice = createSlice({
  name: 'numberOfPassengersSlice',
  initialState,
  reducers: {
    removePassengersData() {
      return emptyData
    },
    removePassengersDirection(state, action) {
      state.numberOfPassengers[action.payload] =
        emptyData.numberOfPassengers[action.payload]
    },
    setNumberOfPassengers(state, action) {
      const { age, direction, value } = action.payload
      state.numberOfPassengers[direction][age] = value
    },
    setMaxNumberOfAdults(state, action) {
      const { direction, value } = action.payload;
      state.maxNumberOfAdults[direction] = value;
    },
    setMaxNumberOfChildren(state, action) {
      const { direction, value } = action.payload
      state.maxNumberOfChildren[direction] = value
    },
    setMaxNumberOfBabies(state, action) {
      const { direction, value } = action.payload
      state.maxNumberOfBabies[direction] = value
    },
  },
})

export const {
  removePassengersData,
  removePassengersDirection,
  setNumberOfPassengers,
  setMaxNumberOfAdults,
  setMaxNumberOfChildren,
  setMaxNumberOfBabies,
} = numberOfPassengersSlice.actions

export default numberOfPassengersSlice
