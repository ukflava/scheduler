// Create a function called getAppointmentsForDay 
// that will receive two arguments state and day will return an array of appointments for the given day
import React from "react";

export function getAppointmentsForDay(state, day) {

  let ListAppointments = [];

  state.days.map(dataDays => {
    if (dataDays.name === day) {
      dataDays.appointments.forEach(appt => ListAppointments.push(state.appointments[appt]))
    }
  })
  console.log(ListAppointments)
  return ListAppointments;
}