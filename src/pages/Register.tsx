import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { useState } from "react";
import { useRegisterUserMutation } from "../redux/api/userApi";
import { useSelector } from "react-redux";

type RegisterFromData = {
  email: string;
  password: string;
};

type UpdateUserFormData = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  headline: string;
  country: string;
  city: string;
  company: string;
  industry: string;
  college: string;
  website: string;
  about: string;
};

const initialRegisterFromData = {
  email: "",
  password: "",
};
const initialUpdateUserFormData = {
  firstName: "",
  lastName: "",
  imageUrl: "",
  headline: "",
  country: "",
  city: "",
  company: "",
  industry: "",
  college: "",
  website: "",
  about: "",
};

function Register() {
  const [registered, setRegistered] = useState(true);
  const [registerFormData, setRegisterFormData] = useState<RegisterFromData>(
    initialRegisterFromData
  );
  const [updateUserFormData, setUpdateUserFormData] =
    useState<UpdateUserFormData>(initialUpdateUserFormData);
  const [registerUserMutaion] = useRegisterUserMutation();

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    registerUserMutaion(registerFormData);
    setRegisterFormData(initialRegisterFromData);
    setRegistered(true);
  };

  const handleUserInitialInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submitted");
    setRegistered(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    formData: RegisterFromData | UpdateUserFormData
  ) => {
    const { name, value } = e.target;
    if (formData === registerFormData) {
      setRegisterFormData({ ...formData, [name]: value });
    } else if (formData === updateUserFormData) {
      setUpdateUserFormData({ ...formData, [name]: value });
    }
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
              onChange={(e) => handleChange(e, registerFormData)}
            />
            <Label htmlFor="password">Password:</Label>
            <TextInput
              id="password"
              name="password"
              type="password"
              onChange={(e) => handleChange(e, registerFormData)}
            />
            <Button type="submit">Register!</Button>
          </Form>
        ) : (
          <Form onSubmit={handleUserInitialInfoSubmit}>
            <Label htmlFor="fName">First Name:</Label>
            <TextInput
              id="fName"
              name="fName"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="lName">Last Name:</Label>
            <TextInput
              id="lName"
              name="LName"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="headline">Headline:</Label>
            <TextInput
              id="headline"
              name="headline"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="country">Country:</Label>
            <TextInput
              id="country"
              name="country"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="city">City:</Label>
            <TextInput
              id="city"
              name="city"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="company">Company:</Label>
            <TextInput
              id="company"
              name="company"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="industry">Industry:</Label>
            <TextInput
              id="industry"
              name="industry"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="college">College:</Label>
            <TextInput
              id="college"
              name="college"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="website">Website:</Label>
            <TextInput
              id="website"
              name="website"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Label htmlFor="about">About:</Label>
            <TextInput
              id="about"
              name="about"
              type="text"
              onChange={(e) => handleChange(e, updateUserFormData)}
            />
            <Button type="submit">Update Personal Information!</Button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default Register;
