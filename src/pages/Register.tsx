import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { useRegisterUserMutation } from "../redux/api/userApi";
import { useSelector } from "react-redux";

type RegisterFromData = {
  email: string;
  password: string;
};

const initialRegisterFromData = {
  email: "",
  password: "",
};

function Register() {
  const [registerFormData, setRegisterFormData] = useState<RegisterFromData>(
    initialRegisterFromData
  );
  const [registerUserMutaion] = useRegisterUserMutation();

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUserMutaion(registerFormData);
    setRegisterFormData(initialRegisterFromData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  return (
    <div data-testid="register-component">
      <Form onSubmit={handleRegisterSubmit}>
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
        <Button type="submit">Register!</Button>
      </Form>
    </div>
  );
}

export default Register;
