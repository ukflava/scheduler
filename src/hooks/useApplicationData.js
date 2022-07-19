import React, { useState, useEffect } from "react";

import axios from "axios";


export default function useApplicationData(props) {

const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}
});
const setDay = day => setState({ ...state, day });

useEffect(() => {
  Promise.all([
    axios.get("http://localhost:8001/api/days"),
    axios.get("http://localhost:8001/api/appointments"),
    axios.get("http://localhost:8001/api/interviewers")
  ]).then(all => {
  //  console.log(all)
   setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));

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

// function editInterview(id, interview) {
//   console.log(id, interview);
//   return axios.put(`/api/appointments/${id}`, { interview })
// }


function cancelInterview(id) {
    return axios.delete(`/api/appointments/${id}`)}


    // const [count,setCount] = useState(0);

function spots (state, day) {
  let count =0;
  console.log("state from hook", state )
  state.days
  .filter(element => element.name === day).appointments.forEach((a) => {
    return state.appointments[a].interview ? 0 : count+1;
  }, 0); 
  return count
    }
    


return {
  state,
  setDay,
  bookInterview,
  cancelInterview,
  spots
};
}