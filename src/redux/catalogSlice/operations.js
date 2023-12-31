import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6478e3f3362560649a2e9a16.mockapi.io/";

export const fetchAdverts = createAsyncThunk("catalog/fetchAll", async (page, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
