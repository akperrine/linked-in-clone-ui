import { describe, expect, it } from "vitest";
import { render, screen, userEvent } from "../testConfig/utils";
import Register from "../src/pages/Register";
import React from "react";

describe("Register", () => {
  it("Render the Register component", () => {
    render(<Register />);

    expect(screen.findByTestId("register-component")).toBeDefined();
  });

  it("Render the basic register form", () => {
    render(<Register />);

    expect(screen.getByLabelText("Email:")).toBeDefined();
    expect(screen.getByLabelText("Password:")).toBeDefined();
    expect(screen.getByRole("button", { name: "Register!" })).toBeDefined();
  });

  it("Render the additional information after successful register", async () => {
    render(<Register />);

    await userEvent.click(screen.getByRole("button", { name: "Register!" }));

    expect(screen.getByLabelText("First Name:")).toBeDefined();
    expect(screen.getByLabelText("Last Name:")).toBeDefined();
    expect(screen.getByLabelText("Headline:")).toBeDefined();
    expect(screen.getByLabelText("Country:")).toBeDefined();
    expect(screen.getByLabelText("City:")).toBeDefined();
    expect(screen.getByLabelText("Company:")).toBeDefined();
    expect(screen.getByLabelText("Industry:")).toBeDefined();
    expect(screen.getByLabelText("College:")).toBeDefined();
    expect(screen.getByLabelText("Website:")).toBeDefined();
    expect(screen.getByLabelText("About:")).toBeDefined();
    expect(screen.getByLabelText("Skills:")).toBeDefined();
    expect(
      screen.getByRole("button", { name: "Update Personal Information!" })
    ).toBeDefined();
  });
});
