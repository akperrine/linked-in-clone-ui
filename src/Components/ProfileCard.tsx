import { Card } from "@trussworks/react-uswds";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/userSlice";
import CardLI from "./UiComponents/CardLI";
import ProfilePicture from "./ProfilePicture";
import backdropPic from "../assets/default-backdrop.png";

function ProfileCard() {
  const user = useSelector(selectCurrentUser);

  return (
    <CardLI className="margin-2 margin-top-0 display-flex flex-column flex-align-center overflow-hidden">
      <img
        alt="background"
        src={backdropPic}
        style={{
          objectFit: "cover",
        }}
        className="width-full height-7"
      />
      <div className="display-flex flex-column flex-align-center">
        <div className="position-relative top-neg-3 height-6">
          <ProfilePicture imageUrl={user.imageUrl} />
        </div>
        <Link to={"/profile"} state={user}>
          <h3 className="hover-link-profile-name">
            {user.firstName} {user.lastName}
          </h3>
        </Link>
        <p className="text-thin">
          Software Engineer | Java | Javascript | React | Spring
        </p>
      </div>
      <p>
        Connections <span>{user.following.length}</span>
      </p>
    </CardLI>
  );
}

export default ProfileCard;
