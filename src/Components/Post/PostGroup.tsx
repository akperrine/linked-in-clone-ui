import React, { useEffect, useState } from "react";
import { PostType } from "../../utils/Types";
import { CardGroup } from "@trussworks/react-uswds";
import Post from "./Post";
import { useGetPostsQuery } from "../../redux/api/appApi";
import Loading from "../Loading";

function PostGroup() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const { data, isError, isLoading } = useGetPostsQuery({ limit: 10, page: 1 });

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setPosts(data);
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
    <>
      {posts.map((postData, index) => (
        <Post key={index} postData={postData} />
      ))}
    </>
  );
}

export default PostGroup;
