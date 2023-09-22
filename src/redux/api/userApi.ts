import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getXsrfToken } from "../../utils/helperFunctions";
import { User } from "../slices/userSlice";

export type RegisterDto = {
  email: string;
  password: string;
};

export type LoginDto = {
  email: string;
  password: string;
};

export type UserDto = {
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
  connections: User[];
};

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8282/users",
    credentials: "include",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, RegisterDto>({
      query: (registerCredentials) => ({
        method: "POST",
        url: "/register",
        body: registerCredentials,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation<User, LoginDto>({
      query: (loginCredentials) => ({
        method: "POST",
        url: "/login",
        body: loginCredentials,
        headers: {},
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation<User, User>({
      query: (updatedUserData) => ({
        method: "PUT",
        url: "/update",
        body: updatedUserData,
        headers: {
          "X-XSRF-Token": getXsrfToken(),
        },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useUpdateUserMutation,
} = userApi;
