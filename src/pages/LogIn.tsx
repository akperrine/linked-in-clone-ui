import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { useState } from "react";
import GoogleLogin from "../Components/User/GoogleOauth";
import { useLoginUserMutation } from "../redux/api/userApi";

const initialLoginFromData = {
  email: "",
  password: "",
};

function LogIn() {
  const [loginFormData, setLoginFormData] = useState(initialLoginFromData);
  const [loginUserMutaion] = useLoginUserMutation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
    loginUserMutaion(loginFormData);
    setLoginFormData(initialLoginFromData);
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
        <GoogleLogin />
      </Form>
    </div>
  );
}

export default LogIn;
