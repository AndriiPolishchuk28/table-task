import { RootState } from "../store";

export const selectUsers = (state: RootState) => state.users;
export const selectFilters = (state: RootState) => state.filters;
