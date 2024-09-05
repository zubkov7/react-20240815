import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphones";
import { reviewsSlice } from "./entities/reviews";
import { usersSlice } from "./entities/users";
import { codecsSlice } from "./entities/codecs";
import { cartSlice } from "./ui/cart/cart";
import { requestSlice } from "./ui/request/request";

// const logger = () => (next) => (action) => {
//   console.log(action);
//   next(action);
// };

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [codecsSlice.name]: codecsSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [requestSlice.name]: requestSlice.reducer,
  },
  // middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(logger),
});
