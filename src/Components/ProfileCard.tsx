import { Card } from "@trussworks/react-uswds";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/userSlice";
import CardLI from "./UiComponents/CardLI";

function ProfileCard() {
  const user = useSelector(selectCurrentUser);

  return (
    <CardLI className="margin-2 margin-top-0">
      <div>
        <img alt="prof"></img>
        <Link to={"/profile"} state={user}>
          <h3>First Last</h3>
        </Link>
        <p>Software Engineer | Java | Javascript | React | Spring</p>
      </div>
      <p>
        Connections <span>34</span>
      </p>
    </CardLI>
  );
}

export default ProfileCard;
