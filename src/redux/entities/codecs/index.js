import { createSlice } from "@reduxjs/toolkit";
import { normalizedCodecs } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedCodecs.reduce((acc, item) => {
    acc[item.id] = item;

    return acc;
  }, {}),
  ids: normalizedCodecs.map((item) => item.id),
};

export const codecsSlice = createSlice({
  name: "codecs",
  initialState,
  selectors: {
    selectCodecById: (state, id) => state.entities[id],
  },
});

export const { selectCodecById } = codecsSlice.selectors;
