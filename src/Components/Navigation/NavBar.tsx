import { useSelector } from "react-redux";
import { selectLoginStatus } from "../../redux/slices/userSlice";
import { Button, Grid, Header, Logo, PrimaryNav, Search, TextInput } from "@trussworks/react-uswds";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  useGetUsersQuery,
  useSearchUserMutation,
} from "../../redux/api/appApi";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/bluebird_fired_text.png"

function NavBar() {
  const [searchInput, setSearchInput] = useState("");
  const [searchUserMutation] = useSearchUserMutation();
  const navigate = useNavigate();

//   function handleChange(e: ChangeEvent<HTMLInputElement>) {
//     e.preventDefault();
//     setSearchInput(e.target.value);
//   }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const { data } = await searchUserMutation(searchInput);
      navigate("/results", { state: data });
      setSearchInput("");
    } catch (error) {
      console.log(error);
    }
  }
  
  const navItems = [
    <React.Fragment key="primaryNav_0">
      <a href="" className="usa-current">
        Current page
      </a>
  </React.Fragment>
  ]

  return (
    <>
      <Header className="bg-white width-full position-fixed height-8 padding-bottom-2 z-top border-bottom border-base-lightest">
        <div className="header-left">
            <div>
            <Logo size="medium" image={<img src={logo} alt="" className="usa-footer__logo-img margin-right-1" />} />
            </div>
            <div>
            <Search onSubmit={handleSubmit} />
            </div>
        </div>
        <div className="header-right">
            <Button>test</Button>
            <Button>test</Button>
            <Button>test</Button>
        </div>
      </Header>
    </>
  );
}

export default NavBar;
