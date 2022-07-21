import React, { useState, useEffect } from "react";

import axios from "axios";


export default function useApplicationData(props) {


  const SET_DAY = "SET_DAY";
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_INTERVIEW = "SET_INTERVIEW";
  
  function reducer(state, action) {
    switch (action.type) {
      case SET_DAY:
        return { /* insert logic */ }
      case SET_APPLICATION_DATA:
        return { /* insert logic */ }
      case SET_INTERVIEW: {
        return /* insert logic */
      }
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }


const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});
const setDay = day => setState({ ...state, day });

useEffect(() => {
  Promise.all([
    // axios.get("http://localhost:8001/api/days"),
    // axios.get("http://localhost:8001/api/appointments"),
    // axios.get("http://localhost:8001/api/interviewers")
    axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers")
  ]).then(all => {
  //  console.log(all)
   setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

  });
}, []);

function bookInterview(id, interview) {
  console.log("interview", state);
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


  // return axios.put(`api/appointments/${id}`, { interview }).then(console.log("data from spotas update", state))
  return axios.put(`api/appointments/${id}`, { interview })
  // .then(mySposts())
}

// function editInterview(id, interview) {
//   console.log(id, interview);
//   return axios.put(`/api/appointments/${id}`, { interview })
// }


function cancelInterview(id) {
  const appointments = {
    ...state.appointments,
    [id]: null
  };

  setState({
    ...state,
    appointments
  });
    return axios.delete(`api/appointments/${id}`)
    // .then(mySpots)
  }


  
function mySposts () {





  setState({
    ...state,
    days: state.days.map(day => ({
      ...day,
      spots: state.days
      .find(d => d.name === day)
      .appointments.reduce((a, c) => {
        return state.appointments[c].interview ? a : a + 1;
      }, 0)
    }))
  });
}

  // let count = 0;
  // // console.log("state from hook", state )
  // state.days
  // .find(element => element.name === day).appointments.forEach((a) => {
  //   return state.appointments[a].interview ? 0 : count+1;
  // }, 0); 
  // return count
  //   }

    


return {
  state,
  setDay,
  bookInterview,
  cancelInterview
  
}
}