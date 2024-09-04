import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./operations";
import { IUserValues } from "./types";

export interface UsersState {
  users: IUserValues[];
  loading: boolean;
  error: string | null;
  filters: IUserValues;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<{ name: string; value: string }>) {
      const { name, value } = action.payload;
      state.filters = { ...state.filters, [name]: value };
    },
    clearFilter(state, action: PayloadAction<string>) {
      state.filters = { ...state.filters, [action.payload]: "" };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = "Some error with the server";
      });
  },
});

export const { setFilter, clearFilter } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
