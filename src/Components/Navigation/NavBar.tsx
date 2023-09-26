import { useSelector } from "react-redux";
import { selectLoginStatus } from "../../redux/slices/userSlice";
import { Header, TextInput } from "@trussworks/react-uswds";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetUsersQuery,
  useSearchUserMutation,
} from "../../redux/api/appApi";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchUserMutation] = useSearchUserMutation();
  const navigate = useNavigate();

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const { data } = await searchUserMutation(searchInput);
      navigate("/results", { state: data });
    } catch (error) {
      console.log(error);
    }
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
          <button onClick={handleSubmit}>search</button>
        </div>
      </Header>
    </>
  );
}

export default NavBar;
