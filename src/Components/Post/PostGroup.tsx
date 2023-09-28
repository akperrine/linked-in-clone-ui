import React, { useEffect, useState, useRef, useCallback  } from "react";
import { PostType } from "../../utils/Types";
import { CardGroup } from "@trussworks/react-uswds";
import Post from "./Post";
import { useGetPostsQuery, useGetRevalentPostsQuery } from "../../redux/api/appApi";
import Loading from "../Loading";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../redux/slices/userSlice";

function PostGroup() {
  const [posts, setPosts] = useState<PostType[]>([]);
  const user = useSelector(selectCurrentUser);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const { data, isError, isLoading } = useGetRevalentPostsQuery({ email: user.email, pageNumber: page });
  
  const pageRef = useRef(page); // Add this line

  const observer = useRef<IntersectionObserver | null>(null);

  const lastPostElementRef = useCallback((node: HTMLDivElement | null) => {
    if (isLoading || pageRef.current >= totalPage) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && pageRef.current < totalPage) {
        setPage(prevPageNumber => {
          const nextPageNumber = prevPageNumber + 1;
          pageRef.current = nextPageNumber; // Update the ref when page changes
          return nextPageNumber;
        });
      }
    })
    if (node) observer.current.observe(node);
  }, [isLoading, totalPage]); // Remove 'page' from the dependency array
  
  useEffect(() => {
    if (!isLoading && !isError && data) {
      console.log(data)
      setPosts((prevPosts) => [...prevPosts, ...data.content]); 
      setTotalPage(data.totalPages)
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
    <div>
    {posts.map((postData, index) => (
        <div key={postData.id} ref={index === posts.length - 1 ? lastPostElementRef : null}>
        <Post postData={postData} />
        </div>
    ))}
    </div>
  );
}

export default PostGroup;
