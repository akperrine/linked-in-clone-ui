import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import App from "../src/App";
import { renderWithProviders } from "../testConfig/utils";

describe("App", () => {
  it("renders the basic App component", () => {
    renderWithProviders(<App />);
    expect(screen.findByText("Vite + React")).toBeDefined();
  });
});
