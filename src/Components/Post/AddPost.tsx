import { Card, TextInput } from "@trussworks/react-uswds";
import React, { ChangeEvent, useState } from "react";
import { useAddPostMutation } from "../../redux/api/appApi";
import { PostType } from "../../utils/Types";
import { useSelector } from "react-redux";
import {
  selectCurrentEmail,
  selectCurrentUser,
} from "../../redux/slices/userSlice";
import ProfilePicture from "../ProfilePicture";

function AddPost() {
  const [postInput, setPostInput] = useState("");
  const [addPostMutation] = useAddPostMutation();
  const user = useSelector(selectCurrentUser);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPostInput(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const postDto: PostType = {
      email: user.email,
      content: postInput,
      timestamp: new Date(),
      likes: 0,
      comments: [],
    };
    try {
      const { data } = await addPostMutation(postDto);
      console.log("success: ", data);
    } catch (error) {
      console.log(error);
    }
    setPostInput("");
  }

  return (
    <Card>
      <div className="display-flex flex-row">
        <ProfilePicture imageUrl={user.imageUrl} />
        <form onSubmit={handleSubmit}>
          <TextInput
            id="nav-search"
            name="nav-search"
            type="text"
            value={postInput}
            onChange={handleChange}
            className="border-base-light"
            placeholder="Start a Post"
          />
          <button>Post</button>
        </form>
      </div>
    </Card>
  );
}

export default AddPost;
