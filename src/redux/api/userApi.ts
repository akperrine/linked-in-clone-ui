import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type User = {
  id: number;
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
  role: string;
};

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
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = userApi;
