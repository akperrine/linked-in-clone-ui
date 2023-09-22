import { useSelector } from "react-redux";
import { selectLoginStatus } from "../../redux/slices/userSlice";
import { Header, TextInput } from "@trussworks/react-uswds";
import { ChangeEvent, useState } from "react";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }
  return (
    <>
      <Header className="bg-white width-full position-fixed height-8 padding-bottom-2 z-top border-bottom border-base-lightest">
        <div className="display-flex flex-row">
          <img alt="logo"></img>
          <TextInput
            id="nav-search"
            name="nav-search"
            type="text"
            onChange={handleChange}
            className="border-base-light"
          />
        </div>
      </Header>
    </>
  );
}

export default NavBar;
