import { createSlice } from '@reduxjs/toolkit'

import fetchSeats from '../thunks/fetchSeats';

const localStorageData = localStorage.getItem('seats')

const emptyData = {
  seatsOptions: {
    departure: [],
    arrival: [],
  },
  selectedSeats: {
    departure: [],
    arrival: [],
  },
}

const initialState = localStorageData ? JSON.parse(localStorageData) : emptyData
const seatsSlice = createSlice({
  name: 'seatsSlice',
  initialState,
  reducers: {
    addSelectedSeats(state, action) {
      const { number, direction, seatId, seatName, price, priceCoef } =
        action.payload
      const ids = state.selectedSeats[direction].map((item) => item.seatId)
      const sameId = ids.indexOf(seatId)

      if (sameId !== -1) {
        state.selectedSeats[direction][sameId].seats = [
          ...state.selectedSeats[direction][sameId].seats,
          { seat: number, price, priceCoef, passsengerId: null },
        ]
      } else {
        state.selectedSeats[direction] = [
          ...state.selectedSeats[direction],
          {
            seatId,
            seatName,
            seats: [
              {
                seat: number,
                price,
                priceCoef,
                passsengerId: null,
              },
            ],
          },
        ]
      }
    },
  },
  addPassengerId(state, action) {
    const { seat, direction, seatId, passsengerId } = action.payload
    const ids = state.selectedSeats[direction].map((item) => item.seatId)
    const sameId = ids.indexOf(seatId)

    if (sameId !== -1) {
      const allSeats = state.selectedSeats[direction][sameId].seats.map(
        (item) => item.seat
      )
      state.selectedSeats[direction][sameId].seats[
        allSeats.indexOf(seat)
      ].passsengerId = passsengerId
    }
  },
  removeSelectedSeat(state, action) {
    const { number, direction, seatId } = action.payload
    state.selectedSeats[direction].forEach((item) => {
      if (item.seatId === seatId) {
        item.seats = item.seats.filter((el) => el.seat !== number)
      }
    })
  },
  removeAllSelectedSeats(state, action) {
    const { direction, seatId } = action.payload
    state.addSelectedSeats[direction] = state.selectedSeats[direction].filter(
      (item) => item.seatId !== seatId
    )
  },
  removeSeatsata() {
    return emptyData
  },
  extraReducers: {
    [fetchSeats.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [fetchSeats.fulfilled]: (state, action) => {
      state.loading = false
      state.error = null
      const { data, direction } = action.payload
      state.seatsOptions[direction] = data
    },
    [fetchSeats.rejected]: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const {
  addSelectedSeats,
  addPassengerId,
  removeSelectedSeat,
  removeAllSelectedSeats,
  removeSeatsata,
} = seatsSlice.actions;

export default seatsSlice;