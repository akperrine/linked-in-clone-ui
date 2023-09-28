import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import GoogleOauth from "./Components/User/GoogleOauth";
import FirstLoginForm from "./pages/FirstLoginForm";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  selectCurrentUser,
  selectLoginStatus,
  selectisLoading,
  setUserLoading,
} from "./redux/slices/userSlice";
import { useEffect, useState } from "react";
import { useLoginUserMutation } from "./redux/api/appApi";
import Loading from "./Components/Loading";
import Dashboard from "./pages/Dashboard";
import WithNav from "./Components/Navigation/WithNav";
import Results from "./pages/Results";

function App() {
  const loggedIn = useSelector(selectLoginStatus);
  const loadingUser = useSelector(selectisLoading);
  const user = useSelector(selectCurrentUser);
  const [loginUserMutation] = useLoginUserMutation();
  const dispatch = useDispatch();
  const [isInitialized, setIsInitialized] = useState(false);
  console.log(user);

  useEffect(() => {
    (async () => {
      if (user.email === "") {
        try {
          dispatch(setUserLoading(true));
          const { data } = await loginUserMutation({});
          dispatch(setUserLoading(false));
          if (data !== undefined) {
            dispatch(login(data));
          }
        } catch (error) {
          console.log(error);
        }
        setIsInitialized(true);
      }
    })();
  }, [user.email]);

  if (loadingUser || !isInitialized) {
    return <Loading />;
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/oauth2/redirect" element={<GoogleOauth />} />
        <Route
          path="/results"
          element={loggedIn ? <Results /> : <Navigate to="/login" />}
        />
        <Route element={<WithNav />}>
          <Route
            path="/profile"
            element={loggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/firstLogin"
            element={loggedIn ? <FirstLoginForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/feed"
            element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
