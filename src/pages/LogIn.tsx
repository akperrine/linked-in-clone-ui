import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { useLoginUserMutation } from "../redux/api/appApi";
import { getSocialLoginUrl } from "../utils/helperFunctions";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import PreAuthWrapper from "../Components/UiComponents/PreAuthWrapper";

const initialLoginFromData = {
  email: "",
  password: "",
};

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState(initialLoginFromData);
  const [loginUserMutation] = useLoginUserMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await loginUserMutation(loginFormData);
      if (data !== undefined) {
        dispatch(login(data));
        if (data.firstLogin === true) {
          navigate("/firstLogin");
        } else {
          navigate("/feed");
        }
      }
      console.log("data ", data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  return (
    <PreAuthWrapper>
      <div data-testid="login-component">
        <Form onSubmit={handleLogin} className="">
          <Label htmlFor="email">Email:</Label>
          <TextInput
            id="email"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <Label htmlFor="password">Password:</Label>
          <TextInput
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <Button type="submit">Login!</Button>
          <a href={getSocialLoginUrl()}>Login With Google</a>
        </Form>
      </div>
    </PreAuthWrapper>
  );
}

export default LogIn;
