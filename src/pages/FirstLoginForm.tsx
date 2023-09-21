import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../redux/slices/userSlice";
import { UserDto, useUpdateUserMutation } from "../redux/api/userApi";
import { useNavigate } from "react-router-dom";
import PreAuthWrapper from "../Components/UiComponents/PreAuthWrapper";

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

function FirstLoginForm() {
  const user = useSelector(selectCurrentUser);
  const [updateUserFormData, setUpdateUserFormData] =
    useState<UpdateUserFormData>(initialUpdateUserFormData);
  const [updateUserMutation] = useUpdateUserMutation();
  const navigate = useNavigate();

  function handleUserInitialInfoSubmit(e: React.FormEvent) {
    e.preventDefault();

    const userUpdateDto: UserDto = {
      id: user.id,
      email: user.email,
      role: user.role,
      connections: user.connections,
      firstLogin: false,
      ...updateUserFormData,
    };
    const { data } = updateUserMutation(userUpdateDto);

    try {
      setUpdateUserFormData(initialUpdateUserFormData);
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setUpdateUserFormData({ ...updateUserFormData, [name]: value });
  }

  return (
    <>
      <PreAuthWrapper>
        <Form onSubmit={handleUserInitialInfoSubmit}>
          <Label htmlFor="firstName">First Name:</Label>
          <TextInput
            id="firstName"
            name="firstName"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="lastName">Last Name:</Label>
          <TextInput
            id="lastName"
            name="lastName"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="headline">Headline:</Label>
          <TextInput
            id="headline"
            name="headline"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="country">Country:</Label>
          <TextInput
            id="country"
            name="country"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="city">City:</Label>
          <TextInput
            id="city"
            name="city"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="company">Company:</Label>
          <TextInput
            id="company"
            name="company"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="industry">Industry:</Label>
          <TextInput
            id="industry"
            name="industry"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="college">College:</Label>
          <TextInput
            id="college"
            name="college"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="website">Website:</Label>
          <TextInput
            id="website"
            name="website"
            type="text"
            onChange={handleChange}
          />
          <Label htmlFor="about">About:</Label>
          <TextInput
            id="about"
            name="about"
            type="text"
            onChange={handleChange}
          />
          <Button type="submit">Update Personal Information!</Button>
        </Form>
      </PreAuthWrapper>
    </>
  );
}

export default FirstLoginForm;
