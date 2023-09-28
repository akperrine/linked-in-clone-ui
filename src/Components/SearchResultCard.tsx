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
        <div>
          <ProfilePicture imageUrl={userData.imageUrl} />

          {" " + userData.email}
        </div>
      </Link>
    </CardLI>
  );
}

export default SearchResultCard;
