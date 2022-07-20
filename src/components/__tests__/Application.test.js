import React from "react";

import { fireEvent, waitForElement, render, cleanup } from "@testing-library/react";

import Application from "components/Application";
import axios from 'axios';

afterEach(cleanup);
axios.defaults.baseURL = "http://localhost:8001";

// Render the Application.
// Wait until the text "Archie Cohen" is displayed.
// Click the "Add" button on the first empty appointment.
// Enter the name "Lydia Miller-Jones" into the input with the placeholder "Enter Student Name".
// Click the first interviewer in the list.
// Click the "Save" button on that same appointment.
// Check that the element with the text "Saving" is displayed.
// Wait until the element with the text "Lydia Miller-Jones" is displayed.
// Check that the DayListItem with the text "Monday" also has the text "no spots remaining".

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
it("loads data, books an interview and reduces the spots remaining for the first day by 1", () => {
  const { getByText } = render(<Application />);

  return waitForElement(() => getByText("Monday")).then(() => {
    fireEvent.click(getByText("Tuesday"));
    expect(getByText("Leopold Silvers")).toBeInTheDocument();
   
  });
});

})