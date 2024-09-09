import { createAsyncThunk } from "@reduxjs/toolkit";
import { addReview } from "../headphones";

export const addReviewByHeadphoneId = createAsyncThunk(
  "reviews/addReviewByHeadphoneId",
  async ({ headphoneId, review }, { rejectWithValue, dispatch }) => {
    // optimistic UI
    // const id = nanoid();
    // dispatch(addReviewToReviewSlice({ ...review, id }));
    // dispatch(addReview({ headphoneId, reviewId: id }));

    const response = await fetch(
      `http://localhost:3001/api/review/${headphoneId}`,
      {
        method: "POST",
        body: JSON.stringify(review),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const createdReview = await response.json();

    if (!createdReview) {
      return rejectWithValue("empty result");
    }

    // reload reviews
    dispatch(addReview({ headphoneId, reviewId: createdReview.id }));

    return createdReview;
  }
);
