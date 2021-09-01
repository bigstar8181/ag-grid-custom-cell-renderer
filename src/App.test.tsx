import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GridOptions } from "@ag-grid-community/all-modules";

import App from "./App";

Object.defineProperty(global.window.Element.prototype, "innerText", {
  set(value) {
    this.textContent = value;
  },
  configurable: true
});

test("successfully clicks a button inside ag-grid", async () => {
  const mockOnClick = jest.fn();
  const gridOptions: GridOptions = {
    onFirstDataRendered: () => {
      console.log("first data rendered!");
    },
    onGridReady: () => {
      console.log("grid is ready!");
    }
  };

  render(<App onClick={mockOnClick} gridOptions={gridOptions} />);

  await screen.findByText(/Foo/, undefined, { timeout: 3000 });

  // userEvent.click(buttonElement);
  // expect(mockOnClick).toBeCalledTimes(1);
});
