import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "../testConfig/utils";
import React from "react";
import Profile from "../src/pages/Profile";

describe("Profile", () => {
  it("renders the Profile component", () => {
    renderWithProviders(<Profile />);
    expect(screen.findByPlaceholderText("Start a Post")).toBeDefined();
  });
});
