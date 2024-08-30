import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUsers } from "./operations";
import { User } from "./types";

type UsersState = {
  users: User[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
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

// export const { addCar, deleteCar, increasePage, resetCars } =
//   usersSlice.actions;

export const usersReducer = usersSlice.reducer;
