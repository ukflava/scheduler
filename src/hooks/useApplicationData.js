import { useEffect, useReducer } from "react";
import axios from "axios";
import reducer, {
  SET_DAY,
  SET_APPLICATION_DATA,
  SET_INTERVIEW
} from "reducers/application";

export default function useApplicationData(props) {
  
  const [state, dispatch] = useReducer(reducer, {
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => dispatch({ type: SET_DAY, day: day });

useEffect(() => {
  Promise.all([
       axios.get("/api/days"),
    axios.get("/api/appointments"),
    axios.get("/api/interviewers")
  ]).then(all => {
  
   

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