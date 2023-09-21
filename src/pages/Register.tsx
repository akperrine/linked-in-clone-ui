import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { useRegisterUserMutation } from "../redux/api/userApi";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import PreAuthWrapper from "../Components/UiComponents/PreAuthWrapper";

type RegisterFromData = {
  email: string;
  password: string;
};

const initialRegisterFromData = {
  email: "",
  password: "",
};

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState<RegisterFromData>(
    initialRegisterFromData
  );
  const [registerUserMutaion] = useRegisterUserMutation();

  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await registerUserMutaion(registerFormData);
      dispatch(login(data));
      if (data.firstLogin === true) {
        navigate("/firstLogin");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
    setRegisterFormData(initialRegisterFromData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  return (
    <PreAuthWrapper>
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
    </PreAuthWrapper>
  );
}

export default Register;
