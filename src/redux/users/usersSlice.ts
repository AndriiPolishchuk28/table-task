import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./operations";
import { IFilters, User } from "./types";

type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
  filters: IFilters;
};

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
      });
  },
});

export const { setFilter } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
