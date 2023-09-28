import { Link } from "react-router-dom";
import { User } from "../utils/Types";
import CardLI from "./UiComponents/CardLI";

interface SearchResultCardProps {
  userData: User;
}

function SearchResultCard({ userData }: SearchResultCardProps) {
  return (
    <CardLI>
      <Link to="/profile" state={userData}>
        <div>
          <img src={userData.imageUrl} alt="prof" />

          {" " + userData.email}
        </div>
      </Link>
    </CardLI>
  );
}

export default SearchResultCard;
