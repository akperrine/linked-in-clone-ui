import { Link } from "react-router-dom";
import { User } from "../utils/Types";
import CardLI from "./UiComponents/CardLI";
import ProfilePicture from "./ProfilePicture";

interface SearchResultCardProps {
  userData: User;
}

function SearchResultCard({ userData }: SearchResultCardProps) {
  return (
    <CardLI>
      <Link to="/profile" state={userData}>
        <div className="display-flex flex-row flex-align-center">
          <ProfilePicture imageUrl={userData.imageUrl} />

          {" " + userData.firstName}
        </div>
      </Link>
    </CardLI>
  );
}

export default SearchResultCard;
