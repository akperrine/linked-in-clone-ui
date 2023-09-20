import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

function GoogleOauth() {
  const location = useLocation();
  const [redirectTo, setRedirectTo] = useState("/login");

  useEffect(() => {
    const accessToken = extractUrlParameter("token");
    if (accessToken) {
      console.log(accessToken);
      const redirect = "/";
      setRedirectTo(redirect);
    }
  }, []);

  const extractUrlParameter = (key: string) => {
    return new URLSearchParams(location.search).get(key);
  };
  return <Navigate to={redirectTo} />;
}

export default GoogleOauth;
