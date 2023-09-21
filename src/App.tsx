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
import Post from "./Components/Post/Post";
import PostGroup from "./Components/Post/PostGroup";

function App() {
  const [loggedIn] = useState(true);
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
        <Route path="/post" element={<PostGroup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
