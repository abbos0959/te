import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./Dataactions";
const initialState = {
   loading: false,
   data: [],
   error: null,
   success: false,
};

const dataSlice = createSlice({
   name: "data",
   initialState,
   reducers: {},
   extraReducers: {
      [Data.pending]: (state) => {
         state.loading = true;
         state.error = null;
      },
      [Data.fulfilled]: (state, { payload }) => {
         state.loading = false;
         state.success = true;
         state.data = payload.data;

         console.log("payload", payload);
      },
      [Data.rejected]: (state, { payload }) => {
         state.loading = false;
         state.error = payload;
      },
   },
});

export default dataSlice.reducer;
