// Create a function called getAppointmentsForDay 
// that will receive two arguments state and day will return an array of appointments for the given day
// import React from "react";

export function getAppointmentsForDay(state, day) {

  let ListAppointments = [];

  state.days.map(dataDays => {
    if (dataDays.name === day) {
      dataDays.appointments.forEach(appt => ListAppointments.push(state.appointments[appt]))
      // dataDays.appointments.forEach(appt => ListAppointments.push(appt))
    }
  })
  console.log("LIST FROM SELECTORS APPFORDAY",ListAppointments)
  return ListAppointments;
}
// export function getInterviewersForDay(state) {

//   let ListInterviewers = [];

//   Object.values(state.interviewers).map(InterviewerData => {
//     // name or id ???
//     // if (InterviewerData.id === personId) {
//       InterviewerData.forEach(appt => ListInterviewers.push(state.interviewers[appt]))
//     // }
//   })
//   console.log(ListInterviewers)
//   return ListInterviewers;
// }


export function getInterviewersForDay(state, day) {

  let ListInterviewers = [];
  state.days.map(dataDays => {
    if (dataDays.name === day) {
      dataDays.interviewers.forEach(appt => ListInterviewers.push(state.interviewers[appt]))
    }
    })
  // name or id ???
//     // if (InterviewerData.id === personId) {

console.log(ListInterviewers)
  return ListInterviewers;
}



export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerData = state.interviewers[interview.interviewer];

  
  console.log("viewe", interview)
  console.log("student, interviewer", state)
  return {
    student: interview.student,
    interviewer: interviewerData
  }

}
