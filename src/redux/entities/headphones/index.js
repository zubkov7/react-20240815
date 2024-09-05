import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedHeadphones.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedHeadphones.map((item) => item.id),
};

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState,
  selectors: {
    selectHeadphoneById: (state, id) => state.entities[id],
    selectHeadphonesIds: (state) => state.ids,
  },
});

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphonesSlice.selectors;
