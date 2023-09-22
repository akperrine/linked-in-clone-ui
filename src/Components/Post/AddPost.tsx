import { Card, Form, TextInput } from "@trussworks/react-uswds";
import React, { ChangeEvent, useState } from "react";

function AddPost() {
  const [postInput, setPostInput] = useState("");
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setPostInput(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(postInput);
    setPostInput("");
  }

  return (
    <Card>
      <div className="display-flex flex-row">
        <img alt="prof"></img>
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
