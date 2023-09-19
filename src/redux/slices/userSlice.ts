import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl?: string;
  headline?: string;
  country?: string;
  city?: string;
  company?: string;
  industry?: string;
  college?: string;
  website?: string;
  about?: string;
  role?: string;
};

type UserState = {
  information: User;
  isLoggedIn: boolean;
};
const initialState: UserState = {
  information: {
    id: 0,
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
    role: "",
  },
  isLoggedIn: false,
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
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
