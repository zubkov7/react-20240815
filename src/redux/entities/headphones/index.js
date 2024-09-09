import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { getHeadphones } from "./get-headphones";

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectHeadphoneById: (state, id) => state.entities[id],
    selectHeadphonesIds: (state) => state.ids,
  },
  extraReducers: (builder) =>
    builder.addCase(getHeadphones.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    }),
  reducers: {
    addReview: (state, { payload: { headphoneId, reviewId } }) => {
      state.entities[headphoneId].reviews?.push(reviewId);
    },
  },
});

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphonesSlice.selectors;

export const { addReview } = headphonesSlice.actions;
