import { createSlice } from "@reduxjs/toolkit";

import fetchLastTickets from '../thunks/fetchLastTickets';

const initialState = {
  lastTickets: null,
  loading: false,
  error: null
}

const lastTicketsSlice = createSlice({
  name: 'lastTicketsSlice',
  initialState,
  reducers: {
    removeLastTicketsData() {
      return initialState;
    }
  },
  extraReducers: {
    [fetchLastTickets.pending]: (state) => {
      state.loaing = true;
      state.error = null;
    },
    [fetchLastTickets.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.lastTickets = action.payload.map((ticket, index) => ({
        id: index,
        from: {
          city: ticket.departure.from.city.name,
          station: ticket.departure.from.railway_station_name
        },
        to: {
          city: ticket.departure.to.city.name,
          station: ticket.departure.to.railway_station_name
        },
        minPrice: ticket.departure.min_price,
        conditions: {
          wifi: ticket.departure.have_wifi,
          isExpress: ticket.departure.is_express,
          airConditioning: ticket.departure.have_air_conditioning
        }
      }));
    },
    [fetchLastTickets.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { removeLastTicketsData } = lastTicketsSlice.actions;

export default lastTicketsSlice;