import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import "@trussworks/react-uswds/lib/index.css";
import { setupStore } from "./redux/store.ts";
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="411979368314-htsjd99ae1jhfp9uai1d7u6g6k4tndmr.apps.googleusercontent.com">

        <Provider store={setupStore()}>
        <App />
        </Provider>
    </GoogleOAuthProvider>

  </React.StrictMode>
);