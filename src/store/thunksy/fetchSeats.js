import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchSeats = createAsyncThunk(
  'seats/fetchSeats',
  async({ url, direction }, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return { data, direction };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchSeats;