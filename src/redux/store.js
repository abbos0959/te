import { configureStore } from "@reduxjs/toolkit";
import authslice from "./authslice";
import dataslice from "./dataslice";

const store = configureStore({
   reducer: {
      auth: authslice,
      data: dataslice,
   },
});
export default store;
