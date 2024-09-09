import { createSlice } from "@reduxjs/toolkit";
import { getReviewsByHeadphoneId } from "./get-reviews-by-headphone-id";
import { createEntityAdapter } from "@reduxjs/toolkit";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getReviewsByHeadphoneId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
  reducers: {
    addReview: (state, { payload }) => {
      entityAdapter.addOne(state, payload);
    },
  },
});

export const { selectReviewById } = reviewsSlice.selectors;

export const { addReview } = reviewsSlice.actions;
