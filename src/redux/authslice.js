import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authactions";
const initialState = {
   loading: false,
   userInfo: {},
   userToken: null,
   error: null,
   user: null,
   success: false,
};

const authSlice = createSlice({
   name: "auth",
   initialState,
   reducers: {
      setuser: (state, { payload }) => {
         state.user = payload;
      },
      setlogout: (state, action) => {
         localStorage.removeItem("profile");
         state.user = null;
         console.log("clear");
      },
   },
   extraReducers: {
      [registerUser.pending]: (state) => {
         state.loading = true;
         state.error = null;
      },
      [registerUser.fulfilled]: (state, { payload }) => {
         state.loading = false;
         state.success = true;
         state.userToken = payload?.data?.token;
         state.userInfo = payload?.data;
         localStorage.setItem("profile", JSON.stringify({ ...payload?.data }));
         console.log("payload", payload);
      },
      [registerUser.rejected]: (state, { payload }) => {
         state.loading = false;
         state.error = payload;
      },
   },
});
export const { setuser, setlogout } = authSlice.actions;

export default authSlice.reducer;
