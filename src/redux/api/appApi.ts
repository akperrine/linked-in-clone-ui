import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { encodedToJpegUrl, getXsrfToken } from "../../utils/helperFunctions";
import {
  ConnectionDto,
  LoginDto,
  PostType,
  RegisterDto,
  User,
} from "../../utils/Types";

export const appApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8282",
    credentials: "include",
  }),
  tagTypes: ["user", "posts"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
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
      transformResponse: (response: User) => {
        if (response.imageUrl) {
          response.imageUrl = encodedToJpegUrl(response.imageUrl);
        }
        return response;
      },
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
      transformResponse: (response: User) => {
        if (response.imageUrl) {
          response.imageUrl = encodedToJpegUrl(response.imageUrl);
        }
        return response;
      },
    }),
    searchUser: builder.mutation<User[], string>({
      query: (searchString) => ({
        method: "POST",
        url: `/users/search/${searchString}`,
        headers: {
          "X-XSRF-Token": getXsrfToken(),
        },
      }),
      invalidatesTags: ["user"],
      transformResponse: (response: User[]) => {
        const usersWithImages = response.map((user) => {
          if (user.imageUrl) {
            user.imageUrl = encodedToJpegUrl(user.imageUrl);
          }
          return user;
        });
        return usersWithImages;
      },
    }),
    getPosts: builder.query({
      query: () => "/posts",
    }),
    addPost: builder.mutation<PostType, PostType>({
      query: (addPost) => ({
        method: "POST",
        url: "/posts/new",
        body: addPost,
        headers: {
          "X-XSRF-Token": getXsrfToken(),
        },
      }),
      invalidatesTags: ["posts"],
    }),
    addConnection: builder.mutation<User[], ConnectionDto>({
      query: (connectionInfo) => ({
        method: "POST",
        url: "users/follow",
        body: connectionInfo,
        headers: {
          "X-XSRF-Token": getXsrfToken(),
        },
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLoginUserMutation,
  useRegisterUserMutation,
  useSearchUserMutation,
  useUpdateUserMutation,
  useGetPostsQuery,
  useAddPostMutation,
  useAddConnectionMutation,
} = appApi;
