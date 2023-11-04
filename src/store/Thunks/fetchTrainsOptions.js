import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchTrainsOptions = createAsyncThunk(
  'trains/fetchTrainsOptions',
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Server Error');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export default fetchTrainsOptions;