import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup, waitForElement, wait, fireEvent, queryByAltText, getByText, getByAltText, getAllByTestId, prettyDOM, getByPlaceholderText, queryByText, queryAllByAltText } from "@testing-library/react";
// import { fireEvent, waitForElement, render, cleanup, } from "@testing-library/react";
import reducer from "reducers/application";
import Application from "components/Application";
jest.mock('axios')
import axios from 'axios';

afterEach(cleanup);
// axios.defaults.baseURL = "http://localhost:8001/";
axios.defaults.baseURL = "";

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
  it("defaults to Monday and changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);

    await wait(() => getByText("Monday"));
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, books an interview and reduces the spots remaining for Monday by 1", async () => {
    const { container, debug } = render(<Application />);
  
    await waitForElement(() => getByText(container, "Archie Cohen"));
    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];
  
    fireEvent.click(getByAltText(appointment, "Add"));
  
    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
  
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));
  
    expect(getByText(appointment, "Saving")).toBeInTheDocument();
  
    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));
  
    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );
  
    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });

  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {

    const { container } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointment = getAllByTestId(container, "appointment").find(
      appointment => queryByText(appointment, "Archie Cohen")
    );

    fireEvent.click(queryByAltText(appointment, "Delete"));

    expect(getByText(appointment, "Please confirm action *delete appointment*")).toBeInTheDocument();

    fireEvent.click(queryByText(appointment, "Confirm"));

    expect(getByText(appointment, "Deleting")).toBeInTheDocument();

    await waitForElement(() => getByAltText(appointment, "Add"));
    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "2 spots remaining")).toBeInTheDocument();
  });

  it("shows the save error when failing to save an appointment", async() => {
    axios.put.mockRejectedValueOnce();
    const { container } = render(<Application />)
    await waitForElement(() => getByText(container, "Archie Cohen"))

    const appointment = getAllByTestId(container, "appointment").find(
      appointment => queryByText(appointment, "Archie Cohen")
    );

    fireEvent.click(queryByAltText(appointment, "Edit"));
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));

    expect(getByText(appointment, "Save")).toBeInTheDocument();

    fireEvent.click(queryByText(appointment, "Cancel"))

    expect(getByText(container, "Archie Cohen")).toBeInTheDocument();

    const day = getAllByTestId(container, "day").find(day =>
        queryByText(day, "Monday")
      );

    expect(getByText(day, "1 spot remaining")).toBeInTheDocument();
  });

  it("shows the delete error when failing to delete an existing appointment", async () => {
    axios.delete.mockRejectedValueOnce();
    const { container } = render(<Application />);
    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointment = getAllByTestId(container, "appointment").find(
      appointment => queryByText(appointment, "Archie Cohen")
    );
    fireEvent.click(queryByAltText(appointment, "Delete"))

    expect(getByText(appointment, "Please confirm action *delete appointment*")).toBeInTheDocument();

    fireEvent.click(queryByText(appointment, "Confirm"))

    expect(getByText(appointment, "Deleting")).toBeInTheDocument();

    await waitForElement(() => getByText(appointment, "Error"));
    expect(getByText(appointment, "Error")).toBeInTheDocument();

    const day = getAllByTestId(container, "day").find(day =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "1 spot remaining")).toBeInTheDocument();
  });
it("shows the save error when failing to save an appointment", () => {
  axios.put.mockRejectedValueOnce();
});

})

describe("Application Reducer", () => {
  it("thows an error with an unsupported type", () => {
    expect(() => reducer({}, { type: null })).toThrowError(
      /tried to reduce with unsupported action type/i
    );
  });
});