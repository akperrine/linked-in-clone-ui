import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getXsrfToken } from "../../utils/helperFunctions";
import { LoginDto, PostType, RegisterDto, User } from "../../utils/Types";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8282",
    credentials: "include",
  }),
  tagTypes: ["user", "posts"],
  endpoints: (builder) => ({
    registerUser: builder.mutation<User, RegisterDto>({
      query: (registerCredentials) => ({
        method: "POST",
        url: "/users/register",
        body: registerCredentials,
      }),
      invalidatesTags: ["user"],
    }),
    loginUser: builder.mutation<User, LoginDto>({
      query: (loginCredentials) => ({
        method: "POST",
        url: "/users/login",
        body: loginCredentials,
        headers: {},
      }),
      invalidatesTags: ["user"],
    }),
    updateUser: builder.mutation<User, User>({
      query: (updatedUserData) => ({
        method: "PUT",
        url: "/users/update",
        body: updatedUserData,
        headers: {
          "X-XSRF-Token": getXsrfToken(),
        },
      }),
      invalidatesTags: ["user"],
    }),
    getPosts: builder.query({
      query: () => "/posts",
    }),
    addPost: builder.mutation<PostType, PostType>({
      query: (addPost) => ({
        method: "Post",
        url: "/posts/new",
        body: addPost,
        headers: {
          "X-XSRF-Token": getXsrfToken(),
        },
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useUpdateUserMutation,
  useGetPostsQuery,
  useAddPostMutation,
} = appApi;
