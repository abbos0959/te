import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
   "auth/register",
   async ({ state, navigate, toast }, { rejectWithValue }) => {
      try {
         const config = {
            headers: {
               "Content-Type": "application/x-www-form-urlencoded",
               Accept: "application/json",
            },
         };

         const data = await axios.post(
            `https://toko.ox-sys.com/security/auth_check`,
            state,
            config
         );

         toast.success("Tizimga kirdingiz", {});

         navigate("/customers");
         return data;
         //  console.log("bu date", data, state);
      } catch (error) {
         if (error.response && error.response.data.message) {
            return rejectWithValue(error.response.data.message);
         } else {
            return rejectWithValue(error.message);
         }
      }
   }
);
