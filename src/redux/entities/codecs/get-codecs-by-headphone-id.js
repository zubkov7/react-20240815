import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneById } from "../headphones";
import { selectCodecById } from ".";

export const getCodecsByHeadphoneId = createAsyncThunk(
  "codecs/getCodecsByHeadphoneId",
  async (headphoneId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/codecs?productId=${headphoneId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (headphoneId, { getState }) => {
      const { codecs } = selectHeadphoneById(getState(), headphoneId) || {};

      if (!codecs?.length) {
        return true;
      }

      for (let codecId of codecs) {
        if (!selectCodecById(getState(), codecId)) {
          return true;
        }
      }

      return false;
    },
  }
);
