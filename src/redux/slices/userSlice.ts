import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";

export type User = {
  id: number | null;
  email: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
  headline: string;
  country: string;
  city: string;
  company: string;
  industry: string;
  college: string;
  website: string;
  about: string;
  firstLogin: boolean;
  role: string;
};

type UserState = {
  information: User;
  isLoggedIn: boolean;
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

export const selectLoginStatus = (state: RootState) => state.user.isLoggedIn;
export const selectCurrentUser = (state: RootState) => state.user.information;
// export const selectUserConnections =
//   ([selectCurrentUser], (user) => user?.information?.connections);
