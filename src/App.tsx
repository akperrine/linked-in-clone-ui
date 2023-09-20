import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { useState } from "react";
import GoogleOauth from "./Components/User/GoogleOauth";
import FirstLoginForm from "./pages/FirstLoginForm";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  const loggedIn = user.isLoggedIn;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/oauth2/redirect" element={<GoogleOauth />} />
        <Route
          path="/profile"
          element={loggedIn ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/firstLogin"
          element={loggedIn ? <FirstLoginForm /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
