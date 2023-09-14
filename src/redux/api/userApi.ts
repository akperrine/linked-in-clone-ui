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

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8282/users",
    credentials: "include",
  }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    registerUser: builder.query<User, void>({
      query: () => "/register",
      providesTags: ["user"],
    }),
    loginUser: builder.query<User, void>({
      query: () => "/login",
      providesTags: ["user"],
    }),
  }),
});

export const { useRegisterUserQuery, useLoginUserQuery } = userApi;
