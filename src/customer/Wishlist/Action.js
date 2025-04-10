import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you use axios for API calls

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItem",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/wishlist/add", data); // Adjust API endpoint
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);