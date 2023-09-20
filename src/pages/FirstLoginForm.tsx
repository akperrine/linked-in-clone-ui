import { Button, Form, Label, TextInput } from "@trussworks/react-uswds";
import { useState } from "react";

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
  const [updateUserFormData, setUpdateUserFormData] =
    useState<UpdateUserFormData>(initialUpdateUserFormData);

  function handleUserInitialInfoSubmit(e: React.FormEvent) {
    console.log("handled");
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {}

  return (
    <>
      <Form onSubmit={handleUserInitialInfoSubmit}>
        <Label htmlFor="fName">First Name:</Label>
        <TextInput
          id="fName"
          name="fName"
          type="text"
          onChange={handleChange}
        />
        <Label htmlFor="lName">Last Name:</Label>
        <TextInput
          id="lName"
          name="LName"
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
        <TextInput id="city" name="city" type="text" onChange={handleChange} />
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
    </>
  );
}

export default FirstLoginForm;
