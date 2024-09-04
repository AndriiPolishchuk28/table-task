import { RootState } from "../store";

export const selectUsers = (state: RootState) => state.users;
export const selectFilters = (state: RootState) => state.filters;
export const selectLoading = (state: RootState) => state.loading;
export const selectError = (state: RootState) => state.error;
