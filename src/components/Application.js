import React, { useState, useEffect } from "react";
import axios from "axios";

//STYLES
import "components/Application.scss";

//LOCAL IMPORT
import Appointment from "components/Appointment";

import DayList from "./DayList";
import { getInterview, getAppointmentsForDay, getInterviewersForDay} from "components/helpers/selectors";

// import InterviewerList from "./InterviewerList";
// import Appointment from "components/Appointment";

// const days = [
//   {
//     id: 1,
//     name: "Monday",
//     spots: 2,
//   },
//   {
//     id: 2,
//     name: "Tuesday",
//     spots: 5,
//   },
//   {
//     id: 3,
//     name: "Wednesday",
//     spots: 0,
//   },
// ];


// const appointments = {
//   "1": {
//     id: 1,
//     time: "12pm",
//   },
//   "2": {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller-Jones",
//       interviewer:{
//         id: 3,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       }
//     }
//   },
//   "3": {
//     id: 3,
//     time: "2pm",
//   },
//   "4": {
//     id: 4,
//     time: "3pm",
//     interview: {
//       student: "Archie Andrews",
//       interviewer:{
//         id: 4,
//         name: "Cohana Roy",
//         avatar: "https://i.imgur.com/FK8V841.jpg",
//       }
//     }
//   },
//   "5": {
//     id: 5,
//     time: "4pm",
//   }
// };


export default function Application(props) {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    // you may put the line below, but will have to remove/comment hardcoded appointments variable
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });
  // const dailyAppointments = [];

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:8001/api/days"),
      axios.get("http://localhost:8001/api/appointments"),
      axios.get("http://localhost:8001/api/interviewers")
    ]).then(all => {
    //  console.log(all)
     setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    //  setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: [] }));
    // SET to EMPTY ARRAY FOR When the mode === CREATE we want to show the Form component.
    });
  }, []);

  function bookInterview(id, interview) {
    console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    setState({
      ...state,
      appointments
    });

    return axios.put(`/api/appointments/${id}`, { interview })
  }

  function editInterview(id, interview) {
    console.log(id, interview);
    return axios.put(`/api/appointments/${id}`, { interview })
  }

  
  function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)}

  // function save(name, interviewer) {
  //   const interview = {
  //     student: name,
  //     interviewer
  //   };
  // }

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
