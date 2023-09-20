import React from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import FirstLoginForm from "../src/pages/FirstLoginForm";
import { renderWithProviders } from "../testConfig/utils";

describe("FirstLoginForm", () => {
  it("renders the basic FirstLoginForm component", () => {
    renderWithProviders(<FirstLoginForm />);
    expect(screen.findByText("First Name")).toBeDefined();
    expect(screen.findByText("Company")).toBeDefined();
    expect(screen.findByText("Website")).toBeDefined();
    expect(screen.findByText("About")).toBeDefined();
  });
});
