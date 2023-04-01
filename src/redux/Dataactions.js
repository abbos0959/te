import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const user = JSON.parse(localStorage.getItem("profile"));

export const Data = createAsyncThunk("data/all", async ({}, { rejectWithValue }) => {
   try {
      console.log(user.token);
      const config = {
         headers: {
            Authorization: `Bearer ${user.token}`,
         },
      };

      const data = await axios.get(`https://toko.ox-sys.com/variations`, config);
      console.log(data);
      return data;
   } catch (error) {
      if (error.response && error.response.data.message) {
         return rejectWithValue(error.response.data.message);
      } else {
         return rejectWithValue(error.message);
      }
   }
});
