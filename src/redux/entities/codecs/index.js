import { createSlice } from "@reduxjs/toolkit";
import { createEntityAdapter } from "@reduxjs/toolkit";
import { getCodecsByHeadphoneId } from "./get-codecs-by-headphone-id";

const entityAdapter = createEntityAdapter();

export const codecsSlice = createSlice({
  name: "codecs",
  initialState: entityAdapter.getInitialState(),
  selectors: {
    selectCodecById: (state, id) => state.entities[id],
  },
  extraReducers: (builder) =>
    builder.addCase(getCodecsByHeadphoneId.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    }),
});

export const { selectCodecById } = codecsSlice.selectors;
