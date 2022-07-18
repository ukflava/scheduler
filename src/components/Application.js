import React, { useState, useEffect } from "react";
import axios from "axios";

//STYLES
import "components/Application.scss";

//LOCAL IMPORT
import Appointment from "components/Appointment";

import DayList from "./DayList";
import { getInterview, getAppointmentsForDay, getInterviewersForDay} from "components/helpers/selectors";

const {
  state,
  setDay,
  bookInterview,
  cancelInterview
} = useApplicationData();


export default function Application(props) {

  
  const dailyInterviewers = getInterviewersForDay(state,state.day)
  const dailyAppointments = getAppointmentsForDay(state,state.day)
  
  const schedule = dailyAppointments.map((appointment) => {
    const interview = getInterview(state, appointment.interview);
  
    return (
      <Appointment
      {...dailyAppointments}
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interview={interview}
        // interview={appointment.interview}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
        editInterview={editInterview}
        />
    );
  });


  
  return (
    <main className="layout">
      <section className="sidebar">
      <img
  className="sidebar--centered"
  src="images/logo.png"
  alt="Interview Scheduler"
/>
<hr className="sidebar__separator sidebar--centered" />
<nav className="sidebar__menu"><DayList
  days={state.days}
  value={state.day}
  onChange={setDay}
  bookInterview={bookInterview}
  editInterview={editInterview}
/></nav>
<img
  className="sidebar__lhl sidebar--centered"
  src="images/lhl.png"
  alt="Lighthouse Labs"
/>        
      </section>
      <section className="schedule">
      {schedule}
      {/* <Appointment key="last" time="5pm" bookInterview={bookInterview} /> */}
        
      </section>
    </main>
  );
}
