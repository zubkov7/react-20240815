import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneById } from "../headphones";
import { selectReviewById } from ".";

export const getReviewsByHeadphoneId = createAsyncThunk(
  "reviews/getReviewsByHeadphoneId",
  async (headphoneId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?productId=${headphoneId}`
    );

    const result = await response.json();

    if (!result.length) {
      return rejectWithValue("empty result");
    }

    return result;
  },
  {
    condition: (headphoneId, { getState }) => {
      const { reviews } = selectHeadphoneById(getState(), headphoneId) || {};

      if (!reviews?.length) {
        return true;
      }

      for (let reviewId of reviews) {
        const review = selectReviewById(getState(), reviewId);
        if (!review) {
          return true;
        }
      }

      return false;
    },
  }
);
