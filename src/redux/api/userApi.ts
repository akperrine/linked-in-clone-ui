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
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation<
      User,
      { updatedUserData: User; xsrfToken: string }
    >({
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
