
export function getAppointmentsForDay(state, day) {

  let ListAppointments = [];

  state.days.map(dataDays => {
    if (dataDays.name === day) {
      dataDays.appointments.forEach(appt => ListAppointments.push(state.appointments[appt]))
      
    }
  })

  return ListAppointments;
}

export function getInterviewersForDay(state, day) {

  let ListInterviewers = [];
  state.days.map(dataDays => {
    if (dataDays.name === day) {
      dataDays.interviewers.forEach(appt => ListInterviewers.push(state.interviewers[appt]))
    }
    })
  return ListInterviewers;
}



export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const interviewerData = state.interviewers[interview.interviewer];

  return {
    student: interview.student,
    interviewer: interviewerData
  }

}
