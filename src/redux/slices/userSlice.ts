import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "../../utils/Types";

type UserState = {
  information: User;
  isLoggedIn: boolean;
  isLoading: boolean;
};
const initialState: UserState = {
  information: {
    id: null,
    email: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    headline: "",
    country: "",
    city: "",
    company: "",
    industry: "",
    college: "",
    website: "",
    about: "",
    firstLogin: false,
    role: "",
    connections: [],
  },
  isLoggedIn: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.information = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.information = initialState.information;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { login, logout, setUserLoading } = userSlice.actions;
export default userSlice.reducer;

export const selectLoginStatus = (state: RootState) => state.user.isLoggedIn;
export const selectCurrentUser = (state: RootState) => state.user.information;
export const selectisLoading = (state: RootState) => state.user.isLoading;
