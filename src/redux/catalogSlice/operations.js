import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6478e3f3362560649a2e9a16.mockapi.io/";

export const fetchAdverts = createAsyncThunk("catalog/fetchAll", async (page, thunkAPI) => {
  try {
    const response = await axios.get(`/adverts?page=${page}&limit=8`);
    return { data: response.data, page };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
