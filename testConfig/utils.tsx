import { RenderOptions, render } from "@testing-library/react";
import { AppStore, RootState, setupStore } from "../src/redux/store";
import { Omit } from "@reduxjs/toolkit/dist/tsHelpers";
import { PreloadedState } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

// Utility Function to render Components with Wrapped Provider and a default test state
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  setupListeners(store.dispatch);
  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

// Render Function for components not pluged into the Redux Store
function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render };
