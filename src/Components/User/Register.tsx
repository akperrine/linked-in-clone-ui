import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { useRegisterUserMutation } from "../../redux/api/userApi";

const initialRegisterFromData = {
  email: "",
  password: "",
};

function Register() {
  const [registered, setRegistered] = useState(false);
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFromData
  );
  const [registerUserMutaion] = useRegisterUserMutation();

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUserMutaion(registerFormData);
    setRegisterFormData(initialRegisterFromData);
    setRegistered(true);
  };

  const handleUserInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
    setRegistered(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterFormData({ ...registerFormData, [name]: value });
  };

  return (
    <div data-testid="register-component">
      <div>
        {!registered ? (
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
        ) : (
          <Form onSubmit={handleUserInfoSubmit}>
            <Label htmlFor="fName">First Name:</Label>
            <TextInput id="fName" name="fName" type="text" />
            <Label htmlFor="lName">Last Name:</Label>
            <TextInput id="lName" name="LName" type="text" />
            <Label htmlFor="headline">Headline:</Label>
            <TextInput id="headline" name="headline" type="text" />
            <Label htmlFor="country">Country:</Label>
            <TextInput id="country" name="country" type="text" />
            <Label htmlFor="city">City:</Label>
            <TextInput id="city" name="city" type="text" />
            <Label htmlFor="company">Company:</Label>
            <TextInput id="company" name="company" type="text" />
            <Label htmlFor="industry">Industry:</Label>
            <TextInput id="industry" name="industry" type="text" />
            <Label htmlFor="college">College:</Label>
            <TextInput id="college" name="college" type="text" />
            <Label htmlFor="website">Website:</Label>
            <TextInput id="website" name="website" type="text" />
            <Label htmlFor="about">About:</Label>
            <TextInput id="about" name="about" type="text" />
            <Label htmlFor="skills">Skills:</Label>
            <TextInput id="skills" name="skills" type="text" />
            <Button type="submit">Update Personal Information!</Button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Register;
