import { Card, TextInput } from "@trussworks/react-uswds";
import { ChangeEvent } from "react";

function AddPost() {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
  }
  return (
    <Card>
      <div className="display-flex flex-row">
        <img alt="prof"></img>
        <TextInput
          id="nav-search"
          name="nav-search"
          type="text"
          onChange={handleChange}
          className="border-base-light"
        />
      </div>
    </Card>
  );
}

export default AddPost;
