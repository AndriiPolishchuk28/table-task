import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { User } from "./types";

axios.defaults.baseURL = BASE_URL;

export const getUsers = createAsyncThunk<
  User[],
  undefined,
  { rejectValue: string }
>("users", async (_, thunkApi) => {
  try {
    const { data } = await axios.get("/users");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
