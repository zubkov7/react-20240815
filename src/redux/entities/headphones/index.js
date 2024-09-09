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
});

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphonesSlice.selectors;
