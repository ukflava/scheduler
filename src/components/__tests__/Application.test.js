import React from "react";

import { fireEvent, waitForElement, render, cleanup } from "@testing-library/react";

import Application from "components/Application";
import axios from 'axios';

afterEach(cleanup);
axios.defaults.baseURL = "http://localhost:8001";



describe("Application full test", () => {
  
  it("defaults to Monday", () => {
    const { getByText } = render(<Application />);
  
    return waitForElement(() => getByText("Monday"));
  });

it("defaults to Monday and changes the schedule when a new day is selected", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
   
  });
});

})