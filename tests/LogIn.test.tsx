import { describe, expect, it } from "vitest";
import { render, renderWithProviders, screen } from "../testConfig/utils";
import LogIn from "../src/Components/User/LogIn";
import React from "react";

describe("LogIn", () => {
  it("Render the Login component", () => {
    renderWithProviders(<LogIn />);
    expect(screen.findByTestId("login-component")).toBeDefined();
  });

  it("Render the basic login form", () => {
    renderWithProviders(<LogIn />);

    expect(screen.getByLabelText("Email:")).toBeDefined();
    expect(screen.getByLabelText("Password:")).toBeDefined();
    expect(screen.getByRole("button", { name: "Login!" })).toBeDefined();
  });
});
