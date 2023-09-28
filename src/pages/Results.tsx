import { useEffect, useState } from "react";
import { User } from "../utils/Types";
import Loading from "../Components/Loading";
import { useGetUsersQuery } from "../redux/api/appApi";
import SearchResultCard from "../Components/SearchResultCard";
import { useLocation } from "react-router-dom";

function Results() {
  const [users, setUsers] = useState<User[]>([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return (
    <div className="padding-10">
      {users.map((user) => (
        <SearchResultCard key={user.id} userData={user}></SearchResultCard>
      ))}
    </div>
  );
}

export default Results;
