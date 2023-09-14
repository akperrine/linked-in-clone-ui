import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { userApi } from "../api/userApi";

interface UserState {
  firstName: string;
  lastName: string;
  email: string;
}
const initialState: UserState = {
  firstName: "",
  lastName: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    logout: (state) => {
      state.firstName = "";
      state.lastName = "";
      state.email = "";
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
