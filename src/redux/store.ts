import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { userApi } from "./api/userApi";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(userApi.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
