import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";
import { IUserValues } from "./types";

axios.defaults.baseURL = BASE_URL;

export const getUsers = createAsyncThunk<
  IUserValues[],
  undefined,
  { rejectValue: string }
>("users", async (_, thunkApi) => {
  try {
    const { data } = await axios.get<IUserValues[]>("/users");
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue((error as Error).message);
  }
});
