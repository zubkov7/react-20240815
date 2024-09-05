import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphones";
import { reviewsSlice } from "./entities/reviews";
import { usersSlice } from "./entities/users";
import { codecsSlice } from "./entities/codecs";

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [codecsSlice.name]: codecsSlice.reducer,
  },
});
