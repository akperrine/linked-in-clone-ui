import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { useLoginUserMutation } from "../redux/api/userApi";
import { getSocialLoginUrl } from "../utils/helperFunctions";
import { useDispatch, useSelector } from "react-redux";
import { login, selectCurrentUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const initialLoginFromData = {
  email: "",
  password: "",
};

function LogIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginFormData, setLoginFormData] = useState(initialLoginFromData);
  const [loginUserMutaion] = useLoginUserMutation();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await loginUserMutaion(loginFormData);
      dispatch(login(data));
      if (data.firstLogin === true) {
        navigate("/firstLogin");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
      setLoginFormData(initialLoginFromData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  return (
    <div data-testid="login-component">
      <Form onSubmit={handleLogin}>
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
  );
}

export default LogIn;
