import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../redux/slices/userSlice";

function Profile() {
  const user = useSelector(selectCurrentUser);

  return (
    <div>
      <h1>Welcome to the Profile Page</h1>
    </div>
  );
}

export default Profile;
