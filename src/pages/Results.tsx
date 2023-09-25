import { useEffect, useState } from "react";
import { User } from "../utils/Types";
import Loading from "../Components/Loading";
import { useGetUsersQuery } from "../redux/api/appApi";
import SearchResultCard from "../Components/SearchResultCard";

function Results() {
  const [users, setUsers] = useState<User[]>([]);
  const { data, isError, isLoading } = useGetUsersQuery({});
  console.log(data);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setUsers(data);
    }
  }, [data, isLoading, isError]);

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div className="padding-10">
      {users.map((user) => (
        <SearchResultCard key={user.id} userData={user}></SearchResultCard>
      ))}
    </div>
  );
}

export default Results;
