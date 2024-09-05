import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphonesIds } from ".";

export const getHeadphones = createAsyncThunk(
  "headphones/getHeadphones",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/products");

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return selectHeadphonesIds(getState()).length === 0;
    },
  }
);
